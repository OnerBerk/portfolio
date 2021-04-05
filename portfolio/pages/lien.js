import React from "react";
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faHome, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"

import { motion } from 'framer-motion';
import pageVariants from "../component/motionVariant/variant";

import styles from "../styles/lien.module.scss";

const Lien = () => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
        >
        <div className={styles.lienContainer}>
            <Head>
                <title>Oner Berk Portfolio Lien </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div className={styles.iconCont}>
                <Link href="/"><i><FontAwesomeIcon className={styles.icon} icon={faHome}/></i></Link>
                <Link href="/game"><i><FontAwesomeIcon className={styles.icon} icon={faAngleDoubleRight}/></i></Link>
            </div>
            <div className={styles.lienContent}>
                <h1> Liens </h1>
                <div className={styles.mainLienContainer}>
                    <Link href="https://github.com/OnerBerk">
                        <a target="_blank">
                            <img
                                alt="github logo"
                                className={styles.github}
                                src="/github.png"/>
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/onerberk">
                        <a target="_blank">
                            <img
                                alt="github logo"
                                className={styles.github}
                                src="/linkedin.png"/>
                        </a>
                    </Link>
                   <span className={styles.github}><a href="../public/cvDevFr.pdf" download="cvDevFr.pdf"> Curiculum<br/> </a></span>
                    <a href="mailto:oner_berk@hotmail.com"><i><FontAwesomeIcon className={styles.mail} icon={faEnvelope}/></i></a>
                </div>
            </div>
        </div>
        </motion.div>
    )
}
export default Lien