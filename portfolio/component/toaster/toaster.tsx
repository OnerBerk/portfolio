import styles from "./toaster.module.scss";

type ToasterProps={
  success:boolean
}
const Toaster = ({success}:ToasterProps) => {
  return (
    <div className={styles.toasterMain}>
      {success
      ? "Votre email à été transmis avec succès"
      : "Une erreur "
      }
    </div>
  );
};
export default Toaster;