import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

const useGetCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const collectionRef = collection(db, "/categories");
    setLoading(true);

    onSnapshot(collectionRef, (snapshot) => {
      const output = [];
      snapshot.docs.forEach((doc) => {
        output.push({ ...doc.data(), id: doc.id });
      });
      setCategories(output);
      setLoading(false);
    });
  }, []);

  return { categories, loading };
};

export default useGetCategory;
