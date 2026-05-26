import type { IconSvgElement } from '@hugeicons/react';

export type NavItem = {
  href: string;
  label: string;
  icon: IconSvgElement;
  external?: boolean;
};
