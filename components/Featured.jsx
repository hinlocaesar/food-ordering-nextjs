import React from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";
function Featured() {
  const images = ["/img/featured.jpg", "/img/featured1.jpg"];
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image src="/img/arrowl.png" alt="" layout="fill" />
      </div>

      <div className={styles.imgContainer}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image src="/img/arrowr.png" alt="" layout="fill" />
      </div>
    </div>
  );
}

export default Featured;
