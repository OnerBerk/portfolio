import React from "react"
import styles from "../styles/competence.module.scss";
import Progress from "../component/progress-bar"
import Background from "../component/animatedBackground"

import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const Competence = () => {
    return (
        <div className={styles.compContainer}>
                <h1> Compétences<span>.Tech( )</span></h1>
            <div className={styles.compContent}>
                <div className={styles.progressglobal}>
                    <h2> Front </h2>
                    <div className={styles.progressBlock}> <Progress done={90} color={"#F8A839"} title={"< Html > "}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={85}color={"#399BF8"} title={"#Css "}/></div><br/>

                    <h2> Back </h2>
                    <div className={styles.progressBlock}><Progress done={75} color={"#57D94D "} title={"🔶 NodeJs"}/></div><br/>

                    <h2> FrameWork </h2>
                    <div className={styles.progressBlock}><Progress done={85} color={"#90F7FB "} title={"○ ○ ○ ReactJs "}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={85} color={"snow"} title={"•NextJs "}/></div><br/>

                    <h2> Base de donnée </h2>
                    <div className={styles.progressBlock}><Progress done={70} color={"#10AC26"} title={"🌱 MongoDb"}/></div><br/>
                    <div className={styles.progressBlock}><Progress done={45} color={"#EA3B08"} title={"🐬 MySql"}/></div><br/>

                    <h2> Outils </h2>
                    <div className={styles.progressBlock}><Progress done={70} color={"#F5F27D "} title={" ⍼ Git"}/></div><br/>

                </div><br/>
            </div><br/>
                <Background/>
            <div className={styles.iconCont}>
                <Link href="/"><FontAwesomeIcon className={styles.icon} icon={faHome}/></Link>
                <Link href="/projet"><FontAwesomeIcon className={styles.icon} icon={faAngleDoubleRight}/></Link>
            </div>
        </div>
    )
}
export default Competence