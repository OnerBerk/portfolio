import "./layout.scss";
import {ReactNode} from "react";
import darkDot from "../../assets/dot.svg";
import lightDot from "../../assets/light-dot.svg";
import yellowDot from "../../assets/yellow-dot.svg";

const Layout = ({children}: {children: ReactNode}) => {
  var symboleCopyright = "\u00A9";
  const year = new Date().getFullYear();
  return (
    <div className="layout-main">
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
            <img alt="dark theme" src={darkDot} />
            <img alt="light theme" src={lightDot} />
            <img alt="yellow theme" src={yellowDot} />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Layout;
