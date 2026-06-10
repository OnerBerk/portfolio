import { create } from 'zustand';

import type { Project } from '@/types/types';

type ProjectPanelState = {
  project: Project | null;
  isOpen: boolean;
  open: (project: Project) => void;
  close: () => void;
};

export const useProjectPanelStore = create<ProjectPanelState>((set) => ({
  project: null,
  isOpen: false,
  open: (project) => {
    document.body.style.overflow = 'hidden';
    set({ project, isOpen: true });
  },
  close: () => {
    document.body.style.overflow = '';
    set({ isOpen: false });
  },
}));
