import type { IconSvgElement } from '@hugeicons/react';

export type NavItem = {
  href: string;
  label: string;
  icon: IconSvgElement;
  external?: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  technologies: string[];
  detailsPics?: {
    web: string[];
    mobile: string[];
  };
  detailsText: string;
};
