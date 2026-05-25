'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { themeNames, type ThemeName, useThemeStore } from '@/store/theme-store';
import styles from './theme-switcher.module.scss';

const themeOptions = [
  { name: 'theme-one', swatch: 'var(--theme-one-background)', label: 'Thème 1' },
  { name: 'theme-two', swatch: 'var(--theme-two-background)', label: 'Thème 2' },
  { name: 'theme-three', swatch: 'var(--theme-three-background)', label: 'Thème 3' },
] as const;

function isThemeName(theme: string | undefined): theme is ThemeName {
  if (!theme) {
    return false;
  }

  return themeNames.includes(theme as ThemeName);
}

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const selectedTheme = useThemeStore((state) => state.selectedTheme);
  const setSelectedTheme = useThemeStore((state) => state.setSelectedTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    if (isThemeName(theme) && theme !== selectedTheme) {
      setSelectedTheme(theme);
    }
  }, [mounted, selectedTheme, setSelectedTheme, theme]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    if (!isThemeName(theme) || theme !== selectedTheme) {
      setTheme(selectedTheme);
    }
  }, [mounted, selectedTheme, setTheme, theme]);

  const handleThemeChange = (nextTheme: ThemeName) => {
    setSelectedTheme(nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) {
    return null;
  }

  const activeTheme = isThemeName(theme) ? theme : selectedTheme;

  return (
    <div className={styles.switcher} aria-label="Sélecteur de thème">
      {themeOptions.map((option) => {
        const isActive = activeTheme === option.name;

        return (
          <button
            key={option.name}
            type="button"
            className={`${styles.button} ${isActive ? styles.active : ''}`}
            onClick={() => handleThemeChange(option.name)}
            aria-label={option.label}
            style={{ '--swatch': option.swatch } as CSSProperties}
          />
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
