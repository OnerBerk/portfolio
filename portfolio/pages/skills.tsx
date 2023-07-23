"use client";
import styles from "../styles/skills.module.scss";
import React, {useState} from "react";
import Layout from "../component/layout/layout";

import {faStar, faPaintBrush, faCircleDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Loader from "../component/loader/loader";
import Head from "next/head";
import SocialMedia from "../component/social-media/social-media";
import Navigation from "../component/navigation/navigation";

const Skills = () => {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [focusSkills, setFocusSkills] = useState(0);
  const [openPdf, setOpenPdf] = useState(false);

  const closeAll = () => {
    setOpenLeft(false);
    setOpenRight(false);
  };

  const backEndSkills: {id: number, name: string}[] = [
    {id: 1, name: "Javascript"},
    {id: 2, name: "TypeScript"},
    {id: 3, name: "Java"},
    {id: 4, name: "Python"},
    {id: 5, name: "Node JS"},
    {id: 6, name: "Springboot"},
    {id: 7, name: "Django"},
    {id: 8, name: "MongoDb"},
    {id: 9, name: "PostgreSql"}
  ];
  const frontEndSkills: {id: number, name: string}[] = [
    {id: 10, name: "React js "},
    {id: 11, name: "Next js"},
    {id: 12, name: "Redux Toolkit"},
    {id: 13, name: "Html"},
    {id: 14, name: "Css / Sccs"},
    {id: 15, name: "styled component"},
    {id: 16, name: "Material Ui"},
    {id: 17, name: "Bootstrap"},
    {id: 18, name: "StoryBook"}
  ];

  return (
    <div className={styles.scrollContainer}>
      <Head>
        <title>Compétence</title>
      </Head>
      <div className={styles.borderSkills}>
        <SocialMedia setOpenPdf={setOpenPdf} />
      </div>

      <div className={styles.body}>
        <div className={styles.leftCol}>
          <div className={styles.leftFirst}
               onClick={() => setOpenLeft(!openLeft)}>
            <FontAwesomeIcon className={styles.arrow}
                             icon={faCircleDot} />
            <FontAwesomeIcon className={styles.arrow}
                             icon={faCircleDot} />
            <FontAwesomeIcon className={styles.arrow}
                             icon={faCircleDot} />
          </div>
          <div className={styles.leftSecond}>
            <span>Languages & Backend</span>
          </div>
          <div
            className={openLeft ? styles.openLeft : styles.closeLeft}>
            {backEndSkills.map((b) => {
              return (
                <div
                  onClick={() => {
                    setOpenRight(false);
                    setFocusSkills(b.id);
                  }}
                  className={b.id === focusSkills ? styles.focusSkills : styles.skills} key={b.id}>{b.name}</div>
              );
            })}
          </div>
        </div>
        <div onClick={closeAll} className={styles.bodyBody}>
          <Loader />
          <span>En cours...</span>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.rightFirst}
               onClick={() => setOpenRight(!openRight)}>
            <FontAwesomeIcon className={styles.arrow}
                             icon={faStar} />
            <FontAwesomeIcon className={styles.arrow}
                             icon={faStar} />
            <FontAwesomeIcon className={styles.arrow}
                             icon={faStar} />
          </div>
          <div className={styles.rightSecond}>
            <span>Frontend & Logiciels</span>
          </div>
          <div className={openRight ? styles.openRight : styles.closeRight}>
            {frontEndSkills.map((f) => {
              return (
                <div
                  onClick={() => {
                    setOpenLeft(false);
                    setFocusSkills(f.id);
                  }}
                  className={f.id === focusSkills ? styles.focusSkills : styles.skills} key={f.id}>{f.name}</div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.borderSkills1}>
        <Navigation />
      </div>
    </div>
  );
};

export default Skills;
