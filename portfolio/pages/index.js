import React from "react"
import styles from '../styles/Home.module.scss'
import Link from "next/link"

export default function Home() {
  return (
  <div className={styles.container}>

    <div className={styles.main}>
      <div className={styles.image}></div>
        <div className={styles.maincont}>
          <h2>Oner Berk <br/></h2>
          <h3> Devellopeur Web </h3>
          <h3>✻ On.Air ✻</h3>
        </div>
    </div>


    <div className={styles.main2}>

      <div className={styles.image2}></div>
        <Link href="/projet" >
          <div className={styles.maincont}>
          <h2>Projet</h2>
          </div>
        </Link>

    </div>

    <div className={styles.main3}>
      <div className={styles.image3}></div>
      <div className={styles.maincont3}>
        <h2>Contact</h2>
      </div>
    </div>

    <div className={styles.main4}>
      <div className={styles.image4}></div>
    </div>

    <div className={styles.main5}>
      <div className={styles.image5}></div>
      <div className={styles.maincont5}>
        <h2>Liens</h2>
      </div>
    </div>

  </div>
  )
}
