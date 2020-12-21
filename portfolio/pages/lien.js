import styles from "../styles/lien.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link"
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const Lien = (props) => {
    return (
        <div className={styles.lienContainer}>
            <div className={styles.lienContent}>
                <h1> Liens </h1>

            </div>
            <div className={styles.iconCont}>
                <Link href="/"><FontAwesomeIcon className={styles.icon} icon={faHome}></FontAwesomeIcon></Link>
            </div>
        </div>
    )
}
export default Lien