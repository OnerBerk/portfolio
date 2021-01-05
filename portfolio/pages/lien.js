import styles from "../styles/lien.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link"
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Image from 'next/image'

const Lien = (props) => {
    return (
        <div className={styles.lienContainer}>
            <Head>
                <title>Oner Berk Portfolio Lien </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.lienContent}>
                <h1> Liens </h1>
                <div className={styles.mainLienContainer}>
                    <Link href="https://github.com/OnerBerk" >
                    <img
                        alt="github logo"
                        className={styles.github}
                        src="/github.png"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/onerberk/" >
                        <img
                            alt="github logo"
                            className={styles.github}
                            target="_blank"
                            src="/linkedin.png"/>
                    </Link>
                </div>

            </div>
            <div className={styles.iconCont}>
                <Link href="/"><FontAwesomeIcon className={styles.icon} icon={faHome}></FontAwesomeIcon></Link>
                <Link href="/game"><FontAwesomeIcon className={styles.icon} icon={faAngleDoubleRight}></FontAwesomeIcon></Link>
            </div>
        </div>
    )
}
export default Lien