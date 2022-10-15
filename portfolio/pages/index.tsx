import styles from '../styles/Home.module.scss'
import {useTheme} from "next-themes";
import {useDispatch, useSelector} from "../store/store";
import Layout from "../component/layout/layout";

function Home() {
    const dispatch = useDispatch()
    const {theme, setTheme} = useTheme()

    return (
        <Layout title="Öner home">
            <div className={styles.main}>
                <div className={styles.bo}>
                    <div className={styles.name}>{`ÖNER Berk`}</div>
                    <div className={styles.buis}>Développeur web</div>
                </div>

                {/*<button onClick={() => setTheme('dark')}>Dark Mode</button>
                    <button onClick={() => setTheme('light')}>Light</button>
                    <button onClick={() => setTheme('blue')}>Blue</button>*/}
            </div>
        </Layout>
    )
}

export default Home