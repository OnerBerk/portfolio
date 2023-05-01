import styles from "./navigation.module.scss";
import SocialIcon from "../../ui-component/social-icon/social-icon";
import {faConnectdevelop} from "@fortawesome/free-brands-svg-icons";
import {faEllipsisVertical, faFingerprint} from "@fortawesome/free-solid-svg-icons";
import {faIdBadge, faStamp, faIgloo, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "../../store/store";
import {getTheme} from "../../store/slices/theme/theme.slice";
import {useRouter} from "next/router";

const Navigation = () => {
  const {secondaryColor, bgColor} = useSelector(getTheme);
  const routeur = useRouter();
  const iconList = [
    {
      icon: faStamp, name: "stamp",
      onclick: () => {}, link: "/"
    },
    {
      icon: faFingerprint, name: "me", onclick: () => {
      }, link: "/me"
    },
    {
      icon: faConnectdevelop, name: "skills", onclick: () => {
      }, link: "/skills"
    },
    {
      icon: faBriefcase, name: "project", onclick: () => {
      }, link: "/projects"
    },
    {
      icon: faIdBadge, name: "contact", onclick: () => {
      }, link: "/contact"
    },
  ];
  const returnColor = () => {
    return routeur.pathname.includes("skills") ? "black" : secondaryColor;
  };

  return (
    <div style={
      routeur.pathname.includes("me")
        ? {backgroundColor: bgColor}
        : {backgroundColor: "transparent"}
    }
         className={styles.navigationMain}>
      {iconList.map((el, index: number) => {
        return (
          <SocialIcon
            key={index}
            onclick={el.onclick}
            icon={el.icon}
            url={el.link}
            linkUrl />
        );
      })}
      <>
        <FontAwesomeIcon className={styles.socialIcon}
                         style={{color: returnColor()}}
                         icon={faEllipsisVertical} />
        <FontAwesomeIcon className={styles.socialIcon}
                         style={{color: returnColor()}}
                         icon={faEllipsisVertical} />
        <FontAwesomeIcon className={styles.socialIcon}
                         style={{color: returnColor()}}
                         icon={faEllipsisVertical} />
        <FontAwesomeIcon className={styles.socialIcon}
                         style={{color: returnColor()}}
                         icon={faEllipsisVertical} />
      </>
    </div>
  );
};
export default Navigation;