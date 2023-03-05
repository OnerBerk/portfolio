import styles from "./squeeze-button.module.scss";

type SqueezeButtonProps = {
  onClick: () => void
}
const SqueezeButton = ({onClick}: SqueezeButtonProps) => {
  return (
    <button onClick={onClick} className={styles.squeezeButton}>Annuler</button>
  );
};
export default SqueezeButton;