import React, {useEffect, useState} from "react"
import Link from "next/link"
import Badge from 'react-simple-badges'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

import {motion} from 'framer-motion';
import pageVariants from "../component/motionVariant/variant";
import styles from "../styles/competence.module.scss";

const Competence = () => {

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
        >
            <div className={styles.compContainer}>
                <Head>
                    <title>Oner Berk-Compétences </title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>

                <div className={styles.iconCont}>
                    <Link href="/"><i><FontAwesomeIcon className={styles.icon} icon={faHome}/></i></Link>
                    <Link href="/projet">
                        <i><FontAwesomeIcon className={styles.icon} icon={faAngleDoubleRight}/></i>
                    </Link>
                </div>

                <h1> Compétences<span>.Tech{ ` {...} `}</span></h1>

                <div className={styles.compContent}>
                    <div className={styles.badge}><Badge name="JavaScript" className={styles.badge1} /></div>
                    <div className={styles.badge}><Badge name="TypeScript" className={styles.badge2} /></div>
                    <div className={styles.badge}><Badge name="Node.js" className={styles.badge3} /></div>
                    <div className={styles.badge}><Badge name="Deno" className={styles.badge4} /></div>
                    <div className={styles.badge}><Badge name="NestJS" className={styles.badge5}/></div>
                    <div className={styles.badge}><Badge name="React" className={styles.badge6}/></div>
                    <div className={styles.badge}><Badge name="Next.js" className={styles.badge7} /></div>
                    <div className={styles.badge}><Badge name="Gatsby" className={styles.badge8} /></div>
                    <div className={styles.badge}><Badge name="HTML5" className={styles.badge9} /></div>
                    <div className={styles.badge}><Badge name="Sass" className={styles.badge10} /></div>
                    <div className={styles.badge}><Badge name="CSS3" className={styles.badge11} /></div>
                    <div className={styles.badge}><Badge name="styled-components" className={styles.badge12} /></div>
                    <div className={styles.badge}><Badge name="Express" className={styles.badge13} /></div>
                    <div className={styles.badge}><Badge name="GraphQL" className={styles.badge14} /></div>
                    <div className={styles.badge}><Badge name="Apollo GraphQL" className={styles.badge15} /></div>
                    <div className={styles.badge}><Badge name="Docker" className={styles.badge17} /></div>
                    <div className={styles.badge}><Badge name="MongoDB" className={styles.badge16} /></div>
                    <div className={styles.badge}><Badge name="PostgreSQL" className={styles.badge17} /></div>
                    <div className={styles.badge}><Badge name="Bootstrap" className={styles.badge18} /></div>
                    <div className={styles.badge}><Badge name="Git" className={styles.badge19} /></div>
                    <div className={styles.badge}><Badge name="GitHub" className={styles.badge20} /></div>
                    <div className={styles.badge}><Badge name="GitHub Actions" className={styles.badge21} /></div>
                    <div className={styles.badge}><Badge name="Bitbucket" className={styles.badge22} /></div>
                    <div className={styles.badge}><Badge name="Jira" className={styles.badge20} /></div>
                    <div className={styles.badge}><Badge name="Confluence" className={styles.badge21} /></div>
                </div>

                <br/>
            </div>
        </motion.div>
    )
}
export default Competence