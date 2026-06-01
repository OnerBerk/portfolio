import type { MotionValue } from 'motion/react';
import type { ComponentType } from 'react';
import HeroParallaxDark from './hero-parallax-dark';
import HeroParallaxSand from './hero-parallax-sand';
import HeroParallaxWhite from './hero-parallax-white';
import darkStyles from './local-styles/hero-dark.module.scss';
import sandStyles from './local-styles/hero-sand.module.scss';
import whiteStyles from './local-styles/hero-white.module.scss';

export type ThemeName = 'theme-one' | 'theme-two' | 'theme-three';

type HeroTitleStyles = typeof whiteStyles;

type HeroParallaxProps = {
  scrollYProgress: MotionValue<number>;
};

type HeroThemeConfig = {
  titleStyles: HeroTitleStyles;
  titleContentExtraClass?: string;
  Parallax: ComponentType<HeroParallaxProps> | null;
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
  },
  'theme-two': {
    titleStyles: darkStyles,
    Parallax: HeroParallaxDark,
  },
  'theme-three': {
    titleStyles: sandStyles,
    Parallax: HeroParallaxSand,
  },
};

export function getHeroThemeConfig(theme: ThemeName): HeroThemeConfig {
  return heroThemeConfig[theme];
}
