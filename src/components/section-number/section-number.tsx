import styles from './section-number.module.scss';

type SectionNumberProps = {
  value: string;
};

const SectionNumber = ({ value }: SectionNumberProps) => {
  return (
    <span className={styles.number} aria-hidden="true">
      {value}
    </span>
  );
};

export default SectionNumber;
