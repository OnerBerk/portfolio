import styles from "./toaster.module.scss";

type ToasterProps = {
    success: boolean
}
const Toaster = ({success}: ToasterProps) => {

    const returnStatus = () => {
        return (
            <>
                <div className={styles.title}>{success ? "Well done !" : "Oops !"}</div>
                <div>{success ? "Votre email à été transmis avec succès" : "Une erreur c'est produite"}</div>
            </>
        )
    }
    return (
        <div className={styles.toasterMain}>{returnStatus()}</div>
    );
};
export default Toaster;