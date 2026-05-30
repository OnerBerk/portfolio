import type { MotionValue } from 'motion/react';
import type { ComponentType } from 'react';
import HeroParallaxDark from './hero-parallax-dark';
import HeroParallaxWhite from './hero-parallax-white';
import { fadeOnScroll } from './hero-parallax-offsets';
import darkStyles from './hero-dark.module.scss';
import whiteStyles from './hero-white.module.scss';

export type ThemeName = 'theme-one' | 'theme-two' | 'theme-three';

type HeroTitleStyles = typeof whiteStyles;

type HeroParallaxProps = {
  scrollYProgress: MotionValue<number>;
};

type HeroThemeConfig = {
  titleStyles: HeroTitleStyles;
  titleContentExtraClass?: string;
  Parallax: ComponentType<HeroParallaxProps> | null;
  getTitleFade: (progress: number, isMobile: boolean) => number;
};

export function resolveTheme(theme: string | undefined): ThemeName {
  switch (theme) {
    case 'theme-two':
      return 'theme-two';
    case 'theme-three':
      return 'theme-three';
    default:
      return 'theme-one';
  }
}

const heroThemeConfig: Record<ThemeName, HeroThemeConfig> = {
  'theme-one': {
    titleStyles: whiteStyles,
    titleContentExtraClass: whiteStyles.heroTitleContentThemeOne,
    Parallax: HeroParallaxWhite,
    getTitleFade(progress, isMobile) {
      if (!isMobile) return 1;
      return fadeOnScroll(progress, 0.65, 0.9);
    },
  },
  'theme-two': {
    titleStyles: darkStyles,
    Parallax: HeroParallaxDark,
    getTitleFade(progress, isMobile) {
      if (isMobile) return fadeOnScroll(progress, 0.5, 0.75);
      return fadeOnScroll(progress, 0.6, 0.85);
    },
  },
  'theme-three': {
    titleStyles: darkStyles,
    Parallax: null,
    getTitleFade() {
      return 1;
    },
  },
};

export function getHeroThemeConfig(theme: ThemeName): HeroThemeConfig {
  return heroThemeConfig[theme];
}
