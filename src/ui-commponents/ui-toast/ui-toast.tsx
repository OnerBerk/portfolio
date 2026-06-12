'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { useToastStore } from '@/stores/toast-store';

import styles from './ui-toast.module.scss';

const UiToast = () => {
  const reducedMotion = useReducedMotion();
  const message = useToastStore((state) => state.message);
  const type = useToastStore((state) => state.type);
  const visible = Boolean(message && type);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key={`${type}-${message}`}
          className={`${styles.toast} ${styles[type!]}`}
          role="status"
          initial={reducedMotion ? false : { opacity: 0, x: 32, y: -8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, x: 32 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default UiToast;
