'use client';

import { useProjectPanelStore } from '@/stores/project-panel-store';

import type { Project } from '@/types/types';
import styles from './project-card.module.scss';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const open = useProjectPanelStore((state) => state.open);

  return (
    <article className={styles.card}>
      <button type="button" className={styles.body} onClick={() => open(project)}>
        <div className={styles.logo}>
          <img src={project.image} alt={project.alt} />
        </div>
        <div className={styles.content}>
          <h4 className={styles.title}>{project.title}</h4>
          <p className={styles.description}>{project.description}</p>
        </div>
      </button>
    </article>
  );
};

export default ProjectCard;
