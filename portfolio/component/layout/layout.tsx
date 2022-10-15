import styles from "./layout.module.scss";
import Head from "next/head";
// @ts-ignore
import daruma1 from "../../public/daruma1.png";
// @ts-ignore
import closeRed from "../../public/close-red.png";
// @ts-ignore
import closeYellow from "../../public/close yellow.png";

import {useDispatch, useSelector} from "../../store/store";
import {
  getThemeHeaderState,
  setOpenThemeHeader,
  setCloseThemeHeader
} from "../../store/slices/header/themeHeader.slice";
import ThemeCard from "../theme-card/theme-card";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

export type LayoutProps = {
  title: string
  children: JSX.Element,
}
export const initialPrevColors = {
  bgColor: "#FFFFFF",
  color: "#050000",
  secondaryColor: "#961a1a"
};
const Layout = ({children, title}: LayoutProps) => {
  const dispatch = useDispatch();
  const {open} = useSelector(getThemeHeaderState);
  const [prevThem, setPrevThem] = useState(initialPrevColors);
  const OnHover = (bgColor: string, color: string, secondaryColor: string) => {
    setPrevThem({
      bgColor: bgColor,
      color: color,
      secondaryColor: secondaryColor
    });
  };

  return (
    <div className={styles.layoutMain}>
      <>
        {open &&
          <div
            style={{backgroundColor: prevThem.bgColor}}
            className={styles.themeContainer}>
            <div className={styles.themeContainerLeft}>
              <div style={{border: 2, borderStyle: "solid", borderColor: prevThem.secondaryColor}}
                   className={styles.container}>
                <ThemeCard
                  onMouseEnter={() => OnHover("#FFFFFF", "#001621", "#919183")}
                  onMouseLeave={() => setPrevThem(initialPrevColors)}
                  backgroundColor="#FFFFFF"
                  color="#001621"
                  secondaryColor="#919183"
                  label="Light" />
                <ThemeCard
                  onMouseEnter={() => OnHover("#ebebde", "#4f4747", "#777764")}
                  onMouseLeave={() => setPrevThem(initialPrevColors)}
                  backgroundColor="#ebebde"
                  color="#4f4747"
                  secondaryColor="#777764"
                  label="Momo" />
                <ThemeCard
                  onMouseEnter={() => OnHover("#3d4c41", "#e6e6e6", "#999999")}
                  onMouseLeave={() => setPrevThem(initialPrevColors)}
                  backgroundColor="#3d4c41"
                  color="#e6e6e6"
                  secondaryColor="#999999"
                  label="Milton" />
                <ThemeCard
                  onMouseEnter={() => OnHover("#234E70", "#FBF8BE", "#FBF8BE")}
                  onMouseLeave={() => setPrevThem(initialPrevColors)}
                  backgroundColor="#234E70"
                  color="#FBF8BE"
                  secondaryColor="#FBF8BE"
                  label="Totorro" />
                <ThemeCard
                  onMouseEnter={() => OnHover("#372c2e", "#ffffff", "#DE9E48")}
                  onMouseLeave={() => setPrevThem(initialPrevColors)}
                  backgroundColor="#372c2e"
                  color="#ffffff"
                  secondaryColor="#DE9E48"
                  label="Brown" />
                <ThemeCard
                  onMouseEnter={() => OnHover("#00241F", "#937047", "#937047")}
                  onMouseLeave={() => setPrevThem(initialPrevColors)}
                  backgroundColor="#00241F"
                  color=" #E7DAC7"
                  secondaryColor="#937047"
                  label="Dark" />
              </div>
            </div>
            <FontAwesomeIcon className={styles.close}
                             onClick={() => dispatch(setCloseThemeHeader())}
                             style={{
                               fontSize: "16px",
                               color: prevThem.secondaryColor
                             }}
                             icon={faCircleXmark} />
          </div>}
      </>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.layoutHeader}>
        <div>Öner Berk</div>
        <img onClick={() => dispatch(setOpenThemeHeader())} alt="changé de theme" src={daruma1} />
      </div>
      <div className={styles.layoutChildren}>
        {children}
      </div>
    </div>
  );
};
export default Layout;