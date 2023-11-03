import { useState, useEffect } from "react";
import { projectStorage } from "../../firebase/config.js";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";

const UseStorage = (file, upDater) => {
    const [progress, setProgess] = useState('hello');
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    useEffect(() => {
        //reference
        const storageRef = ref(projectStorage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                let percentage = (snapshot.bytesTransferred  / snapshot.totalBytes) * 100;
                percentage = Math.ceil(percentage);
                console.log('Upload is ' + percentage + '% done');
            },
            (err) => {

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    upDater();
                  });
            }
        );
    }, [file]);

    return { progress, error, url };
};

export default UseStorage;
