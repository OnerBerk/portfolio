import SectionNumber from '@/components/section-number/section-number';
import { Stamp } from '@/components/stamp/stamp';

import ProjectsSection from '@/components/sections/projects/projects-section';
import SkillsSection from '@/components/sections/skills/skills-section';
import AboutSection from '@/components/sections/about/about-section';
import HeroSection from '@/components/sections/hero/hero-section';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <section id="contact" className="anchor-section">
        <SectionNumber value="04" />
        <h2 className="sr-only">Contact</h2>
      </section>
      <section id="stamp" className={`anchor-section ${styles.stampSection}`}>
        <SectionNumber value="05" />
        <h2 className="sr-only">Stamp</h2>
        <Stamp />
      </section>
    </div>
  );
}
