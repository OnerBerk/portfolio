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
                   num === 2 ? "#FFFFFF" : "" ||
                   num === 4 ? "#a8e57d" : "" ||
                   num === 8 ? "#ae3b3b" : "" ||
                   num === 16 ? "#ea8f54" : "" ||
                   num === 32 ? "#e7a25b" : "" ||
                   num === 64 ? "#57ab45" : "" ||
                   num === 128 ? "#479d94" : "" ||
                   num === 256 ? "#3a7d9b" : "" ||
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