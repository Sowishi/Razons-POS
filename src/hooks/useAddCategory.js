import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";

const useAddCategory = () => {
  const addCategory = async (categoryName) => {
    const collectionRef = collection(db, "categories");
    await addDoc(collectionRef, { name: categoryName });
  };

  return { addCategory };
};

export default useAddCategory;
