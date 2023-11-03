import { projectStorage } from "../../firebase/config.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const UseStorage = (file, galleryUpdater) => {
  //reference
  const storageRef = ref(projectStorage, file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      percentage = Math.ceil(percentage);
      console.log("Upload is " + percentage + "% done");
    },
    (err) => {},
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        galleryUpdater();
      });
    }
  );
};

export default UseStorage;
