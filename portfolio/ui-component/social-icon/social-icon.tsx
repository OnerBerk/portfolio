import styles from "./social-icon.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "../../store/store";
import {getTheme} from "../../store/slices/theme/theme.slice";
import {useState} from "react";

type SocialIconProps = {
  icon: any
  url?: string
  onclick?: () => void
};

const SocialIcon = ({icon, url, onclick}: SocialIconProps) => {
  const {bgColor, primaryColor, secondaryColor} = useSelector(getTheme);
  const [hov, setHov] = useState(false);
  return (
    <div className={styles.iconCont}>
      <a href={url} target="blank">
        <FontAwesomeIcon
          onClick={onclick}
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          className={styles.socialIcon}
          style={!hov
            ? {color: secondaryColor}
            : {color: "#2ddff3", height: "1.7em", fontWeight: "bold"}}
          icon={icon} />
      </a>
    </div>
  );
};

export default SocialIcon;