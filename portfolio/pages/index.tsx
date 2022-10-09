import styles from '../styles/Home.module.scss'
import {useTheme} from "next-themes";
import {useDispatch, useSelector} from "../store/store";
import {getThemeHeaderState, setOpenThemeHeader} from "../store/slices/header/themeHeader.slice";

function Home() {
    const dispatch = useDispatch()
    const {theme, setTheme} = useTheme()
    const {open} = useSelector(getThemeHeaderState)

    const onClick = () => {
        dispatch(setOpenThemeHeader())
    };

    return (
        <div className={styles.main}>
            <div>{open}</div>
            <button onClick={onClick}>setName</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
            <button onClick={() => setTheme('light')}>Light</button>
            <button onClick={() => setTheme('blue')}>Blue</button>
        </div>
    )
}

export default Home