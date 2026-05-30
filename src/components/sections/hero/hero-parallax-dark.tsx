'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import styles from './hero-section.module.scss';
import { useTheme } from 'next-themes';
import { useResponsive } from '@/hooks/use-responsive';

export default function HeroParallaxDark() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const { isMobile, isTablet } = useResponsive();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const mountainY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -600],
  );
  const moonY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 600]);

  const size = isMobile ? 150 : isTablet ? 250 : 300;

  return (
    <div ref={heroRef} className={styles.heroParallaxContent} aria-hidden="true">
      <motion.div className={styles.skyLayer} style={{ y: mountainY }}>
        <Image
          src="/assets/hero/parallax-bg-dark/bg-dark-layer0.jpeg"
          alt="Sky layer"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>

      <motion.div className={styles.mountainLayer} style={{ y: mountainY }}>
        <Image
          src="/assets/hero/parallax-bg-dark/bg-dark-yama.png"
          alt="Mountain layer"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>

      <motion.div className={styles.moonLayer} style={{ y: moonY }}>
        <Image
          src="/assets/hero/parallax-bg-dark/bg-dark-moon1.png"
          alt="Moon layer"
          priority
          width={size}
          height={size}
        />
      </motion.div>
    </div>
  );
}
