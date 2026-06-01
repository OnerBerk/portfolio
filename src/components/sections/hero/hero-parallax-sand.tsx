'use client';

import { motion, useReducedMotion, useTransform, type MotionValue } from 'motion/react';
import styles from './local-styles/hero-sand.module.scss';

const SAND_ASSETS = '/assets/hero/parallax-bg-sand';

type HeroParallaxSandProps = {
  scrollYProgress: MotionValue<number>;
};

const HeroParallaxSand = ({ scrollYProgress }: HeroParallaxSandProps) => {
  const prefersReducedMotion = useReducedMotion();

  const balloon1Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -1120],
  );
  const balloon2Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -5200],
  );
  const balloon3Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -1880],
  );
  const balloon4Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -360],
  );
  const balloon5Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -5440],
  );
  const balloon6Y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -1520],
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
      <motion.div className={`${styles.balloon} ${styles.balloon1}`} style={{ y: balloon1Y }}>
        <img src={`${SAND_ASSETS}/ballon1.png`} alt="Montgolfière décorative, calque 1" />
      </motion.div>
      <motion.div className={`${styles.balloon} ${styles.balloon2}`} style={{ y: balloon2Y }}>
        <img src={`${SAND_ASSETS}/ballon2.png`} alt="Montgolfière décorative, calque 2" />
      </motion.div>
      <motion.div className={`${styles.balloon} ${styles.balloon3}`} style={{ y: balloon3Y }}>
        <img src={`${SAND_ASSETS}/ballon3.png`} alt="Montgolfière décorative, calque 3" />
      </motion.div>
      <motion.div className={`${styles.balloon} ${styles.balloon4}`} style={{ y: balloon4Y }}>
        <img src={`${SAND_ASSETS}/ballon4.png`} alt="Montgolfière décorative, calque 4" />
      </motion.div>
      <motion.div className={`${styles.balloon} ${styles.balloon5}`} style={{ y: balloon5Y }}>
        <img src={`${SAND_ASSETS}/ballon5.png`} alt="Montgolfière décorative, calque 5" />
      </motion.div>
      <motion.div className={`${styles.balloon} ${styles.balloon6}`} style={{ y: balloon6Y }}>
        <img src={`${SAND_ASSETS}/ballon6.png`} alt="Montgolfière décorative, calque 6" />
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
