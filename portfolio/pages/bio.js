import styles from "../styles/bio.module.scss"
import Link from "next/link"

const Bio =()=>{
    return(
        <div className={styles.bioContainer} >
            <div className={styles.bioContent}>
            <h1> Bonjour, Je suis <span> Berk Öner</span> .</h1>
            <h2>  ✿ Devellopeur Fullstack Junior ✿</h2><br/>
            <p>
                Bienvenue dans mon Portfolio avec certain de <Link href="/projet"> Mes Projets.</Link><br/><br/>
                Après une Vingtaine d'années dans le commerce et le Management,
                <br/> j'ai decidé de me reconvertir dans le Devellopement Informatique .<br/>
                Formé à <a href="https://www.coding-academy.fr/code-go/" target="blank"> Epitech Paris. </a> 
                veille sur  <a href="https://www.udemy.com/"> Udemy, </a>
                            <a href="https://openclassrooms.com/fr/">OpenClassroom </a> <br/>
                et monté én compétences dans des Cabinets de conseils Informatique.<br/>
                Je suis Aujourd'hui disponible en Freelance ou en salarié .
            </p>
            <p>
                Pour Parlé un peu de moi , je sui passionné du Japon , 
                creatif à travers la Linogravure et le Devellopement.<br/>
                D'un Naturel Curieux, J'aime les challenges et l'apprentissage.
            </p>
            </div>
            
        </div>
    )
}
export default Bio