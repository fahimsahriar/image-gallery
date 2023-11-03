import React, { useState } from "react";
import styles from "./uploadForm.module.css";
import UseStorage from '../hooks/UseStorage';

function UploadForm({ galleryUpdater }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("Add image");

  
  //validating the file format
  const types = ["image/png", "image/jpeg", "image/webp"];
  
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(false);
      // const {url, progess, error} = UseStorage(file, galleryUpdater);
    } else {
      setFile(null);
      setError("Wrong file");
    }
  };
  
  if(file)
  {
    UseStorage(file, galleryUpdater);
    setFile(null);
  }
  return (
    <>
          <input
            type='file'
            id='file-input'
            className={`${styles.fileinput} ${styles.box}`}
            name='file-input'
            onChange={changeHandler}
          />
          <label className={styles.fileinputlabel} htmlFor='file-input'>
            <img src='images/image.png' alt='' />
            <div>
              {error ? (
                error
              ) : (
                'Add image'
              )}
            </div>
          </label>
    </>
  );
}

export default UploadForm;
