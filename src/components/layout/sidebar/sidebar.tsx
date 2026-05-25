import Link from 'next/link';
import styles from './sidebar.module.scss';

import { navItems } from './utils';

const Sidebar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <aside className={styles.sidebar} aria-label="Navigation principale">
      <nav className={styles.nav}>
        {navItems.map(({ href, label, icon: Icon, external }) =>
          external ? (
            <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.item}>
              <Icon size={20} aria-hidden="true" className={styles.icon} />
              <span className={styles.label}>{label}</span>
            </a>
          ) : (
            <Link key={label} href={href} className={styles.item}>
              <Icon size={20} aria-hidden="true" className={styles.icon} />
              <span className={styles.label}>{label}</span>
            </Link>
          ),
        )}
      </nav>

      <p className={styles.footer}>Öner Berk — {currentYear}</p>
    </aside>
  );
};

export default Sidebar;
