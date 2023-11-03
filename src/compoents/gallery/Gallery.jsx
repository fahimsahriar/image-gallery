import React from "react";
import styles from "./gallery.module.css";
import UploadForm from "../uploadForm/uploadForm";
import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { projectStorage } from "../../firebase/config";

function Gallery({deleteList1}) {
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(projectStorage, "/");
  const [uploadProcess, setuUploadProcess] = useState(0);
  const [deleteList, setdeleteList] = useState([]);

  useEffect(() => {
    setImageList([]);
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, [uploadProcess, deleteList1.current]);

  const upDater = () => {
    setuUploadProcess(uploadProcess + 1);
  };

  const handleChange = (data) => { 
    setdeleteList( (prev)=>[...prev, data.target.id]);
    // setDeletecount(deleteList.length);   
  };
  deleteList1.current = deleteList;

  return (
    <div className={styles.container}>
      {imageList.map((url) => {
        return (
          <div className={styles.box}>
            <input className={styles.tick}type='checkbox' name='' id={url} onChange={(url)=>{handleChange(url)}} key={`${url} {'0'}`} />
            <label htmlFor='url' key={`${url} {'1'}`}>
              <div key={`${url} {'2'}`}>
                <img src={url} alt='' />
              </div>
            </label>
          </div>
        );
      })}
      <div className={styles.last}>
        <UploadForm upDater={upDater} />
      </div>
      {/* <Delete /> */}
    </div>
  );
}

export default Gallery;
