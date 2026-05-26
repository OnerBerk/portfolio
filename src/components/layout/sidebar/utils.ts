import { NavItem } from '@/types/types';
import {
  FolderOpenIcon,
  GithubIcon,
  Home01Icon,
  Linkedin01Icon,
  Mail01Icon,
  StampIcon,
  UserIcon,
} from '@hugeicons/core-free-icons';

export const navItems: NavItem[] = [
  { href: '/#hero', label: 'Home', icon: Home01Icon },
  { href: '/#projects', label: 'Projets', icon: FolderOpenIcon },
  { href: '/#about', label: 'À propos', icon: UserIcon },
  { href: '/#contact', label: 'Contact', icon: Mail01Icon },
  { href: '/#stamp', label: 'Stamp', icon: StampIcon },
  { href: 'https://github.com/', label: 'GitHub', icon: GithubIcon, external: true },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', icon: Linkedin01Icon, external: true },
];
