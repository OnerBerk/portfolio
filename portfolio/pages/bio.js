import styles from "../styles/bio.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Bio =()=>{
    return(
        <div className={styles.bioContainer} >
            <div className={styles.bioContent}>
            <h1> Bonjour, Je suis <span> Berk Öner</span> .</h1>
            <h2>  ✿ Devellopeur Fullstack Junior ✿</h2><br/>
            <div>
                <div className={styles.a} >Bienvenue dans mon Portfolio</div> avec certain de
                <Link href="/projet"> Mes Projets.</Link><br/><br/>
                Après une Vingtaine d'années dans le commerce et le Management,
                <br/> j'ai decidé de me reconvertir dans le Devellopement Informatique .<br/>
                Formé à <a href="https://www.coding-academy.fr/code-go/" target="blank"> Epitech Paris. </a> 
                veille sur  <a href="https://www.udemy.com/"> Udemy, </a>
                            <a href="https://openclassrooms.com/fr/">OpenClassroom </a> <br/>
                et monté en compétences dans des Cabinets de conseils Informatique.<br/>
                Je suis Aujourd'hui disponible en Freelance ou en salarié .
            </div><br/>
            <div>
                <div className={styles.b}>A ce stade il faut parlé un peu de moi,</div>
                <br/> je suis passionné du Japon ,
                creatif à travers la Linogravure et le Devellopement.<br/>
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