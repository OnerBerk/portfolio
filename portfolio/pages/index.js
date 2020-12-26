import styles from '../styles/Home.module.scss'
import Link from "next/link"
import Head from 'next/head'

export default function Home() {
  return (
  <div className={styles.container}>
    <Head>
      <title>Oner Berk Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className={styles.main}>
      <div className={styles.image}/>
      <Link href="/bio" >
        <div className={styles.maincont}>
          <h2>Oner Berk <br/></h2>
          <h3> Devellopeur Web </h3>
          <h3>✻ On.Air ✻</h3>
        </div>
        </Link>
    </div>


    <div className={styles.main2}>

      <div className={styles.image2}/>
        <Link href="/projet" >
          <div className={styles.maincont}>
          <h2>Projet</h2>
          </div>
        </Link>

    </div>

    <div className={styles.main3}>
      <div className={styles.image3}/>
      <Link href="/lien">
      <div className={styles.maincont3}>
        <h2>Liens</h2>
      </div>
      </Link>
    </div>

    <div className={styles.main4}>
      <div className={styles.image4}/>
      <Link href="/game" >
        <div className={styles.maincont4}>
        X
        </div>
      </Link>
    </div>

    <div className={styles.main5}>
      <div className={styles.image5}/>
      <Link href="/competence">
      <div className={styles.maincont5}>
        <h2>Competences</h2>
      </div>
      </Link>
    </div>

  </div>
  )
}
