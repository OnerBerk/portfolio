import React from "react"
import Head from "next/head";
import Link from "next/link"

import styles from "../styles/projet.module.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const Projet = () => {
    return (
        <div className={styles.projetContainer}>
            <Head>
                <title>Oner Berk Portfolio Projet</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div className={styles.projetContent}>
                <h1> Projet </h1>
                <div className={styles.mainProjetContainer}>
                    <iframe
                        className={styles.tictac}
                        src="https://configtictac-5uzms56qj.vercel.app/"
                        frameBorder="0"
                    />

                </div>

            </div>
            <div className={styles.iconCont}>
                <Link href="/"><a> <FontAwesomeIcon className={styles.icon} icon={faHome}/></a></Link>
                <Link href="/lien"><a><FontAwesomeIcon className={styles.icon} icon={faAngleDoubleRight}/></a></Link>
            </div>
        </div>
    )
}
export default Projet