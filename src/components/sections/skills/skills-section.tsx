import SectionNumber from '@/components/section-number/section-number';

import SkillsHeading from './skills-heading';
import SkillsTree from './skills-tree-view';
import styles from './skills-section.module.scss';

const SkillsSection = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <SectionNumber value="03" />
      <h2 className="sr-only">Compétences</h2>
      <SkillsHeading />
      <div className={styles.tree}>
        <SkillsTree />
      </div>
    </section>
  );
};

export default SkillsSection;
