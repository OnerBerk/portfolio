import React from "react"
import styles from "../styles/competence.module.scss";
import Progress from "../component/progress-bar"
import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

const Competence = () => {
    return (
        <div className={styles.compContainer}>
            <Head>
                <title>Oner Berk Portfolio Compétences </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.iconCont}>
                <Link href="/"><i><FontAwesomeIcon className={styles.icon} icon={faHome}/></i></Link>
                <Link href="/projet"><i><FontAwesomeIcon className={styles.icon} icon={faAngleDoubleRight}/></i></Link>
            </div>
                <h1> Compétences<span>.Tech()</span></h1>

            <div className={styles.compContent}>
                <div className={styles.progressglobal}>
                    <div className={styles.progressBlock}><Progress done={90} color={"#f8a839"} title={"< Html > Almost "}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={85}color={"#399BF8"} title={"#Css - .Scss "}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={75} color={"#57D94D "} title={"NodeJs"}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={60} color={"#efcb98"} title={"Python"}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={45} color={"#b864ec"} title={"PHP"}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={85} color={"#90F7FB "} title={"○ ○ ○ ReactJs "}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={85} color={"snow"} title={"•NextJs "}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={75} color={"#10AC26"} title={"MongoDb"}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={45} color={"#EA3B08"} title={"MySql"}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={70} color={"#F5F27D "} title={"Git"}/></div><br/>
                </div><br/>
            </div><br/>
        </div>
    )
}
export default Competence