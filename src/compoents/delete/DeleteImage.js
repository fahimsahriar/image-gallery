import React from "react";
import { getStorage, ref, deleteObject } from "firebase/storage";

const DeleteImage = (deleteList, setdeleteList, setupdateOfDelete) => {
  const storage = getStorage();

  deleteList.forEach((element) => {
    // Create a reference to the file to delete
    const desertRef1 = ref(storage, element);

    console.log(desertRef1.name);
    const desertRef = ref(storage, desertRef1.name);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        console.log("deleted!!");
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log("error of deleting file");
      });
  });
  setdeleteList([]);
  setupdateOfDelete((prev)=>prev+1);
};

export default DeleteImage;
