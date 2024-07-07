import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

const useGetMenus = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const collectionRef = collection(db, "/menus");
    setLoading(true);

    onSnapshot(collectionRef, (snapshot) => {
      const output = [];
      snapshot.docs.forEach((doc) => {
        output.push({ ...doc.data(), id: doc.id });
      });
      setMenus(output);
      setLoading(false);
    });
  }, []);

  return { menus, loading };
};

export default useGetMenus;
