import React from "react";
import styles from "./ImageBox.module.css";

function ImageBox({ url, handleChange }) {
  return (
    <div className={styles.box}>
      <input
        className={styles.tick}
        type='checkbox'
        name=''
        id={url}
        onChange={(url) => {
          handleChange(url);
        }}
        key={`${url} {'0'}`}
      />
      <div className={styles.innerBox}>
        <label htmlFor='url' key={`${url} {'1'}`}>
          <div key={`${url} {'2'}`}>
            <img src={url} alt='' />
          </div>
        </label>
      </div>
    </div>
  );
}

export default ImageBox;
