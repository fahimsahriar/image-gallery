import React from "react";
import styles from "./gallery.module.css";
import UploadForm from "../uploadForm/uploadForm";
import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { projectStorage } from "../../firebase/config";
import ImageBox from "../imageBox/ImageBox";
import DeleteImage from '../delete/DeleteImage';

function Gallery() {
  const [imageList, setImageList] = useState([]);
  const [deleteList, setdeleteList] = useState([]);

  //creating reference of firebase storage
  const imageListRef = ref(projectStorage, "/");
  // getting all the image stored on firebase
  useEffect(() => {
    console.log('updating');
    setImageList([]);
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  //upload form's function
  const handleChange = (data) => {
    if (data.target.checked) {
      setdeleteList((prev) => [...prev, data.target.id]);
    } else {
      setdeleteList(current =>
        current.filter(prev => {
          // removeing the image which is marked as unselectd
          return prev !== data.target.id;
        }),
      );
    }
  };
  //delete button's function
  const handleDelete = ()=>{
    DeleteImage(deleteList, setImageList, setdeleteList);
  }

  return (
    <>
      <div className={styles.heading}>
        <h3>
          {
            deleteList.length == 0 ?
            'PhotoCloud' : `${deleteList.length} selected`
          }
        </h3>
        <p onClick={handleDelete}>Delete</p>
      </div>
      <div className={styles.container}>
        {imageList.map((url) => {
          return (<ImageBox key={url} url={url} handleChange={handleChange} />);
        })}
        <div className={styles.last}>
          <UploadForm setImageList={setImageList} />
        </div>
      </div>
    </>
  );
}

export default Gallery;
