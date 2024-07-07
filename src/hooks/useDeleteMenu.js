import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const useDeleteMenu = () => {
  const deleteMenu = (id) => {
    const docRef = doc(db, "menus", id);
    deleteDoc(docRef);
  };

  return { deleteMenu };
};

export default useDeleteMenu;
