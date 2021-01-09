import styles from "../styles/card.module.scss"
import React from "react"

const Card = (props) => {
    return (
        <div className={styles.mainCardContainer}>
            <h2 className={styles.title}>
                 Tic tac
            </h2>
            <div className={styles.content}>
                 content
            </div>
        </div>
    )
}

export default Card
