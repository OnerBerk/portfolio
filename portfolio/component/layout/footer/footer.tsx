import styles from "./footer.module.scss";
import SocialMedia from "../../social-media/social-media";
import Navigation from "../../navigation/navigation";

const Footer = ({setOpenPdf}) => {
  return (
    <footer className={styles.footer}>
      <SocialMedia setOpenPdf={setOpenPdf} />
      <Navigation />
    </footer>
  );
};
export default Footer;