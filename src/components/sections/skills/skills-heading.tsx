'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', bounce: 0.72, duration: 1.1, stiffness: 90, damping: 10 },
  },
};

const SkillsHeading = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.h3
      initial={reducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={titleVariants}
    >
      Skills
    </motion.h3>
  );
};

export default SkillsHeading;
