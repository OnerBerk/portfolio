'use client';

import { gambarino } from '@/app/fonts';
import { animate, motion, useMotionValue, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import TimelineDetail from './timeline-detail';
import TimelineGlow from './timeline-glow';
import { detailForYear, stepForYear, type TimelineStep } from './timeline-steps';
import styles from './timeline.module.scss';

const GLOW_PLACEMENTS = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
] as const;

const START_YEAR = 2010;
const END_YEAR = 2026;
const DEFAULT_YEAR = 2015;

const YEARS = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i);
const MINOR_TICKS = [1, 2, 3, 4, 5] as const;

const Timeline = () => {
  const reducedMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, pointerX: 0, bandX: 0 });
  const activeYearRef = useRef(DEFAULT_YEAR);

  const [width, setWidth] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [activeYear, setActiveYear] = useState(DEFAULT_YEAR);
  const [showHighlight, setShowHighlight] = useState(true);
  const [revealedStep, setRevealedStep] = useState<TimelineStep | null>(null);

  const bandX = useMotionValue(0);
  const visibleYears = mobile ? 3 : 5;
  const yearWidth = width > 0 ? width / visibleYears : 0;
  const center = width / 2;

  const clampX = (x: number) => {
    const min = center - (END_YEAR - START_YEAR) * yearWidth;
    return Math.min(center, Math.max(min, x));
  };

  const yearAt = (x: number) => {
    const index = Math.round((center - x) / yearWidth);
    return Math.min(END_YEAR, Math.max(START_YEAR, START_YEAR + index));
  };

  const xForYear = (year: number) => center - (year - START_YEAR) * yearWidth;

  const finishMoving = (year: number) => {
    activeYearRef.current = year;
    setActiveYear(year);
    setShowHighlight(true);
    setRevealedStep(detailForYear(year));
  };

  const goToYear = (year: number) => {
    if (yearWidth <= 0) return;

    dragRef.current.active = false;
    setShowHighlight(false);
    const targetX = xForYear(year);

    if (reducedMotion) {
      bandX.set(targetX);
      finishMoving(year);
      return;
    }

    void animate(bandX, targetX, {
      type: 'spring',
      stiffness: 280,
      damping: 32,
      onComplete: () => finishMoving(year),
    });
  };

  const moveTo = (targetX: number) => {
    goToYear(yearAt(clampX(targetX)));
  };

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const onResize = () => {
      setWidth(node.clientWidth);
      setMobile(window.innerWidth < 768);
    };

    onResize();
    const observer = new ResizeObserver(onResize);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (yearWidth <= 0) return;
    bandX.set(xForYear(activeYearRef.current));
  }, [bandX, width, mobile, yearWidth]);

  return (
    <div className={`${styles.root} ${gambarino.className}`}>
      <div className={styles.timeline}>
        <div className={styles.glowLayer} aria-hidden="true">
          {GLOW_PLACEMENTS.map((placement) => (
            <TimelineGlow key={placement} placement={placement} />
          ))}
        </div>

        <div className={styles.needleLayer} aria-hidden="true">
          <img className={styles.needleImage} src="/assets/about/needle.png" alt="needle" />
        </div>
        <button
          type="button"
          className={styles.navButton}
          aria-label="Année précédente"
          onClick={() => moveTo(bandX.get() + yearWidth)}
        >
          ‹
        </button>

        <div className={styles.viewport} ref={viewportRef}>
          <div
            className={styles.dragArea}
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId);
              dragRef.current = { active: true, pointerX: event.clientX, bandX: bandX.get() };
              flushSync(() => setShowHighlight(false));
            }}
            onPointerMove={(event) => {
              if (!dragRef.current.active || yearWidth <= 0) return;
              const nextX = clampX(
                dragRef.current.bandX + (event.clientX - dragRef.current.pointerX),
              );
              bandX.set(nextX);
            }}
            onPointerUp={() => {
              if (!dragRef.current.active) return;
              dragRef.current.active = false;
              moveTo(bandX.get());
            }}
            onPointerCancel={() => {
              dragRef.current.active = false;
              moveTo(bandX.get());
            }}
          >
            <motion.div
              className={styles.band}
              style={{ x: bandX, width: YEARS.length * yearWidth }}
            >
              <div className={styles.ruler}>
                {YEARS.map((year) => {
                  const step = stepForYear(year);
                  const labelOnTop = year % 2 === 1;
                  const isPastLife = year < 2015;
                  const isActive = showHighlight && year === activeYear;

                  return (
                    <div
                      key={year}
                      className={`${styles.yearSlot} ${isPastLife ? styles.yearSlotPastLife : ''} ${isActive ? styles.yearSlotActive : ''}`}
                      style={{ width: yearWidth }}
                    >
                      <div
                        className={`${styles.major} ${labelOnTop ? styles.majorUp : styles.majorDown}`}
                      >
                        <span className={styles.yearLabel}>{year}</span>
                        <span className={styles.majorLine} aria-hidden="true" />
                      </div>

                      {step ? (
                        <button
                          type="button"
                          className={styles.eventDot}
                          aria-label={`${year} : ${step.title}`}
                          onPointerDown={(event) => event.stopPropagation()}
                          onClick={() => goToYear(step.year)}
                        />
                      ) : null}

                      <div className={styles.track}>
                        <div className={styles.ticksAbove}>
                          {MINOR_TICKS.map((tick) => (
                            <span
                              key={`up-${tick}`}
                              className={styles.minorLine}
                              style={{ left: `${(tick / 6) * 100}%` }}
                            />
                          ))}
                        </div>

                        <div className={styles.lineRail}>
                          <span className={styles.lineBar} />
                          <span className={styles.lineBar} />
                        </div>

                        <div className={styles.ticksBelow}>
                          {MINOR_TICKS.map((tick) => (
                            <span
                              key={`down-${tick}`}
                              className={styles.minorLine}
                              style={{ left: `${(tick / 6) * 100}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <button
          type="button"
          className={styles.navButton}
          aria-label="Année suivante"
          onClick={() => moveTo(bandX.get() - yearWidth)}
        >
          ›
        </button>
        <span className={styles.corporateLabel}>Ön-air corp</span>
      </div>

      {revealedStep ? (
        <TimelineDetail key={revealedStep.dateLabel ?? revealedStep.year} step={revealedStep} />
      ) : null}
    </div>
  );
};

export default Timeline;
