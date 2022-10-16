import styles from "../styles/Home.module.scss";
import Layout from "../component/layout/layout";
import {useSelector} from "../store/store";
import {getTheme} from "../store/slices/theme/theme.slice";

function Home() {
  const {bgColor, primaryColor, secondaryColor} = useSelector(getTheme);

  return (
    <Layout title="Öner home">
      <div className={styles.main}>
        <div className={styles.bo}>
          <div style={{color: primaryColor}} className={styles.name}>{`ÖNER Berk`}</div>
          <div style={{color: bgColor, backgroundColor: secondaryColor}} className={styles.buis}>Développeur web
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;