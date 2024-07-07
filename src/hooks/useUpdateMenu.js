import { collection, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const useUpdateMenu = () => {
  const updateMenu = (menu) => {
    if (menu.image) {
      const storageRef = ref(storage, `images/${menu.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, menu.image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateDoc(menusRef, { image: downloadURL });
          });
        }
      );
    }

    const updateData = {};
    for (const key in menu) {
      if (menu[key] !== null && menu[key] !== "") {
        updateData[key] = menu[key];
      }
    }

    const menusRef = doc(db, "menus", menu.id);
    updateDoc(menusRef, updateData);
  };

  return { updateMenu };
};

export default useUpdateMenu;
