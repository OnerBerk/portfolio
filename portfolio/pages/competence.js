import React,{useEffect,useState} from "react"
import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

import {motion} from 'framer-motion';
import pageVariants from "../component/motionVariant/variant";
import styles from "../styles/competence.module.scss";

import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Competence = () => {

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
        >
            <div className={styles.compContainer}>
                <Head>
                    <title>Oner Berk Portfolio Compétences </title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                <div className={styles.iconCont}>
                    <Link href="/"><i><FontAwesomeIcon className={styles.icon} icon={faHome}/></i></Link>
                    <Link href="/projet"><i><FontAwesomeIcon className={styles.icon}
                                                             icon={faAngleDoubleRight}/></i></Link>
                </div>
                <h1> Compétences<span>.Tech()</span></h1>

                <div className={styles.compContent}>
                    <div className={styles.progressglobal}>
                        <div className={styles.circle} >
                            <p>HTML</p>
                            <CircularProgressbarWithChildren
                                value={90}
                                styles={buildStyles({
                                    pathColor: "#e06631",
                                    trailColor: "gold"
                                })}
                            >
                                <img style={{width: 80}} src="/html-5.png" alt="html-logo"/>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className={styles.circle}>
                            <p>CSS</p>
                            <CircularProgressbarWithChildren
                                value={85}
                                styles={buildStyles({
                                    pathColor: "#96d6e6",
                                    trailColor: "gold"
                                })}
                            >
                                <img style={{width: 80}} src="/css.png" alt="css-logo"/>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className={styles.circle}>
                            <p>JAVASCRIPT</p>
                            <CircularProgressbarWithChildren
                                value={65}
                                styles={buildStyles({
                                    pathColor: "snow",
                                    trailColor: "gold"
                                })}
                            >
                                <img style={{width: 80}} src="/javascript.png" alt="javascript logo"/>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className={styles.circle}>
                            <p>NODE JS</p>
                            <CircularProgressbarWithChildren
                                value={75}
                                styles={buildStyles({
                                    pathColor: "#0bc247",
                                    trailColor: "gold"
                                })}
                            >
                                <img style={{width: 78}} src="/nodeJs.png" alt="nodeJs logo"/>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className={styles.circle}>
                            <p>REACT JS</p>
                            <CircularProgressbarWithChildren
                                value={85}
                                styles={buildStyles({
                                    pathColor: "#61bfeb",
                                    trailColor: "gold"
                                })}
                            >
                                <img style={{width: 98}} src="/react.png" alt="react js logo"/>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className={styles.circle}>
                            <p>NEXT JS</p>
                            <CircularProgressbarWithChildren
                                value={75}
                                styles={buildStyles({
                                    pathColor: "#00090d",
                                    trailColor: "gold"
                                })}
                            >
                                <img style={{width: 98}} src="/next-js.png" alt="next js logo"/>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className={styles.circle}>
                            <p>GRAPHQL</p>
                            <CircularProgressbarWithChildren
                                value={70}
                                styles={buildStyles({
                                    pathColor: "#940a6f",
                                    trailColor: "gold"
                                })}
                            >
                                <img style={{width: 98, marginLeft: 5}} src="/graphql.png" alt="graphql logo"/>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className={styles.circle}>
                            <p>POSTRESQL</p>
                            <CircularProgressbarWithChildren
                                value={65}
                                styles={buildStyles({
                                    pathColor: "#4473b9",
                                    trailColor: "gold"
                                })}
                            >
                                <img style={{width: 85}} src="/psql.png" alt="psql logo"/>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className={styles.circle}>
                            <p>MONGODB</p>
                            <CircularProgressbarWithChildren
                                value={85}
                                styles={buildStyles({
                                    pathColor: "black",
                                    trailColor: "gold"
                                })}
                            >
                                <img style={{width: 35}} src="/mongoDb.png" alt="graphql logo"/>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className={styles.circle}>
                            <p>DOCKER</p>
                            <CircularProgressbarWithChildren
                                value={55}
                                styles={buildStyles({
                                    pathColor: "#4473b9",
                                    trailColor: "gold"
                                })}>
                                <img style={{width: 95}} src="/docker.png" alt="docker-logo"/>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className={styles.circle}>
                            <p>GIT</p>
                            <CircularProgressbarWithChildren
                                value={75}
                                styles={buildStyles({
                                    pathColor: "#ce4c13",
                                    trailColor: "gold"
                                })}>
                                <img style={{width: 98}} src="/git.png" alt="docker-logo"/>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                    <br/>
                </div>
                <br/>
            </div>
        </motion.div>
    )
}
export default Competence