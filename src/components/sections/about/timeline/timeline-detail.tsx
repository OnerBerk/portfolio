import { chillax } from '@/app/fonts';
import type { TimelineStep } from './timeline-steps';
import styles from './timeline-detail.module.scss';

type TimelineDetailProps = {
  step: TimelineStep;
};

const TimelineDetail = ({ step }: TimelineDetailProps) => {
  const titleId = `timeline-detail-title-${step.dateLabel ?? step.year}`;

  return (
    <article
      className={`${styles.detail} ${chillax.className}`}
      aria-labelledby={titleId}
    >
      {step.dateLabel ? (
        <span className={styles.date}>{step.dateLabel}</span>
      ) : (
        <time className={styles.date} dateTime={`${step.year}`}>
          {step.year}
        </time>
      )}
      <h3 id={titleId} className={styles.title}>
        {step.title}
      </h3>
    <p className={styles.description}>{step.description}</p>
    {step.images?.length ? (
      <div className={styles.gallery}>
        {step.images.map((src, index) => (
          <img
            key={src}
            className={styles.image}
            src={src}
            alt={`${step.title} — photo ${index + 1}`}
          />
        ))}
      </div>
    ) : null}
    </article>
  );
};

export default TimelineDetail;
