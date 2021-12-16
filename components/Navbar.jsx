import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.texts}>Order Now!</div>
          <div className={styles.texts}>09077449579</div>
        </div>
      </div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  );
}

export default Navbar;
