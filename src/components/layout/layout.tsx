import "./layout.scss";
import {Dispatch, ReactNode, SetStateAction} from "react";
import darkDot from "../../assets/dot.svg";
import lightDot from "../../assets/light-dot.svg";
import yellowDot from "../../assets/yellow-dot.svg";
import {ThemeEnum} from "../../domain/domain";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import IconUi from "../icon-ui/icon-ui";
import {IconArray} from "./icons-array";

type LayoutProps = {
  children: ReactNode;
  theme: ThemeEnum;
  setTheme: Dispatch<SetStateAction<ThemeEnum>>;
};
const Layout = ({children, theme, setTheme}: LayoutProps) => {
  const year = new Date().getFullYear();
  const returnTheme = () => theme;

  return (
    <div className={`layout-main ${returnTheme()}`}>
      <div className="l">
        <div className={"top-block"}>
          <div className="top-ligne" />
          <div className="top-right">
            <img
              onClick={() => setTheme(ThemeEnum.dark)}
              alt="dark theme"
              src={darkDot}
            />
            <img
              onClick={() => setTheme(ThemeEnum.light)}
              alt="light theme"
              src={lightDot}
            />
            <img
              onClick={() => setTheme(ThemeEnum.yellow)}
              alt="yellow theme"
              src={yellowDot}
            />
          </div>
        </div>
        <div className="left-block">
          <div className="top-left">
            <div className="layout-nav">
              {IconArray.map((f, i) => {
                return (
                  <IconUi
                    key={i}
                    theme={returnTheme()}
                    icon={f.icon}
                    classname={f.classname}
                    size={f.size}
                  />
                );
              })}
            </div>
          </div>
          <span className="date">
            <FontAwesomeIcon className="svg" icon={faCopyright} />
            {`Öner Berk -- ${year}`}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Layout;
