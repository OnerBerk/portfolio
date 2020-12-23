import React,{useState} from "react"
import styles from "../styles/progress.module.scss"

const Progress =({done})=>{
    const [style, setStyle]=useState({})
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 800);
    return(
        <div className={styles.progress}>
            <div className={styles.progressDone} style={style}>
                {done}%
            </div>

        </div>
    )
}

export default Progress