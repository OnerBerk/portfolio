import Timeline from './timeline/timeline';
import styles from './about.module.scss';

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className="sr-only">À propos</h2>
      <Timeline />
    </section>
  );
};

export default AboutSection;
