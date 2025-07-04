import React from "react";
import styles from "./contact.module.css";
import ComingSoonDesign from "../../components/Elements/CommingSoon/CommingSoon";
const page = () => {
  return (
    <div>
      <div className={styles.back}></div>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>Get in Touch with IEEE SB NITC</p>
      </div>

      <div className={styles.container}>
        <div className={styles.formCardBox}>
          <div className={styles.formCard}>
            <h2>SEND A MESSAGE</h2>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Name:</label>
                <input type="text" className={styles.inputNnE} />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Email:</label>
                <input type="email" className={styles.inputNnE} />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Subject:</label>
              <input type="text" className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Messages:</label>
              <textarea className={styles.textarea}></textarea>
            </div>

            <button className={styles.button}>Contact Us</button>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactInfoBox}>
            <h3>Contact Information</h3>
            <p>
              <strong>Address</strong>
            </p>
            <p>
              Mukkam Road
              <br />
              Kattangal
              <br />
              Kozhikode, Kerala
            </p>
            <p>
              <strong>E-mail</strong>
            </p>
            <p>ieeesb@nitc.ac.in</p>
          </div>

          <img className={styles.map} src="/nitc_map.png" alt="NITC Map" />
        </div>
      </div>
    </div>
  );
};

export default page;
