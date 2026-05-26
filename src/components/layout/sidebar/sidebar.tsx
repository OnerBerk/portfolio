'use client';

import AnimatedIcon from '@/components/AnimatedIcon/AnimatedIcon';
import Link from 'next/link';
import styles from './sidebar.module.scss';

import { navItems } from './utils';
import { useState } from 'react';

const Sidebar = () => {
  const currentYear = new Date().getFullYear();
  const [activeItem, setActiveItem] = useState('Home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [focusedItem, setFocusedItem] = useState<string | null>('Home');

  return (
    <aside className={styles.sidebar} aria-label="Navigation principale">
      <nav className={styles.nav}>
        {navItems.map(({ href, label, icon: Icon, external }) => {
          const isFilled = activeItem === label || hoveredItem === label || focusedItem === label;
          const isEmphasized = hoveredItem === label || focusedItem === label;

          return external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={styles.item}
              onMouseEnter={() => setHoveredItem(label)}
              onMouseLeave={() => setHoveredItem(null)}
              onFocus={() => setFocusedItem(label)}
              onBlur={() => setFocusedItem(null)}
            >
              <AnimatedIcon
                icon={Icon}
                size={24}
                strokeWidth={2}
                filled={isFilled}
                emphasized={isEmphasized}
                className={styles.icon}
                aria-label={label}
              />
              <span className={styles.label}>{label}</span>
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              className={styles.item}
              onMouseEnter={() => setHoveredItem(label)}
              onMouseLeave={() => setHoveredItem(null)}
              onFocus={() => setFocusedItem(label)}
              onBlur={() => setFocusedItem(null)}
              onClick={() => setActiveItem(label)}
            >
              <AnimatedIcon
                icon={Icon}
                size={24}
                strokeWidth={2}
                filled={isFilled}
                emphasized={isEmphasized}
                className={styles.icon}
                aria-label={label}
              />
              <span className={styles.label}>{label}</span>
            </Link>
          );
        })}
      </nav>

      <p className={styles.footer}>Öner Berk — {currentYear}</p>
    </aside>
  );
};

export default Sidebar;
