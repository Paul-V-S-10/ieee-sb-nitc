import React from "react";
import styles from "./Count.module.css";

const Count = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <p>680+</p>
        Membership Count
      </div>
      <div className={styles.inner}>
        <p>9+</p>
        Societies
      </div>
      <div className={styles.inner}>
        <p>75+</p>
        Events
      </div>
      <div className={styles.inner}>
        <p>300+</p>
        Professional Members
      </div>
    </div>
  );
};
export default Count;
