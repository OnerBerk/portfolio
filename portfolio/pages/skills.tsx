"use client";
import styles from "../styles/skills.module.scss";
import React, {useState, useRef, useEffect, useCallback} from "react";
import Layout from "../component/layout/layout";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion";
import {useSelector} from "../store/store";
import {getTheme} from "../store/slices/theme/theme.slice";
import {faStar, faPaintBrush, faCircleDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Skills = () => {
  const {secondaryColor, bgColor, primaryColor} = useSelector(getTheme);
  return (
    <Layout title="Skills">
      <div className={styles.scrollContainer}>
        <div className={styles.leftCol}>
          <div className={styles.leftFirst}>
            <FontAwesomeIcon className={styles.arrow}
                             icon={faCircleDot} />
            <FontAwesomeIcon className={styles.arrow}
                             icon={faCircleDot} />
            <FontAwesomeIcon className={styles.arrow}
                             icon={faCircleDot} />
          </div>
          <div className={styles.leftSecond}>
            <span>Competences Backend</span>
          </div>
        </div>
        <div className={styles.body}>En cours ...</div>
        <div className={styles.rightCol}>
          <div className={styles.rightFirst}>
            <FontAwesomeIcon className={styles.arrow}
                             icon={faStar} />
            <FontAwesomeIcon className={styles.arrow}
                             icon={faStar} />
            <FontAwesomeIcon className={styles.arrow}
                             icon={faStar} />
          </div>
          <div className={styles.rightSecond}>
            <span>Competences Frontend</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;