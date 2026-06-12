import SectionNumber from '@/components/section-number/section-number';

import Timeline from './timeline/timeline';
import styles from './about.module.scss';

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <SectionNumber value="01" />
      <h2 className="sr-only">À propos</h2>
      <h3>{"D'une vie à l'autre"}</h3>
      <div className={styles.timeline}>
        <Timeline />
      </div>
    </section>
  );
};

export default AboutSection;
