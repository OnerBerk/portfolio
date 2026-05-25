import { Stamp } from '@/components/stamp/stamp';

export default function Home() {
  return (
    <>
      <section id="hero" className="anchor-section">
        <h1>Hero — en construction</h1>
      </section>
      <section id="projects" className="anchor-section" />
      <section id="about" className="anchor-section" />
      <section id="contact" className="anchor-section" />
      <section id="stamp" className="anchor-section">
        <Stamp />
      </section>
    </>
  );
}
