import React from "react";
import { getStorage, ref, deleteObject } from "firebase/storage";

const DeleteImage = (file)=> {
  const storage = getStorage();

  let fileArray = file.current;
//   console.log(fileArray);

  fileArray.forEach(element => {
    // Create a reference to the file to delete
    const desertRef1 = ref(storage, element);
  
    console.log(desertRef1.name);
    const desertRef = ref(storage, desertRef1.name);
  
    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        console.log("deleted!!");
        file.current = [];
      })
      .catch((error) => {
          // Uh-oh, an error occurred!
          console.log("the erre");
        
      });
  });

}

export default DeleteImage;
