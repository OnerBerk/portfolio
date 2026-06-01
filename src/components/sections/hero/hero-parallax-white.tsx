'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useTransform, type MotionValue } from 'motion/react';
import { useResponsive } from '@/hooks/use-responsive';
import { getWhiteParallaxOffsets } from './hero-parallax-offsets';
import styles from './local-styles/hero-white.module.scss';

type HeroParallaxWhiteProps = {
  scrollYProgress: MotionValue<number>;
};

const HeroParallaxWhite = ({ scrollYProgress }: HeroParallaxWhiteProps) => {
  const prefersReducedMotion = useReducedMotion();
  const { isMobile, isTablet } = useResponsive();
  const { level1, level2 } = getWhiteParallaxOffsets(isMobile, isTablet);

  const level1LeftX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -level1],
  );
  const level1RightX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, level1],
  );
  const level2Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, level2],
  );

  return (
    <div className={styles.heroParallaxContent} aria-hidden="true">
      <motion.div className={styles.whiteLevel2} style={{ y: level2Y }}>
        <Image
          src="/assets/hero/parallax-bg-white/bg-white-level-2.png"
          alt="Formes abstraites blanches, arrière-plan décoratif du hero"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>

      <motion.div className={styles.whiteLevel1Left} style={{ x: level1LeftX }}>
        <Image
          src="/assets/hero/parallax-bg-white/bg-white-level-1-left.png"
          alt="Formes abstraites blanches, côté gauche du hero"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>

      <motion.div className={styles.whiteLevel1Right} style={{ x: level1RightX }}>
        <Image
          src="/assets/hero/parallax-bg-white/bg-white-level-1-right.png"
          alt="Formes abstraites blanches, côté droit du hero"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
};

export default HeroParallaxWhite;
