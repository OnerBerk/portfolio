'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import HeroParallaxDark from './hero-parallax-dark';
import styles from './hero-section.module.scss';

type ThemeName = 'theme-one' | 'theme-two' | 'theme-three';

function resolveTheme(theme: string | undefined): ThemeName {
  switch (theme) {
    case 'theme-two':
      return 'theme-two';
    case 'theme-three':
      return 'theme-three';
    default:
      return 'theme-one';
  }
}

export default function HeroSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolveTheme(theme) : 'theme-one';
  const currentParallax = (() => {
    switch (currentTheme) {
      case 'theme-two':
        return <HeroParallaxDark />;
      case 'theme-three':
        return null;
      default:
        return null;
    }
  })();

  return (
    <section id="hero" className={`anchor-section ${styles.heroSection}`}>
      <div className={styles.heroTitleContent}>
        <h1 className={styles.heroTitle}>Rêver, concevoir, coder, livrer</h1>
        <h2 className={styles.heroSubtitle}>Fullstack engineer · Et un peu rêveur</h2>
      </div>
      {currentParallax}
    </section>
  );
}
