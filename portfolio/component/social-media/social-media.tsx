import styles from "./social-media.module.scss";
import {faGithubAlt, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEllipsisVertical, faCircleDown} from "@fortawesome/free-solid-svg-icons";
import SocialIcon from "../../ui-component/social-icon/social-icon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "../../store/store";
import {getTheme} from "../../store/slices/theme/theme.slice";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

type SocialMediaProps = {
  setOpenPdf: (openPdf: boolean) => void
}

const SocialMedia = ({setOpenPdf}: SocialMediaProps) => {
  const routeur = useRouter();
  const {secondaryColor, bgColor} = useSelector(getTheme);
  const [skills, setSkills] = useState(false);

  useEffect(() => {
    routeur.pathname.includes("skills") && setSkills(true);
  }, [routeur]);

  return (
    <div style={
      routeur.pathname.includes("me") ? {backgroundColor: bgColor} : {backgroundColor: "transparent"}
    }
         className={styles.socialMediaMain}>
      <SocialIcon url="https://github.com/OnerBerk" icon={faGithubAlt} />
      <SocialIcon url="https://www.linkedin.com/in/onerberk/" icon={faLinkedin} />
      <SocialIcon onclick={() => {
        setOpenPdf(true);
      }} icon={faCircleDown} />
      <FontAwesomeIcon className={styles.socialIcon}
                       style={!skills ? {color: secondaryColor} : {color: "black"}}
                       icon={faEllipsisVertical} />
      <FontAwesomeIcon className={styles.socialIcon}
                       style={!skills ? {color: secondaryColor} : {color: "black"}}
                       icon={faEllipsisVertical} />
      <FontAwesomeIcon className={styles.socialIcon}
                       style={!skills ? {color: secondaryColor} : {color: "black"}}
                       icon={faEllipsisVertical} />
      <FontAwesomeIcon className={styles.socialIcon}
                       style={!skills ? {color: secondaryColor} : {color: "black"}}
                       icon={faEllipsisVertical} />
    </div>
  );
};
export default SocialMedia;