'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useTransform, type MotionValue } from 'motion/react';
import { useResponsive } from '@/hooks/use-responsive';
import { getDarkParallaxOffsets } from './hero-parallax-offsets';
import styles from './local-styles/hero-dark.module.scss';

type HeroParallaxDarkProps = {
  scrollYProgress: MotionValue<number>;
};

const HeroParallaxDark = ({ scrollYProgress }: HeroParallaxDarkProps) => {
  const prefersReducedMotion = useReducedMotion();
  const { isMobile, isTablet } = useResponsive();
  const { mountain, moon } = getDarkParallaxOffsets(isMobile, isTablet);

  const mountainY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, mountain],
  );
  const moonY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, moon]);

  const size = isMobile ? 150 : isTablet ? 200 : 300;

  return (
    <div className={styles.heroParallaxContent} aria-hidden="true">
      <motion.div className={styles.skyLayer} style={{ y: mountainY }}>
        <Image
          src="/assets/hero/parallax-bg-dark/bg-dark-layer0.jpeg"
          alt="Ciel étoilé, fond décoratif du hero"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>

      <motion.div className={styles.mountainLayer} style={{ y: mountainY }}>
        <Image
          src="/assets/hero/parallax-bg-dark/bg-dark-yama.png"
          alt="Silhouette de montagnes, fond décoratif du hero"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>

      <motion.div className={styles.moonLayer} style={{ y: moonY }}>
        <Image
          src="/assets/hero/parallax-bg-dark/bg-dark-moon1.png"
          alt="Lune, élément décoratif du hero"
          priority
          width={size}
          height={size}
        />
      </motion.div>
    </div>
  );
};

export default HeroParallaxDark;
