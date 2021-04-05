import React from "react";
import Game2048 from "../component/game/2048/2048"

import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

import { motion } from 'framer-motion';
import pageVariants from "../component/motionVariant/variant";

import styles from "../styles/game.module.scss";

const Game =()=>{
    return(
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
        >
        <div className={styles.gameContainer}>
            <Head>
                <title>Oner Berk Portfolio Game </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.iconCont}>
                <Link href="/"><i><FontAwesomeIcon className={styles.icon} icon={faHome}/></i></Link>
            </div>
            <div className={styles.gameContent}>
                <h1> Game </h1>
                <Game2048/>
            </div>
        </div>
        </motion.div>
    )
}
export default Game