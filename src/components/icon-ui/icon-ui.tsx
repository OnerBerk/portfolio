import "./icon-ui.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Iicon} from "../../domain/domain";
import {useState} from "react";
import {returnColors} from "../../utils/returnColors";

const IconUi = ({icon, size, onClick, classname, theme}: Iicon) => {
  const [enter, setEnter] = useState(false);

  return (
    <FontAwesomeIcon
      style={{color: enter && theme ? returnColors(theme) : ""}}
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      className={`${classname}`}
      onClick={onClick ? onClick : () => console.log("")}
      size={size}
      icon={icon}
    />
  );
};
export default IconUi;
