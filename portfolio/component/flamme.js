import React from "react";
import styles from "../styles/flamme.module.scss"

const Flamme = ()=>{
    return(
        <div className={styles.flamewrapper}>
            <div className={styles.flamered}/>
            <div className={styles.flameorange}/>
            <div className={styles.flamegold}/>
            <div className={styles.flamewhite}/>
            <div className={styles.baseblue}/>
            <div className={styles.baseblack}/>
        </div>
    )
}

export default Flamme