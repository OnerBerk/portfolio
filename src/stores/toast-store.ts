import { create } from 'zustand';

type ToastType = 'success' | 'error';

type ToastState = {
  message: string | null;
  type: ToastType | null;
  show: (message: string, type: ToastType) => void;
};

let hideTimeout: ReturnType<typeof setTimeout> | undefined;

export const useToastStore = create<ToastState>((set) => ({
  message: null,
  type: null,
  show: (message, type) => {
    if (hideTimeout) clearTimeout(hideTimeout);
    set({ message, type });
    hideTimeout = setTimeout(() => set({ message: null, type: null }), 6500);
  },
}));
