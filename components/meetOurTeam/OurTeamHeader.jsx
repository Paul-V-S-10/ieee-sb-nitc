// import logo from "./assets/logo.png";
import Image from "next/image";
import styles from "./OurTeamHearder.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.ieee}>
        <span className={styles.ieee1}>IEEE SB NITC</span>
        <span className={styles.ieee2}>EXECOM 2025-26</span>
        <div className={styles.moto}>
          <div>
            "Where Passion meets technology, we pave the way for engineering
          </div>
          <div>excellence"</div>
        </div>
      </div>
      <div className={styles.meet}>
        MEET<span> OUR </span>TEAM
      </div>
    </div>
  );
}

export default Header;
