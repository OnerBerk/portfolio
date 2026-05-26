'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from './theme-switcher.module.scss';

const themeOptions = [
  { name: 'theme-one', swatch: '#f9fafb', label: 'Thème 1' },
  { name: 'theme-two', swatch: '#1b211a', label: 'Thème 2' },
  { name: 'theme-three', swatch: '#efb036', label: 'Thème 3' },
] as const;
const themeNames = themeOptions.map((themeOption) => themeOption.name);
type ThemeName = (typeof themeOptions)[number]['name'];

type ThemeSwitcherProps = {
  className?: string;
};

function isThemeName(theme: string | undefined): theme is ThemeName {
  if (!theme) {
    return false;
  }

  return themeNames.includes(theme as ThemeName);
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (nextTheme: ThemeName) => {
    setTheme(nextTheme);
  };

  if (!mounted) {
    return null;
  }

  const activeTheme = isThemeName(theme) ? theme : 'theme-one';
  const switcherClassName = className ? `${styles.switcher} ${className}` : styles.switcher;

  return (
    <div className={switcherClassName} role="group" aria-label="Sélecteur de thème">
      {themeOptions.map((option) => {
        const isActive = activeTheme === option.name;

        return (
          <button
            key={option.name}
            type="button"
            className={`${styles.button} ${isActive ? styles.active : ''}`}
            onClick={() => handleThemeChange(option.name)}
            aria-label={option.label}
            aria-pressed={isActive}
            style={{ backgroundColor: option.swatch }}
          />
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
