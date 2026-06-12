import type { ReactNode } from 'react';

import ThemeSwitcher from '@/components/layout/theme-switcher/theme-switcher';
import Sidebar from '@/components/layout/sidebar/sidebar';
import UiToast from '@/ui-commponents/ui-toast/ui-toast';

import styles from './main-layout.module.scss';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ThemeSwitcher className={styles.desktopThemeSwitcher} />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        {children}
      </main>
      <UiToast />
    </div>
  );
};

export default MainLayout;
