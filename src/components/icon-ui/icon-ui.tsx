import "./icon-ui.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Iicon} from "../../domain/domain";
import {useState} from "react";
import {returnColors} from "../../utils/returnColors";
import {useNavigate} from "react-router-dom";

const IconUi = ({icon, size, navigatePath, classname, theme}: Iicon) => {
  const [enter, setEnter] = useState(false);
  const navigate = useNavigate();
  return (
    <FontAwesomeIcon
      style={{color: enter && theme ? returnColors(theme) : ""}}
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      className={`${classname}`}
      onClick={
        navigatePath
          ? () => navigate(navigatePath)
          : () => console.log("Pas de Navigation")
      }
      size={size}
      icon={icon}
    />
  );
};
export default IconUi;
