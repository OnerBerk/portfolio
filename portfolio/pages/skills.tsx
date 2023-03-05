"use client";
import styles from "../styles/skills.module.scss";
import React, {useState} from "react";
import Layout from "../component/layout/layout";

import {faStar, faPaintBrush, faCircleDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Loader from "../component/loader/loader";

const Skills = () => {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [focusSkills, setFocusSkills] = useState(0);

  const closeAll = () => {
    setOpenLeft(false);
    setOpenRight(false);
  };

  const backEndSkills: {id: number, name: string}[] = [
    {id: 1, name: "Javascript"},
    {id: 2, name: "Java"},
    {id: 3, name: "Python"},
    {id: 4, name: "Node JS"},
    {id: 5, name: "Springboot"},
    {id: 6, name: "Django"},
    {id: 7, name: "MongoDb"},
    {id: 8, name: "PostgreSql"}
  ];
  const frontEndSkills: {id: number, name: string}[] = [
    {id: 1, name: "React js "},
    {id: 2, name: "Next js"},
    {id: 3, name: "Redux Toolkit"},
    {id: 4, name: "Html"},
    {id: 9, name: "Css / Sccs"},
    {id: 10, name: "styled component"},
    {id: 5, name: "Material Ui"},
    {id: 6, name: "Bootstrap"},
    {id: 7, name: "StoryBook"},
  ];

  return (
    <Layout title="Skills">
      <div className={styles.scrollContainer}>
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
        <div onClick={closeAll} className={styles.body}>
          <Loader />
          <span>En cours...</span>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.rightFirst}
               onClick={() => setOpenRight(!openRight)}
          >
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
          <div
            className={openRight ? styles.openRight : styles.closeRight}>
            {frontEndSkills.map((f) => {
              return (
                <div
                  onClick={() => {
                    setOpenRight(false);
                    setFocusSkills(f.id);
                  }}
                  className={f.id === focusSkills ? styles.focusSkills : styles.skills} key={f.id}>{f.name}</div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;