import React from "react";
import styles from "../styles/me.module.scss";
import Layout from "../component/layout/layout";
import {useSelector} from "../store/store";
import {getTheme} from "../store/slices/theme/theme.slice";
import Image from "next/image";
import {dayOfWeek} from "../utils/day-of-week";

const Me = () => {
  const {secondaryColor, bgColor, primaryColor} = useSelector(getTheme);

  return (
    <Layout title="me">
      <>
        <>
          <div
            style={{
              borderBottom: 4,
              borderBottomStyle: "solid",
              borderColor: secondaryColor,
              backgroundColor: bgColor
            }}
            className={styles.meTitle}>About me
          </div>
          <div
            style={{
              backgroundColor: bgColor
            }}
            className={styles.meTitleLeft2}>
            {`2019 to ${new Date().getFullYear()}`}
          </div>
          <div
            style={{
              backgroundColor: bgColor
            }}
            className={styles.meTitleLeft}> fullstack developper
          </div>
          <div
            className={styles.meTitleBottom}> Öner Berk
          </div>
        </>
        <div style={{
          borderLeft: 4,
          borderRight: 4,
          borderTop: 4,
          borderBottom: 4,
          borderBottomStyle: "solid",
          borderTopStyle: "solid",
          borderRightStyle: "solid",
          borderLeftStyle: "solid",
          borderColor: secondaryColor
        }} className={styles.meMain}>
          <div style={{
            backgroundColor:bgColor, color:primaryColor
          }} className={styles.meCarrousel}>
              Salut, Je suis  <span>Öner Berk</span> Fullstack Developper<br/><br/>
              Bienvenue dans mon Portflio avec certains de Mes Projets.<br/><br/>

              Après une Vingtaine d'années dans le commerce et le Management,
              j'ai décidé de me reconvertir dans le Développement Informatique .
              Formé à Epitech Paris. veille sur Udemy et monté en compétences
              dans des Cabinets de conseils Informatique.<br/><br/>

              je suis passionné du Japon , créatif à travers la Linogravure et le Développement.
              D'un Naturel Curieux, J'aime les challenges et l'apprentissage.<br /><br/>

              J'aime me tenir informé des nouvelles tendances, et suis en constante veille.<br /><br/>

              Rest in the end, not in the middle<br /><br/>

            <span>{` Rester positif & bon ${dayOfWeek()}.`}</span>
          </div>
        </div>
      </>

    </Layout>
  );
};

export default Me;