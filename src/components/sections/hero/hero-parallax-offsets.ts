export function getDarkParallaxOffsets(isMobile: boolean, isTablet: boolean) {
  if (isMobile) {
    return { mountain: -350, moon: 450 };
  }

  if (isTablet) {
    return { mountain: -350, moon: 680 };
  }

  return { mountain: -500, moon: 450 };
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
