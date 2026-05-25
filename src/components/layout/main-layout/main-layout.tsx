import type { ReactNode } from 'react';

import ThemeSwitcher from '@/components/layout/theme-switcher/theme-switcher';
import Sidebar from '@/components/layout/sidebar/sidebar';

import styles from './main-layout.module.scss';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ThemeSwitcher />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
