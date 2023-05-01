import styles from "../styles/stamp.module.scss";
import Layout from "../component/layout/layout";
import {useSelector} from "../store/store";
import {getTheme} from "../store/slices/theme/theme.slice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const {bgColor, primaryColor, secondaryColor} = useSelector(getTheme);

  return (
    <Layout title="Öner home">
      <div className={styles.stampMain}>
        <div style={{
          border: "8px",
          borderStyle: "solid",
          borderColor: primaryColor
        }} className={styles.stampBody}>
          <div className={styles.stampRight}>
            <div className={styles.stampTitle}>Dévloppeur fullstack</div>
            <div  className={styles.stampRightDividor}>
              <span style={{
                borderBottom: 8,
                borderBottomStyle: "solid",
                borderBottomColor: primaryColor
              }} />
              <div>
                <FontAwesomeIcon className={styles.socialIcon}
                                 style={{color: primaryColor}}
                                 icon={faStar} />
              </div>
              <span style={{
                borderBottom: 8,
                borderBottomStyle: "solid",
                borderBottomColor: primaryColor
              }} />
            </div>
            <div className={styles.stampName}>
              <div className={styles.lastname}>ÖNER</div>
              <div className={styles.firstname}>BERK</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;