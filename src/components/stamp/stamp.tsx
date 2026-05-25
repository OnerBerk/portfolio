import { Star } from 'lucide-react';
import styles from './stamp.module.scss';

export function Stamp() {
  return (
    <div className={styles.stampMain}>
      <div className={styles.stampBody}>
        <div className={styles.stampRight}>
          <p className={styles.stampTitle}>FULL-STACK DEVELOPER</p>

          <div className={styles.stampDivider}>
            <span />
            <Star size={18} aria-hidden="true" />
            <span />
          </div>

          <div className={styles.stampName}>
            <div className={styles.lastname}>ÖNER</div>
            <div className={styles.firstname}>BERK</div>
          </div>
        </div>
      </div>
    </div>
  );
}
