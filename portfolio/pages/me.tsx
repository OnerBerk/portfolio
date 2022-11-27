import React from "react";
import styles from "../styles/me.module.scss";
import Layout from "../component/layout/layout";
import Map from "../component/map/map";

const Me = () => {
  return (
    <Layout title="me">
      <div className={styles.meMain}>
        <div className={styles.meTop}></div>
        <div className={styles.meBottom}>
          <div><Map/></div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </Layout>
  );
};

export default Me;