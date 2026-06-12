import styles from './ui-button.module.scss';

const UiButton = () => {
  return (
    <button type="submit" className={styles.button}>
      Envoyer
    </button>
  );
};

export default UiButton;
