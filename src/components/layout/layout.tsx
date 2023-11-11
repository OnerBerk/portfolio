import "./layout.scss";
import {Dispatch, ReactNode, SetStateAction, useEffect} from "react";
import darkDot from "../../assets/dot.svg";
import lightDot from "../../assets/light-dot.svg";
import yellowDot from "../../assets/yellow-dot.svg";
import {ThemeEnum} from "../../domain/domain";

type LayoutProps = {
  children: ReactNode;
  theme: ThemeEnum;
  setTheme: Dispatch<SetStateAction<ThemeEnum>>;
};
const Layout = ({children, theme, setTheme}: LayoutProps) => {
  const symboleCopyright = "\u00A9";
  const year = new Date().getFullYear();
  const returnTheme = () => theme;

  return (
    <div className={`layout-main ${returnTheme()}`}>
      <div className="l">
        <div className="left-block">
          <div className="ligne" />
          <span className="date">
            {symboleCopyright}
            {year}
          </span>
        </div>
        <div className={"top-block"}>
          <div className="top-ligne" />
          <div className="top-right">
            <span>Öner</span>
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
      </div>
      {children}
    </div>
  );
};
export default Layout;
