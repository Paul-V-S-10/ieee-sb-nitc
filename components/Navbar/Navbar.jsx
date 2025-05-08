import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import NavIcon from "@/public/nav-icon.svg"
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
      <Image className={styles.logo} src={Logo} width="auto" height="auto" alt="ieee logo" />
      </Link>

      <ul className={styles.ul}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/chapters">Chapters</Link>
        </li>
        <li>
          <Link href="/ourTeam">Execom</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <button className={styles.button}>Join IEEE</button>
      </ul>

      <Image
        src={NavIcon}
        width={30}
        height={30}
        alt="Menu"
        className={styles.menuIcon}
      />
    </nav>
  );
};

export default Navbar;
