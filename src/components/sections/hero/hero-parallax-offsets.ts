export function getDarkParallaxOffsets(isMobile: boolean, isTablet: boolean) {
  if (isMobile) {
    return { mountain: -350, moon: 400 };
  }

  if (isTablet) {
    return { mountain: -550, moon: 650 };
  }

  return { mountain: -900, moon: 1100 };
}

export function getWhiteParallaxOffsets(isMobile: boolean, isTablet: boolean) {
  if (isMobile) {
    return { level1: 500, level2: 600 };
  }

  if (isTablet) {
    return { level1: 800, level2: 900 };
  }

  return { level1: 1200, level2: 1500 };
}

export function fadeOnScroll(progress: number, fadeStart: number, fadeEnd: number) {
  if (progress <= fadeStart) return 1;
  if (progress >= fadeEnd) return 0;
  return 1 - (progress - fadeStart) / (fadeEnd - fadeStart);
}
