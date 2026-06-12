/* eslint-disable @next/next/no-img-element -- calques parallax décoratifs dans motion.div */
'use client';

import { motion, useReducedMotion, useTransform, type MotionValue } from 'motion/react';
import styles from './local-styles/hero-sand.module.scss';

const SAND_ASSETS = '/assets/hero/parallax-bg-sand';

type HeroParallaxSandProps = {
  scrollYProgress: MotionValue<number>;
};

const HeroParallaxSand = ({ scrollYProgress }: HeroParallaxSandProps) => {
  const prefersReducedMotion = useReducedMotion();

  const balloon2Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -5200],
  );
  const balloon7Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -1600],
  );
  const balloon9Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -7760],
  );

  return (
    <div className={styles.heroParallaxContent} aria-hidden="true">
      <motion.div className={`${styles.balloon} ${styles.balloon2}`} style={{ y: balloon2Y }}>
        <img src={`${SAND_ASSETS}/ballon2.png`} alt="Montgolfière décorative, calque 2" />
      </motion.div>
      <motion.div className={`${styles.balloon} ${styles.balloon7}`} style={{ y: balloon7Y }}>
        <img src={`${SAND_ASSETS}/ballon7.png`} alt="Montgolfière décorative, calque 7" />
      </motion.div>
      <motion.div className={`${styles.balloon} ${styles.balloon9}`} style={{ y: balloon9Y }}>
        <img src={`${SAND_ASSETS}/ballon9.png`} alt="Montgolfière décorative, calque 9" />
      </motion.div>
    </div>
  );
};

export default HeroParallaxSand;
