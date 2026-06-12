'use client';

import Image from 'next/image';

import { gambarino } from '@/app/fonts';
import { animate, motion, useMotionValue, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import TimelineDetail from './timeline-detail';
import TimelineGlow from './timeline-glow';
import {
  detailForYear,
  FIRST_EVENT_YEAR,
  stepForYear,
  TIMELINE_STEPS,
  type TimelineStep,
} from './timeline-steps';
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
const EVENT_YEARS = TIMELINE_STEPS.map((step) => step.year);
const LAST_EVENT_YEAR = EVENT_YEARS.at(-1)!;

const Timeline = () => {
  const reducedMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [activeYear, setActiveYear] = useState(DEFAULT_YEAR);
  const [showHighlight, setShowHighlight] = useState(true);
  const [revealedStep, setRevealedStep] = useState<TimelineStep | null>(null);

  const bandX = useMotionValue(0);
  const visibleYears = mobile ? 3 : 5;
  const yearWidth = width > 0 ? width / visibleYears : 0;
  const center = width / 2;
  const minX = center - (END_YEAR - START_YEAR) * yearWidth;

  const clampX = (x: number) => Math.min(center, Math.max(minX, x));

  const yearAt = (x: number) => {
    const index = Math.round((center - x) / yearWidth);
    return Math.min(END_YEAR, Math.max(START_YEAR, START_YEAR + index));
  };

  const xForYear = (year: number) => center - (year - START_YEAR) * yearWidth;

  const finishMoving = (year: number) => {
    setActiveYear(year);
    setShowHighlight(true);
    setRevealedStep(detailForYear(year));
  };

  const goToYear = (year: number) => {
    if (yearWidth <= 0) return;

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
    bandX.set(center - (activeYear - START_YEAR) * yearWidth);
  }, [activeYear, bandX, center, yearWidth]);

  const prevYear =
    activeYear < FIRST_EVENT_YEAR
      ? null
      : (EVENT_YEARS.findLast((year) => year < activeYear) ?? FIRST_EVENT_YEAR - 1);
  const nextYear =
    activeYear >= LAST_EVENT_YEAR ? null : (EVENT_YEARS.find((year) => year > activeYear) ?? null);

  return (
    <div className={`${styles.root} ${gambarino.className}`}>
      <div className={styles.timeline}>
        <div className={styles.glowLayer} aria-hidden="true">
          {GLOW_PLACEMENTS.map((placement) => (
            <TimelineGlow key={placement} placement={placement} />
          ))}
        </div>

        <div className={styles.needleLayer} aria-hidden="true">
          <Image
            className={styles.needleImage}
            src="/assets/about/needle.png"
            alt=""
            width={60}
            height={220}
            aria-hidden
          />
        </div>
        <button
          type="button"
          className={`${styles.navButton} ${prevYear === null ? styles.navButtonHidden : ''}`}
          aria-label="Événement précédent"
          aria-hidden={prevYear === null}
          tabIndex={prevYear === null ? -1 : 0}
          disabled={prevYear === null}
          onClick={() => {
            if (prevYear !== null) goToYear(prevYear);
          }}
        >
          ‹
        </button>

        <div className={styles.viewport} ref={viewportRef}>
          <div className={styles.dragArea}>
            <motion.div
              className={styles.band}
              style={{ x: bandX, width: YEARS.length * yearWidth }}
              drag={yearWidth > 0 ? 'x' : false}
              dragConstraints={{ left: minX, right: center }}
              dragMomentum={!reducedMotion}
              dragElastic={0}
              onDragStart={() => setShowHighlight(false)}
              onDragEnd={() => moveTo(bandX.get())}
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
          className={`${styles.navButton} ${nextYear === null ? styles.navButtonHidden : ''}`}
          aria-label="Événement suivant"
          aria-hidden={nextYear === null}
          tabIndex={nextYear === null ? -1 : 0}
          disabled={nextYear === null}
          onClick={() => {
            if (nextYear !== null) goToYear(nextYear);
          }}
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
