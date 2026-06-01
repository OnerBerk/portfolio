'use client';

import { useTheme } from 'next-themes';
import { useScroll } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { getHeroThemeConfig, resolveTheme } from './hero-theme-config';
import styles from './local-styles/hero-section.module.scss';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const sectionClassName = `anchor-section ${styles.heroSection}`;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) {
    return <section id="hero" ref={heroRef} className={sectionClassName} />;
  }

  const { titleStyles, titleContentExtraClass, Parallax } = getHeroThemeConfig(
    resolveTheme(resolvedTheme),
  );

  const titleContentClassName = [titleStyles.heroTitleContent, titleContentExtraClass]
    .filter(Boolean)
    .join(' ');

  return (
    <section id="hero" ref={heroRef} className={sectionClassName}>
      <div className={titleContentClassName}>
        <h1 className={titleStyles.heroTitle}>Rêver, concevoir, coder, livrer</h1>
        <h2 className={titleStyles.heroSubtitle}>Fullstack engineer · Et un peu rêveur</h2>
      </div>
      {Parallax ? <Parallax scrollYProgress={scrollYProgress} /> : null}
    </section>
  );
};

export default HeroSection;
