import React from "react"
import styles from "../styles/competence.module.scss";
import Progress from "../component/progress-bar"

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
                    <div className={styles.progressBlock}><span>{"< Html > "}</span>  <Progress done={70}/></div><br/>
                    <div className={styles.progressBlock}><span> #Css</span> <Progress done={80}/></div><br/><br/>
                    <h2> Back </h2>
                    <div className={styles.progressBlock}><span>Node Js </span> <Progress done={85}/></div><br/><br/>
                    <h2> FrameWork </h2>
                    <div className={styles.progressBlock}> <span>{"{ ...React Js } "}</span> <Progress done={85}/></div><br/><br/>
                    <h2> Base de donnée </h2>
                    <div className={styles.progressBlock}> <span>MongoDb</span> <Progress done={70}/></div><br/>
                    <div className={styles.progressBlock}><span> MySql </span><Progress done={50}/></div><br/><br/>
                    <h2> Outil </h2>
                    <div className={styles.progressBlock}><span> Git </span><Progress done={70}/></div>
                </div><br/><br/>
            </div><br/><br/><br/>
            <div className={styles.iconCont}>
                <Link href="/"><FontAwesomeIcon className={styles.icon} icon={faHome}/></Link>
                <Link href="/projet"><FontAwesomeIcon className={styles.icon} icon={faAngleDoubleRight}/></Link>
            </div>
        </div>
    )
}
export default Competence