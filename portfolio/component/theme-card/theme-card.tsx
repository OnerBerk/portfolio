import styles from "./theme-card.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDroplet} from "@fortawesome/free-solid-svg-icons";

type ThemeCardProps = {
  backgroundColor: string
  color: string
  secondaryColor: string
  label: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}
const ThemeCard = (props: ThemeCardProps) => {
  return (
    <div
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color
      }}
      className={styles.themeCardMain}>
      {props.label}
      <FontAwesomeIcon
        style={{
          fontSize: "16px",
          color: props.secondaryColor
        }}
        icon={faDroplet} />
    </div>
  );
};
export default ThemeCard;