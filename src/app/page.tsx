import { Stamp } from '@/components/stamp/stamp';

import ProjectsSection from '@/components/sections/projects/projects-section';
import AboutSection from '@/components/sections/about/about-section';
import HeroSection from '@/components/sections/hero/hero-section';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <section id="skills" className="anchor-section">
        <h2 className="sr-only">Skills</h2>
      </section>
      <section id="contact" className="anchor-section">
        <h2 className="sr-only">Contact</h2>
      </section>
      <section id="stamp" className={`anchor-section ${styles.stampSection}`}>
        <h2 className="sr-only">Stamp</h2>
        <Stamp />
      </section>
    </div>
  );
}
