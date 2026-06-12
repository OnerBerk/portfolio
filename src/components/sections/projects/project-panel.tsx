/* eslint-disable @next/next/no-img-element -- badges shields.io à largeur variable + previews */
'use client';

import { motion, useReducedMotion } from 'motion/react';

import { useProjectPanelStore } from '@/stores/project-panel-store';

import styles from './project-panel.module.scss';
import { techBadgeUrl } from './tech-badges';

const ProjectPanel = () => {
  const project = useProjectPanelStore((state) => state.project);
  const isOpen = useProjectPanelStore((state) => state.isOpen);
  const close = useProjectPanelStore((state) => state.close);
  const prefersReducedMotion = useReducedMotion();

  if (!project) return null;

  return (
    <motion.div
      className={styles.panel}
      initial={{ y: '-100vh' }}
      animate={{ y: isOpen ? 0 : '-100vh' }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      onClick={close}
    >
      <div className={styles.details}>
        <div className={styles.detailsContent}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.href}>
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              {project.href}
            </a>
          </p>
          <div className={styles.stack}>
            {project.technologies.map((tech) => (
              <img src={techBadgeUrl(tech)} alt={tech} key={tech} />
            ))}
          </div>
          <p className={styles.description}>{project.detailsText}</p>
        </div>
        <div className={styles.detailsPics}>
          <div className={styles.mobile}>
            {project.detailsPics?.mobile?.map((pic: string) => (
              <img src={pic} alt={project.title} key={pic} />
            ))}
          </div>
          <div className={styles.web}>
            {project.detailsPics?.web?.map((pic: string) => (
              <img src={pic} alt={project.title} key={pic} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPanel;
