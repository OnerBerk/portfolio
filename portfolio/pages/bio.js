import styles from "../styles/bio.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

const Bio =()=>{
    return(
        <div className={styles.bioContainer} >
            <Head>
                <title>Oner Berk Portfolio Bio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.bioContent}>
            <h1> Bonjour, Je suis <span> Berk Öner</span> .</h1>
            <h2>  ✿ Développeur  Fullstack Junior ✿</h2><br/>
            <div>
                <div className={styles.a} >Bienvenue dans mon Portfolio</div> avec certains de
                <Link href="/projet"> Mes Projets.</Link><br/><br/>
                Après une Vingtaine d'années dans le commerce et le Management,
                <br/> j'ai décidé de me reconvertir dans le Développement  Informatique .<br/>
                Formé à <a href="https://www.coding-academy.fr/code-go/" target="blank"> Epitech Paris. </a> 
                veille sur  <a href="https://www.udemy.com/"> Udemy, </a>
                            <a href="https://openclassrooms.com/fr/">OpenClassroom </a> <br/>
                et monté en compétences dans des Cabinets de conseils Informatique.<br/>
                Je suis Aujourd'hui disponible en Freelance ou en salarié .
            </div><br/>
            <div>
                <div className={styles.b}>A ce stade il faut parler un peu de moi,</div>
                <br/> je suis passionné du Japon ,
                créatif à travers la Linogravure et le Développement.<br/>
                D'un Naturel Curieux, J'aime les challenges et l'apprentissage.
            </div><br/><br/>
            <div className={styles.iconCont}>
                <Link href="/" ><FontAwesomeIcon className={styles.icon} icon={faHome}></FontAwesomeIcon></Link>
                <Link href="/competence"><FontAwesomeIcon className={styles.icon} icon={faAngleDoubleRight}></FontAwesomeIcon></Link>
            </div>
            </div>
        </div>
    )
}
export default Bio