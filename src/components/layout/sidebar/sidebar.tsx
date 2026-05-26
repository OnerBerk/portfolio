'use client';

import AnimatedIcon from '@/components/AnimatedIcon/AnimatedIcon';
import ThemeSwitcher from '@/components/layout/theme-switcher/theme-switcher';
import Link from 'next/link';
import styles from './sidebar.module.scss';

import { navItems } from './utils';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const currentYear = new Date().getFullYear();
  const [activeItem, setActiveItem] = useState('Home');
  const [interactionItem, setInteractionItem] = useState<string | null>(null);

  useEffect(() => {
    const sections = navItems.reduce<Array<{ id: string; label: string }>>((acc, item) => {
      if (item.external || !item.href.startsWith('/#')) {
        return acc;
      }

      acc.push({ id: item.href.replace('/#', ''), label: item.label });
      return acc;
    }, []);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const bestVisible = entries.reduce<IntersectionObserverEntry | null>((best, entry) => {
          if (!entry.isIntersecting) {
            return best;
          }

          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            return entry;
          }

          return best;
        }, null);

        if (!bestVisible) {
          return;
        }

        const nextActive = sections.find((section) => section.id === bestVisible.target.id)?.label;
        if (nextActive) {
          setActiveItem((prev) => (prev === nextActive ? prev : nextActive));
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-20% 0px -45% 0px',
      },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className={styles.sidebar} aria-label="Navigation principale">
      <nav className={styles.nav}>
        {navItems.map(({ href, label, icon: Icon, external }) => {
          const isCurrent = interactionItem ? interactionItem === label : activeItem === label;

          return external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.item}
              onMouseEnter={() => setInteractionItem(label)}
              onMouseLeave={() => setInteractionItem(null)}
              onFocus={() => setInteractionItem(label)}
              onBlur={() => setInteractionItem(null)}
              aria-label={`${label} (nouvel onglet)`}
            >
              <AnimatedIcon
                icon={Icon}
                size={24}
                strokeWidth={2}
                filled={isCurrent}
                emphasized={isCurrent}
                className={styles.icon}
              />
              <span className={styles.label}>{label}</span>
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              className={styles.item}
              onMouseEnter={() => setInteractionItem(label)}
              onMouseLeave={() => setInteractionItem(null)}
              onFocus={() => setInteractionItem(label)}
              onBlur={() => setInteractionItem(null)}
              onClick={() => setActiveItem(label)}
              aria-current={isCurrent ? 'location' : undefined}
            >
              <AnimatedIcon
                icon={Icon}
                size={24}
                strokeWidth={2}
                filled={isCurrent}
                emphasized={isCurrent}
                className={styles.icon}
              />
              <span className={styles.label}>{label}</span>
            </Link>
          );
        })}
        <ThemeSwitcher className={styles.mobileThemeSwitcher} />
      </nav>

      <p className={styles.footer}>Öner Berk — {currentYear}</p>
    </aside>
  );
};

export default Sidebar;
