import styles from "./social-icon.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "../../store/store";
import {getTheme} from "../../store/slices/theme/theme.slice";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

type SocialIconProps = {
  icon: any
  url?: string
  linkUrl?: boolean
  onclick?: () => void
};

const SocialIcon = ({icon, url, onclick, linkUrl}: SocialIconProps) => {
  const {thirdColor, secondaryColor} = useSelector(getTheme);
  const [hov, setHov] = useState(false);
  const [foc, setFoc] = useState(false);
  const routeur = useRouter();

  useEffect(() => {
    routeur.pathname === url && setFoc(true);
  }, [routeur]);

  const focusColor = () => {
    return foc ? thirdColor : secondaryColor;
  };

  if (linkUrl) {
    return (
      <div className={styles.iconCont}>
        <Link href={url}>
          <a><FontAwesomeIcon
            onClick={onclick}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className={styles.socialIcon}
            style={!hov
              ? {color: focusColor()}
              : {color: thirdColor, height: "1.7em", fontWeight: "bold"}}
            icon={icon} /></a>
        </Link>
      </div>
    );
  } else {
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
              : {
                color: thirdColor,
                height: "1.7em",
                fontWeight: 700
              }}
            icon={icon} />
        </a>
      </div>
    );
  }
};

export default SocialIcon;