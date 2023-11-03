import React from "react";
import styles from '../heading/heading.module.css';
import DeleteImage from '../delete/DeleteImage';

function Header({deleteList1}) {

  const handleDelete = ()=>{
    DeleteImage(deleteList1);
  }

  return (
    <div className={styles.heading}>
      <h3>{deleteList1.current.length == 0? 'Photo Cloud' : deleteList1.current.length }</h3>
      <p onClick={handleDelete}>Delete</p>
    </div>
  );
}

export default Header;
