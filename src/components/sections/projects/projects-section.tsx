'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef, type CSSProperties } from 'react';

import SectionNumber from '@/components/section-number/section-number';
import { useResponsive } from '@/hooks/use-responsive';

import ProjectCard from './project-card';
import ProjectPanel from './project-panel';
import { PROJECTS, SLIDE_COUNT } from './projects-data';
import styles from './projects.module.scss';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { mounted, isMobile } = useResponsive();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const railEnd = `-${((SLIDE_COUNT - 1) / SLIDE_COUNT) * 100}%`;
  const horizontalScrollEnd = (SLIDE_COUNT - 1) / SLIDE_COUNT;
  const x = useTransform(scrollYProgress, [0, horizontalScrollEnd], ['0%', railEnd]);

  const useVerticalLayout = !mounted || prefersReducedMotion || isMobile;

  const intro = (
    <div className={styles.introSlide}>
      <h3>Projets</h3>
      <p className={styles.introSubtitle}>ce sur quoi j&apos;ai passé mes nuits</p>
    </div>
  );

  if (useVerticalLayout) {
    return (
      <section ref={sectionRef} id="projects" className={styles.projectsSection}>
        <SectionNumber value="02" />
        <h2 className="sr-only">Projets</h2>
        <div className={styles.verticalStack}>
          {intro}
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <ProjectPanel />
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`${styles.projectsSection} ${styles.projectsSectionHorizontal}`}
      style={
        {
          '--slide-count': SLIDE_COUNT,
          height: `${SLIDE_COUNT * 100}vh`,
        } as CSSProperties
      }
    >
      <h2 className="sr-only">Projets</h2>
      <div className={styles.stickyViewport}>
        <SectionNumber value="02" />
        <motion.div className={styles.rail} style={{ x }}>
          <div className={styles.slide}>{intro}</div>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.slide}>
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
      <ProjectPanel />
    </section>
  );
};

export default ProjectsSection;
