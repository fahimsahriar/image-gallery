import React from "react";
import styles from "./gallery.module.css";
import UploadForm from "../uploadForm/uploadForm";
import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { projectStorage } from "../../firebase/config";
import ImageBox from "../imageBox/ImageBox";
import DeleteImage from '../delete/DeleteImage';

function Gallery() {
  const [uploadProcess, setUploadProcess] = useState(0);
  const [imageList, setImageList] = useState([]);
  const [deleteList, setdeleteList] = useState([]);
  const [updateOfDelete, setupdateOfDelete] = useState(0);

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
  }, [uploadProcess, updateOfDelete]);

  //changing the state to re-render gallery image
  const galleryUpdater = () => {
    setUploadProcess(uploadProcess + 1);
  };
  //upload form's function
  const handleChange = (data) => {
    setdeleteList((prev) => [...prev, data.target.id]);
  };
  //delete button's function
  const handleDelete = ()=>{
    DeleteImage(deleteList, setdeleteList, setupdateOfDelete);
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
          return (<ImageBox url={url} handleChange={handleChange} />);
        })}
        <div className={styles.last}>
          <UploadForm galleryUpdater={galleryUpdater} />
        </div>
      </div>
    </>
  );
}

export default Gallery;
