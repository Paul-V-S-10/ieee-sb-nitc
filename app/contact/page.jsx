import React from "react";
import styles from "./contact.module.css";
import ComingSoonDesign from "../../components/Elements/CommingSoon/CommingSoon";
const page = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>Get in Touch with IEEE SB NITC</p>
      </div>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2>SEND A MESSAGE</h2>
          <div className={styles.formGroup}>
            <label>Name:</label>
            <input type="text" />
          </div>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input type="email" />
          </div>
          <div className={styles.formGroup}>
            <label>Subject:</label>
            <input type="text" />
          </div>
          <div className={styles.formGroup}>
            <label>Messages:</label>
            <textarea className={styles.textarea} />
          </div>
          <button className={styles.button}>Contact Us</button>
        </div>

        <div className={styles.contactInfo}>
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
          <img className={styles.map} src="/nitc_map.png" alt="NITC Map" />
        </div>
      </div>
    </div>
  );
};

export default page;
