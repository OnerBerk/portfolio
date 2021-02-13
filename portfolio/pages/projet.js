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
                <div className={styles.iconCont}>
                    <Link href="/"><i><FontAwesomeIcon className={styles.icon} icon={faHome}/></i></Link>
                    <Link href="/lien"><i><FontAwesomeIcon className={styles.icon} icon={faAngleDoubleRight}/></i></Link>
                </div>

            <div className={styles.projetContent}>
                <h1> Projet </h1>

                <div className={styles.mainProjetContainer}>
                    <div className={styles.cardsContainer}>

                        <div className={styles.card}
                             style={{
                                 backgroundImage: "url(/tree.webp)",
                                 backgroundRepeat: 'no-repeat',
                             }}
                        >
                            <div className={styles.content}>
                                <h2 className={styles.title}>Module OnDemand</h2>
                                <p className={styles.copy}>
                                    Composant dynamique Reactjs Pour light & Shadows,
                                    qui charge un modele 3d generé par playcanvas.
                                </p>
                                <Link href="https://configtictac.vercel.app/" passHref={true}>
                                    <a target="_blank">
                                        <button className={styles.btn}> Apercu</button>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}
                             style={{
                                 backgroundImage: "url(/blue.webp)",
                                 backgroundRepeat: 'no-repeat',
                             }}>
                            <div className={styles.content}>
                                <h2 className={styles.title}>Auto Ecole Saint-Lazare</h2>
                                <p className={styles.copy}>
                                    Site Vitrine pour une Auto-Ecole
                                    en NEXTJS en cours de construction </p>
                                <Link href="https://auto-ecole-saint-lazare-nqcrt35us.vercel.app/" passHref={true}>
                                    <a target="_blank">
                                        <button className={styles.btn}> Apercu</button>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}
                             style={{
                                 backgroundImage: "url(/green.webp)",
                                 backgroundRepeat: 'no-repeat',
                             }}>
                            <div className={styles.content}>
                                <h2 className={styles.title}> Joza IT </h2>
                                <p className={styles.copy}>
                                    Refactoring du site vers du Reactjs
                                </p>
                                <Link href="https://www.joza-it.fr/" passHref={true}>
                                    <a target="_blank">
                                        <button className={styles.btn}> Apercu</button>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.card}
                             style={{
                                 backgroundImage: "url(/soon.webp)",
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundColor:"black"
                             }}>
                            <div className={styles.content}>
                                <h2 className={styles.title}>Ca arrive </h2>
                                <p className={styles.copy}></p>
                                <Link href="https://www.joza-it.fr/" passHref={true}>
                                    <a target="_blank">
                                        <button className={styles.btn}> Apercu</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Projet