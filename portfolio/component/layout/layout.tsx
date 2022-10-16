import styles from "./layout.module.scss";
import Head from "next/head";
// @ts-ignore
import daruma1 from "../../public/daruma1.png";
// @ts-ignore
import closeRed from "../../public/close-red.png";
// @ts-ignore
import closeYellow from "../../public/close yellow.png";
// @ts-ignore
import arrowRight from "../../public/arrow-right.png";

import {useDispatch, useSelector} from "../../store/store";
import {
  getThemeHeaderState,
  setOpenThemeHeader,
  setCloseThemeHeader
} from "../../store/slices/header/themeHeader.slice";
import ThemeCard from "../theme-card/theme-card";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {getTheme, setStoreTheme} from "../../store/slices/theme/theme.slice";

export type LayoutProps = {
  title: string
  children: JSX.Element,
}
export const initialPrevColors = {
  bgColor: "#FFFFFF",
  color: "#001621",
  secondaryColor: "#7a2626",
  prev: false
};

const Layout = ({children, title}: LayoutProps) => {
  const dispatch = useDispatch();
  const {open} = useSelector(getThemeHeaderState);

  const {bgColor, primaryColor, secondaryColor} = useSelector(getTheme);
  const [prevThem, setPrevThem] = useState(initialPrevColors);

  const OnHover = (bgColor: string, color: string, secondaryColor: string) => {
    setPrevThem({
      bgColor: bgColor,
      color: color,
      secondaryColor: secondaryColor,
      prev: true
    });
  };

  useEffect(() => {
    setPrevThem({
      bgColor: bgColor,
      color: primaryColor,
      secondaryColor: secondaryColor,
      prev: false
    });
  }, [bgColor]);
  return (
    <div style={{backgroundColor: bgColor, color: primaryColor}} className={styles.layoutMain}>
      <>
        {open &&
          <div
            style={prevThem.prev
              ? {
                backgroundColor: prevThem.bgColor,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: prevThem.secondaryColor
              }
              : {
                backgroundColor: bgColor,
                borderBottom: 1,
                borderBottomStyle: "solid",
                borderBottomColor: secondaryColor
              }
            }
            className={styles.themeContainer}>
            <div className={styles.themeContainerLeft}>
              <div style={prevThem.prev
                ? {
                  border: 1,
                  borderStyle: "solid",
                  borderRadius: 4,
                  borderColor: prevThem.secondaryColor
                }
                : {
                  border: 1,
                  borderStyle: "solid",
                  borderRadius: 4,
                  borderColor: secondaryColor
                }
              }
                   className={styles.container}>
                <ThemeCard
                  onClick={() => {
                    dispatch(setStoreTheme({
                      bgColor: "#FFFFFF",
                      primaryColor: "#001621",
                      secondaryColor: "#7a2626",
                      thirdColor: ""
                    }));
                    localStorage.setItem("theme", JSON.stringify({
                      bgColor: "#FFFFFF", primaryColor: "#001621", secondaryColor: "#7a2626", thirdColor: ""
                    }));
                  }}
                  onMouseEnter={() => OnHover("#FFFFFF", "#001621", "#7a2626")}
                  onMouseLeave={() => setPrevThem(initialPrevColors)}
                  backgroundColor="#FFFFFF"
                  color="#001621"
                  secondaryColor="#7a2626"
                  label="Light" />
                <ThemeCard
                  onClick={() => {
                    dispatch(setStoreTheme({
                      bgColor: "#ebebde",
                      primaryColor: "#4f4747",
                      secondaryColor: "#777764",
                      thirdColor: ""
                    }));
                  }}
                  onMouseEnter={() => OnHover("#ebebde", "#4f4747", "#777764")}
                  onMouseLeave={() => setPrevThem(initialPrevColors)}
                  backgroundColor="#ebebde"
                  color="#4f4747"
                  secondaryColor="#777764"
                  label="Momo" />
                <ThemeCard
                  onClick={() => {
                    dispatch(setStoreTheme({
                      bgColor: "#3d4c41",
                      primaryColor: "#e6e6e6",
                      secondaryColor: "#999999",
                      thirdColor: ""
                    }));
                  }}
                  onMouseEnter={() => OnHover("#3d4c41", "#e6e6e6", "#999999")}
                  onMouseLeave={() => setPrevThem(initialPrevColors)}
                  backgroundColor="#3d4c41"
                  color="#e6e6e6"
                  secondaryColor="#999999"
                  label="Milton" />
                <ThemeCard
                  onClick={() => {
                    dispatch(setStoreTheme({
                      bgColor: "#234E70",
                      primaryColor: "#FBF8BE",
                      secondaryColor: "#FBF8BE",
                      thirdColor: ""
                    }));
                  }}
                  onMouseEnter={() => OnHover("#234E70", "#FBF8BE", "#FBF8BE")}
                  onMouseLeave={() => setPrevThem(initialPrevColors)}
                  backgroundColor="#234E70"
                  color="#FBF8BE"
                  secondaryColor="#FBF8BE"
                  label="Totorro" />
                <ThemeCard
                  onClick={() => {
                    dispatch(setStoreTheme({
                      bgColor: "#372c2e",
                      primaryColor: "#ffffff",
                      secondaryColor: "#DE9E48",
                      thirdColor: ""
                    }));
                  }}
                  onMouseEnter={() => OnHover("#372c2e", "#ffffff", "#DE9E48")}
                  onMouseLeave={() => setPrevThem(initialPrevColors)}
                  backgroundColor="#372c2e"
                  color="#ffffff"
                  secondaryColor="#DE9E48"
                  label="Brown" />
                <ThemeCard
                  onClick={() => {

                    dispatch(setStoreTheme(
                      {bgColor: "#00241F", primaryColor: "#E7DAC7", secondaryColor: "#937047", thirdColor: ""}));
                  }}
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
                             style={prevThem.prev
                               ? {
                                 fontSize: "16px",
                                 color: prevThem.secondaryColor
                               }
                               : {
                                 fontSize: "16px",
                                 color: secondaryColor
                               }
                             }
                             icon={faCircleXmark} />
          </div>}
      </>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#234E70" />
      </Head>
      <div className={styles.layoutHeader}>
        <div>Öner Berk</div>
        <div className={styles.headerRight}>
          <span> Thèmes </span>
          <img alt="fleche droite" src={arrowRight} />
          <img onClick={() => dispatch(setOpenThemeHeader())} alt="changé de theme" src={daruma1} />
        </div>
      </div>
      <div className={styles.layoutChildren}>
        {children}
      </div>
    </div>
  );
};
export default Layout;