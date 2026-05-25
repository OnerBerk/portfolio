import { NavItem } from '@/types/types';
import { BriefcaseBusiness, FolderOpen, GitBranch, Home, Mail, Stamp, User } from 'lucide-react';

export const navItems: NavItem[] = [
  { href: '/#hero', label: 'Home', icon: Home },
  { href: '/#projects', label: 'Projets', icon: FolderOpen },
  { href: '/#about', label: 'À propos', icon: User },
  { href: '/#contact', label: 'Contact', icon: Mail },
  { href: '/#stamp', label: 'Stamp', icon: Stamp },
  { href: 'https://github.com/', label: 'GitHub', icon: GitBranch, external: true },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', icon: BriefcaseBusiness, external: true },
];
