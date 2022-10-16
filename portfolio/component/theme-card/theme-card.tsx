import styles from "./theme-card.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDroplet} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "next-themes";
import {useSelector} from "../../store/store";
import {getTheme} from "../../store/slices/theme/theme.slice";

type ThemeCardProps = {
  backgroundColor: string
  color: string
  secondaryColor: string
  label: string
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick?: () => void
}
const ThemeCard = (props: ThemeCardProps) => {
  return (
    <div
      className={styles.themeCardMain}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        border: 1, borderStyle: "solid", borderColor: props.secondaryColor, borderRadius:4
      }}>
      {props.label}
      <FontAwesomeIcon
        style={{
          width:20,
          height:20,
          color: props.secondaryColor
        }}
        icon={faDroplet} />
    </div>
  );
};
export default ThemeCard;