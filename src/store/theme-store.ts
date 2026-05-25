'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const themeNames = ['theme-one', 'theme-two', 'theme-three'] as const;

export type ThemeName = (typeof themeNames)[number];

type ThemeStore = {
  selectedTheme: ThemeName;
  setSelectedTheme: (theme: ThemeName) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      selectedTheme: 'theme-one',
      setSelectedTheme: (theme) => set({ selectedTheme: theme }),
    }),
    {
      name: 'portfolio-theme-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
