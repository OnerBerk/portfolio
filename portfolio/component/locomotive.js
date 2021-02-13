import React from "react";
import styles from "../styles/locomotive.module.scss"

const Locomotive = () => {
    return (
        <section className={styles.stage}>
            <div className={styles.train}>
                <div className={styles.wagon}/>
                <div className={styles.wagon}/>
                <div className={styles.wagon}/>
                <div className={styles.locomotive}>
                    <div className={styles.cabin}/>
                    <div className={styles.motor}/>
                    <div className={styles.chimney}>
                        <div className={styles.smoke}/>
                    </div>
                    <div className={styles.light}/>
                </div>
            </div>
        </section>
    )
}

export default Locomotive