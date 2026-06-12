import SectionNumber from '@/components/section-number/section-number';
import styles from './stamp-section.module.scss';
import { Stamp } from '@/components/stamp/stamp';

const StampSection = () => {
  return (
    <section id="stamp" className={`anchor-section ${styles.stampSection}`}>
      <SectionNumber value="05" />
      <h2 className="sr-only">Stamp</h2>
      <Stamp />
    </section>
  );
};

export default StampSection;
