import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const useAddMenu = () => {
  const [progress, setProgress] = useState(0);
  const menusRef = collection(db, "menus");

  const addMenu = (menu) => {
    if (menu.image) {
      const storageRef = ref(storage, `images/${menu.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, menu.image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addDoc(menusRef, { ...menu, image: downloadURL });
          });
        }
      );
    }
  };

  return { addMenu, progress };
};

export default useAddMenu;
