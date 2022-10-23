import styles from "../styles/contact.module.scss";
import Layout from "../component/layout/layout";
import {useSelector} from "../store/store";
import {getTheme} from "../store/slices/theme/theme.slice";
import {faGripLines} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Stamp = () => {
  const {bgColor, primaryColor, secondaryColor} = useSelector(getTheme);
  return (
    <Layout title="contact">
      <div className={styles.contactMain}>
        <div style={{
          border: "16px",
          borderStyle: "solid",
          borderColor: primaryColor
        }} className={styles.contactBody}>
          <div className={styles.contactLeft}
               style={{
                 borderRight: 10,
                 borderRightStyle: "solid",
                 borderRightColor: primaryColor
               }}>
            <div className={styles.contactleftTop}>
              Identity
            </div>
            <div className={styles.contactLeftBot}>#23</div>
          </div>
          <div className={styles.contactRight}>
            <div>devloppeur fullstack</div>
            <div className={styles.contactRightDividor}>
              <span style={{
                borderBottom:10,
                borderBottomStyle:"solid",
                borderBottomColor: primaryColor}} />
              <div>
                <FontAwesomeIcon className={styles.socialIcon}
                                 style={{color: primaryColor}}
                                 icon={faStar} />
              </div>
              <span style={{
                borderBottom:10,
                borderBottomStyle:"solid",
                borderBottomColor: primaryColor}} />
            </div>
            <div className={styles.contactName}>
            <div className={styles.lastname}>ÖNER</div>
            <div className={styles.firstname}>
              BERK
            </div>
            <div></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Stamp;