import styles from './timeline-glow.module.scss';

export type TimelineGlowPlacement =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

type TimelineGlowProps = {
  placement: TimelineGlowPlacement;
};

const placementClass: Record<TimelineGlowPlacement, string> = {
  'top-left': styles.topLeft ?? '',
  'top-center': styles.topCenter ?? '',
  'top-right': styles.topRight ?? '',
  'bottom-left': styles.bottomLeft ?? '',
  'bottom-center': styles.bottomCenter ?? '',
  'bottom-right': styles.bottomRight ?? '',
};

const TimelineGlow = ({ placement }: TimelineGlowProps) => {
  return <span className={`${styles.glow} ${placementClass[placement]}`} aria-hidden="true" />;
};

export default TimelineGlow;
