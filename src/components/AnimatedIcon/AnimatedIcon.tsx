'use client';

import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import { motion, useReducedMotion } from 'motion/react';
import styles from './AnimatedIcon.module.scss';

type AnimatedIconProps = {
  icon: IconSvgElement;
  size?: number;
  strokeWidth?: number;
  filled?: boolean;
  emphasized?: boolean;
  className?: string;
};

const AnimatedIcon = ({
  icon,
  size = 24,
  strokeWidth = 2,
  filled = false,
  emphasized = false,
  className,
}: AnimatedIconProps) => {
  const prefersReducedMotion = useReducedMotion();
  const wrapperClassName = className ? `${styles.wrapper} ${className}` : styles.wrapper;
  const wrapperStyle = { width: `${size}px`, height: `${size}px` };

  const scaleTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 260, damping: 20, mass: 0.6 };
  const emptyFill = 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';
  const fullFill = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
  const liquidFrames = [
    emptyFill,
    'polygon(0% 84%, 14% 74%, 30% 86%, 46% 71%, 62% 89%, 78% 73%, 100% 82%, 100% 100%, 0% 100%)',
    'polygon(0% 60%, 14% 48%, 30% 66%, 46% 50%, 62% 70%, 78% 52%, 100% 62%, 100% 100%, 0% 100%)',
    'polygon(0% 34%, 16% 23%, 34% 40%, 50% 25%, 66% 42%, 82% 24%, 100% 36%, 100% 100%, 0% 100%)',
    'polygon(0% 12%, 18% 2%, 36% 15%, 52% 4%, 70% 16%, 86% 3%, 100% 11%, 100% 100%, 0% 100%)',
    fullFill,
  ];
  const fillAnimate = prefersReducedMotion ? (filled ? fullFill : emptyFill) : filled ? liquidFrames : emptyFill;
  const fillTransition = prefersReducedMotion
    ? { duration: 0 }
    : filled
      ? {
          duration: 2.2,
          times: [0, 0.2, 0.42, 0.65, 0.85, 1],
          ease: [0.16, 1, 0.3, 1] as const,
        }
      : { duration: 0.45, ease: 'easeOut' as const };

  return (
    <motion.span
      className={wrapperClassName}
      style={wrapperStyle}
      aria-hidden="true"
      animate={{ scale: emphasized ? 1.18 : 1 }}
      transition={scaleTransition}
    >
      <HugeiconsIcon
        icon={icon}
        className={`${styles.layer} ${styles.stroke}`}
        size={size}
        strokeWidth={strokeWidth}
        color="currentColor"
        fill="none"
        aria-hidden="true"
        data-ai-stroke
      />
      <motion.span
        className={styles.fillMask}
        initial={false}
        animate={{ clipPath: fillAnimate }}
        transition={fillTransition}
      >
        <HugeiconsIcon
          icon={icon}
          altIcon={icon}
          className={`${styles.layer} ${styles.fill}`}
          size={size}
          strokeWidth={0}
          showAlt
          color="var(--accent, currentColor)"
          fill="var(--accent, currentColor)"
          aria-hidden="true"
          data-ai-fill
        />
      </motion.span>
    </motion.span>
  );
};

export default AnimatedIcon;
