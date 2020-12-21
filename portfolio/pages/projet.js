import styles from "../styles/projet.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link"
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const Projet = (props) => {
    return (
        <div className={styles.projetContainer}>
            <div className={styles.projetContent}>
            <h1> Projet </h1>
            </div>
            <div className={styles.iconCont}>
                <Link href="/"><FontAwesomeIcon className={styles.icon} icon={faHome}></FontAwesomeIcon></Link>
                <Link href="/lien"><FontAwesomeIcon className={styles.icon} icon={faAngleDoubleRight}></FontAwesomeIcon></Link>
            </div>
        </div>
    )
}
export default Projet