'use client';

import { useTheme } from 'next-themes';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useResponsive } from '@/hooks/use-responsive';
import { getHeroThemeConfig, resolveTheme } from './hero-theme-config';
import styles from './hero-section.module.scss';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { isMobile } = useResponsive();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const titleOpacity = useTransform(scrollYProgress, (progress) => {
    if (prefersReducedMotion) return 1;

    const activeTheme = mounted ? resolveTheme(theme) : 'theme-one';
    return getHeroThemeConfig(activeTheme).getTitleFade(progress, isMobile);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolveTheme(theme) : 'theme-one';
  const { titleStyles, titleContentExtraClass, Parallax } = getHeroThemeConfig(currentTheme);

  const titleContentClassName = [titleStyles.heroTitleContent, titleContentExtraClass]
    .filter(Boolean)
    .join(' ');

  return (
    <section id="hero" ref={heroRef} className={`anchor-section ${styles.heroSection}`}>
      <motion.div className={titleContentClassName} style={{ opacity: titleOpacity }}>
        <h1 className={titleStyles.heroTitle}>Rêver, concevoir, coder, livrer</h1>
        <h2 className={titleStyles.heroSubtitle}>Fullstack engineer · Et un peu rêveur</h2>
      </motion.div>
      {Parallax ? <Parallax scrollYProgress={scrollYProgress} /> : null}
    </section>
  );
}
