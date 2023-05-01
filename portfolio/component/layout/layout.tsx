import styles from "./layout.module.scss";
import Head from "next/head";

import {useDispatch, useSelector} from "../../store/store";
import {
  getThemeHeaderState,
  setOpenThemeHeader,
  setCloseThemeHeader
} from "../../store/slices/header/themeHeader.slice";
import ThemeCard from "../theme-card/theme-card";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {getTheme, setStoreTheme} from "../../store/slices/theme/theme.slice";
import SocialMedia from "../social-media/social-media";
import PdfPrev from "../pdf-preview/pdf-prev";
import Image from "next/image";
import Navigation from "../navigation/navigation";
import Breadcrumb from "../breadcrumb/breadcrumb";
import {useRouter} from "next/router";
import Footer from "./footer/footer";

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
  const location = useRouter();
  const {open} = useSelector(getThemeHeaderState);

  const {bgColor, primaryColor, secondaryColor} = useSelector(getTheme);
  const [prevThem, setPrevThem] = useState(initialPrevColors);
  const [openPdf, setOpenPdf] = useState(false);
  const [skills, setSkills] = useState(false);

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
  useEffect(() => {
    location.pathname.includes("skills") && setSkills(true);
  }, [location]);

  return (
    <>
      <div style={!skills ? {backgroundColor: bgColor, color: primaryColor} : {backgroundColor: "#E0FF1BFF"}}
           className={styles.layoutMain}>
        {openPdf && <PdfPrev setOpenPdf={setOpenPdf} />}
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
                <div
                  className={styles.container}
                  style={prevThem.prev
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
                  }>
                  <ThemeCard
                    onClick={() => {
                      dispatch(setCloseThemeHeader());
                      dispatch(setStoreTheme({
                        bgColor: "#FFFFFF",
                        primaryColor: "#001621",
                        secondaryColor: "#7a2626",
                        thirdColor: "#FF7F11"
                      }));
                      localStorage.setItem("theme", JSON.stringify({
                        bgColor: "#FFFFFF", primaryColor: "#001621", secondaryColor: "#7a2626", thirdColor: "#FF7F11"
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
                      dispatch(setCloseThemeHeader());
                      dispatch(setStoreTheme({
                        bgColor: "#ebebde",
                        primaryColor: "#4f4747",
                        secondaryColor: "#777764",
                        thirdColor: "#2D2327"
                      }));
                    }}
                    onMouseEnter={() => OnHover("#ebebde", "#4f4747", "#777764")}
                    onMouseLeave={() => setPrevThem(initialPrevColors)}
                    backgroundColor="#ebebde"
                    color="#4f4747"
                    secondaryColor="#2D2327"
                    label="Momo" />
                  <ThemeCard
                    onClick={() => {
                      dispatch(setCloseThemeHeader());
                      dispatch(setStoreTheme({
                        bgColor: "#3d4c41",
                        primaryColor: "#e6e6e6",
                        secondaryColor: "#999999",
                        thirdColor: "#92AFD7"
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
                      dispatch(setCloseThemeHeader());
                      dispatch(setStoreTheme({
                        bgColor: "#234E70",
                        primaryColor: "#FBF8BE",
                        secondaryColor: "#FBF8BE",
                        thirdColor: "#C33C54"
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
                      dispatch(setCloseThemeHeader());
                      dispatch(setStoreTheme({
                        bgColor: "#372c2e",
                        primaryColor: "#ffffff",
                        secondaryColor: "#DE9E48",
                        thirdColor: "#8AB0AB"
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
                      dispatch(setCloseThemeHeader());
                      dispatch(setStoreTheme(
                        {
                          bgColor: "#00241F",
                          primaryColor: "#E7DAC7",
                          secondaryColor: "#937047", thirdColor: "#8AB0AB"
                        }));
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
        </Head>
        {!skills && <div className={styles.layoutHeader}>
          <div className={styles.headerLeft}>
            <div>Öner Berk</div>
          </div>
          <div className={styles.headerRight}>
            <span> Thèmes </span>
            <FontAwesomeIcon className={styles.arrow}
                             style={prevThem.prev
                               ? {
                                 color: prevThem.secondaryColor
                               }
                               : {
                                 color: secondaryColor
                               }
                             }
                             icon={faArrowRight} />

            {!open && <Image width={50} height={50}
                             onClick={() => dispatch(setOpenThemeHeader())} alt="changé de theme"
                             src="/sakura.png" />}
          </div>
        </div>}
        <div className={styles.layoutChildren}>
          {children}
        </div>
      </div>
      <Footer setOpenPdf={setOpenPdf} />
    </>
  );
};
export default Layout;