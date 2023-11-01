import React from "react";
import styles from "./gallery.module.css";

function Gallery() {
  return (
      <div className={styles.container}>
        <div className={styles.box}>
          <img src='images\image-11.jpeg' alt='' />
        </div>
        <div className={styles.box}>
          <img src='images\image-1.webp' alt='' />
        </div>
        <div className={styles.box}>
          <img src='images\image-2.webp' alt='' />
        </div>
        <div className={styles.box}>
          <img src='images\image-3.webp' alt='' />
        </div>
        <div className={styles.box}>
          <img src='images\image-4.webp' alt='' />
        </div>
        <div className={styles.box}>
          <img src='images\image-5.webp' alt='' />
        </div>
        <div className={styles.box}>
          <img src='images\image-6.webp' alt='' />
        </div>
        <div className={styles.box}>
          <img src='images\image-7.webp' alt='' />
        </div>
        <div className={styles.box}>
          <img src='images\image-8.webp' alt='' />
        </div>
        <div className={styles.box}>
          <img src='images\image-9.webp' alt='' />
        </div>
        <div className={styles.box}>
          <img src='images\image-10.jpeg' alt='' />
        </div>
        <div className={`${styles.box} ${styles.last}`}>
          <img src='images/image.png' alt='' />
          <p>Add images</p>
        </div>
      </div>
  );
}

export default Gallery;
