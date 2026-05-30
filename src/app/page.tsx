import HeroSection from '@/components/sections/hero/hero-section';
import { Stamp } from '@/components/stamp/stamp';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="projects" className="anchor-section">
        <h2 className="sr-only">Projets</h2>
      </section>
      <section id="about" className="anchor-section">
        <h2 className="sr-only">À propos</h2>
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
