import "./layout.scss";
import {useState} from "react";
import darkDot from "../../assets/dot.svg";
import lightDot from "../../assets/light-dot.svg";
import yellowDot from "../../assets/yellow-dot.svg";
import {ThemeEnum} from "../../domain/domain";
import {faCircleDown} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import IconUi from "../icon-ui/icon-ui";
import {IconArray} from "./icons-array";
import {Outlet} from "react-router-dom";
import {returnTheme} from "../../utils/return-theme";
import {returnBackground} from "../../utils/return-background";
import {Link} from "react-router-dom";
import {Viewer} from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import close from "../../assets/close.png";
// @ts-ignore
import cv from "../../assets/pdf/cv.pdf";

const Layout = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.dark);
  const year = new Date().getFullYear();
  const [openPdf, setOpenPdf] = useState<boolean>(false);

  return (
    <div className={`layout-main ${returnTheme(theme)}`}>
      {openPdf && (
        <div className="pdf">
          <div className="pdf-paper">
            <img
              className="close"
              alt="Fermer la modale"
              src={close}
              onClick={() => setOpenPdf(false)}
            />
            <Viewer fileUrl={cv} />;
          </div>
        </div>
      )}
      <img
        className="background"
        alt={returnBackground(theme).toString()}
        src={returnBackground(theme)}
      />
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
                    theme={returnTheme(theme)}
                    icon={f.icon}
                    classname={f.classname}
                    size={f.size}
                    navigatePath={f.navigatePath && f.navigatePath}
                  />
                );
              })}
            </div>
          </div>
          <span className="date">{`Öner Berk -- ${year}`}</span>
        </div>
        <div className="bottom-block">
          <Link
            className="link-a"
            to="https://www.linkedin.com/in/onerberk/"
            target="_blank">
            <IconUi theme={returnTheme(theme)} icon={faLinkedin} />
          </Link>
          <Link
            className="link-a"
            to="https://github.com/OnerBerk"
            target="_blank">
            <IconUi theme={returnTheme(theme)} icon={faGithub} />
          </Link>
          <IconUi
            setPdf={setOpenPdf}
            theme={returnTheme(theme)}
            icon={faCircleDown}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Layout;
