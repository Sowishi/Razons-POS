import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

const useGetOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const collectionRef = collection(db, "/orders");
    setLoading(true);

    onSnapshot(collectionRef, (snapshot) => {
      const output = [];
      snapshot.docs.forEach((doc) => {
        output.push({ ...doc.data(), id: doc.id });
      });
      setOrders(output);
      setLoading(false);
    });
  }, []);

  return { orders, loading };
};

export default useGetOrders;
