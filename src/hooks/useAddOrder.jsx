import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const useAddOrder = () => {
  const addOrder = (order) => {
    const orderRef = collection(db, "orders");
    addDoc(orderRef, { ...order, createdAt: serverTimestamp() });
  };
  return { addOrder };
};

export default useAddOrder;
