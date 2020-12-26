import styles from "./2048.module.scss";
import React from "react";

const Block = ({num}) => {
  return (
      <div className={styles.blockUnit}
           style={
             {
               color:
                   num === 2 ? "#030000" : "" ,
               backgroundColor:
                   num === 0 ? "transparent" : "" ||
                   num === 2 ? "#decdbe" : "" ||
                   num === 4 ? "#5dc38f" : "" ||
                   num === 8 ? "#b7554a" : "" ||
                   num === 16 ? "#e7742d" : "" ||
                   num === 32 ? "#e7a25b" : "" ||
                   num === 64 ? "#24f11e" : "" ||
                   num === 128 ? "#479d94" : "" ||
                   num === 256 ? "#59acd0" : "" ||
                   num === 512 ? "#7287ec" : "" ||
                   num === 1024 ? "#9d66db" : "" ||
                   num === 2048 ? "gold" : ""
             }
           }
      >
        {num}
      </div>)
}

export default Block