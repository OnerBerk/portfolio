import styles from "../styles/competence.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link"
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const Competence = (props) => {
    return (
        <div className={styles.compContainer}>
            <div className={styles.compContent}>
                <h1> Compétences </h1>

            </div>
            <div className={styles.iconCont}>
                <Link href="/"><FontAwesomeIcon className={styles.icon} icon={faHome}></FontAwesomeIcon></Link>
                <Link href="/projet"><FontAwesomeIcon className={styles.icon} icon={faAngleDoubleRight}></FontAwesomeIcon></Link>
            </div>
        </div>
    )
}
export default Competence