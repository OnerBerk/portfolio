import Game2048 from "../component/game/2048/2048"

import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/game.module.scss";

const Game =()=>{
    return(
        <div className={styles.gameContainer}>
            <div className={styles.gameContent}>
                <h1> Game </h1>
                <Game2048/>
            <div className={styles.iconCont}>
                <Link href="/"><FontAwesomeIcon className={styles.icon} icon={faHome}/></Link>
            </div>
            </div>
        </div>
    )
}
export default Game