'use client';

import { Mouse01Icon, SwipeLeft01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { useResponsive } from '@/hooks/use-responsive';

import styles from './timeline-hint.module.scss';

export const TIMELINE_HINT_MS = 3000;

type TimelineHintProps = {
  onDone?: () => void;
};

const TimelineHint = ({ onDone }: TimelineHintProps) => {
  const reducedMotion = useReducedMotion();
  const { isMobile } = useResponsive();
  const [show, setShow] = useState(false);
  const [entered, setEntered] = useState(false);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    return () => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  const onViewportEnter = () => {
    if (entered) return;
    setEntered(true);
    setShow(true);
    hideTimeout.current = setTimeout(() => {
      setShow(false);
    }, TIMELINE_HINT_MS);
  };

  const icon = isMobile ? SwipeLeft01Icon : Mouse01Icon;

  return (
    <div className={styles.hint} aria-hidden="true">
      <motion.div
        className={styles.anchor}
        onViewportEnter={onViewportEnter}
        viewport={{ once: true, amount: 0.5 }}
      >
        <AnimatePresence onExitComplete={() => onDoneRef.current?.()}>
          {show ? (
            <motion.div
              className={styles.iconWrap}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <motion.span
                className={styles.sway}
                animate={reducedMotion ? undefined : { rotate: [-12, 12, -12] }}
                transition={
                  reducedMotion ? undefined : { duration: 0.9, repeat: Infinity, ease: 'easeInOut' }
                }
              >
                <HugeiconsIcon icon={icon} size={40} strokeWidth={2} aria-hidden="true" />
              </motion.span>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TimelineHint;
