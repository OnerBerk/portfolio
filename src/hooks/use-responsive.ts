'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 1024,
} as const;

function subscribe(onStoreChange: () => void) {
  window.addEventListener('resize', onStoreChange);
  return () => window.removeEventListener('resize', onStoreChange);
}

function getWidth() {
  return window.innerWidth;
}

export function useResponsive() {
  const [mounted, setMounted] = useState(false);
  const width = useSyncExternalStore(subscribe, getWidth, () => breakpoints.lg);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = width < breakpoints.md;
  const isTablet = width >= breakpoints.md && width < breakpoints.lg;
  const isDesktop = width >= breakpoints.lg;

  return {
    mounted,
    width: mounted ? width : null,
    isMobile: mounted && isMobile,
    isTablet: mounted && isTablet,
    isDesktop: mounted && isDesktop,
  };
}
