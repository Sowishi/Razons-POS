import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const useDeleteCategory = () => {
  const deleteCategory = (id) => {
    const collectionRef = doc(db, "categories", id);
    deleteDoc(collectionRef);
  };

  return { deleteCategory };
};

export default useDeleteCategory;
