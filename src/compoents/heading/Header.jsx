import React from "react";
import styles from '../heading/heading.module.css';

function Header() {
  return (
    <div className={styles.heading}>
      <h3>Gallery</h3>
      <p>Delete files</p>
    </div>
  );
}

export default Header;
