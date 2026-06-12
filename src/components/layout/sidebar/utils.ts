import { NavItem } from '@/types/types';
import {
  FolderOpenIcon,
  GithubIcon,
  Home01Icon,
  Linkedin01Icon,
  Mail01Icon,
  Tools,
  StampIcon,
  TimelineIcon,
} from '@hugeicons/core-free-icons';

export const navItems: NavItem[] = [
  { href: '/#hero', label: 'Home', icon: Home01Icon },
  { href: '/#about', label: 'À propos', icon: TimelineIcon },
  { href: '/#projects', label: 'Projets', icon: FolderOpenIcon },
  { href: '/#skills', label: 'Skills', icon: Tools },
  { href: '/#contact', label: 'Contact', icon: Mail01Icon },
  { href: '/#stamp', label: 'Stamp', icon: StampIcon },
  { href: 'https://github.com/', label: 'GitHub', icon: GithubIcon, external: true },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', icon: Linkedin01Icon, external: true },
];
