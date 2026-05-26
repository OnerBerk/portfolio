import { Stamp } from '@/components/stamp/stamp';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <section id="hero" className="anchor-section">
        <h1 className={styles.heroTitle}>Hero — en cours de construction</h1>
      </section>
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
    </>
  );
}
