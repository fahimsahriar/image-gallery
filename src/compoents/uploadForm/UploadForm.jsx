import React, { useState } from "react";
import styles from "./uploadForm.module.css";
import UploadProgess from "../uploadProgess/uploadProgess";

function UploadForm({ upDater }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("Add image");

  //validating the file format
  const types = ["image/png", "image/jpeg", "image/webp"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(false);
    } else {
      setFile(null);
      setError("Wrong file");
    }
  };

  return (
    <>
        {/* // <div className={styles.load}></div> */}
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
                <UploadProgess upDater={upDater} file={file} />
              )}
            </div>
          </label>
    </>
  );
}

export default UploadForm;
