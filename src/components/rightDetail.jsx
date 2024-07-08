import { Button } from "flowbite-react";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/cartContext";
import RightDetailCard from "./rightDetailCard";

const RightDetail = () => {
  const { cart } = useContext(CartContext);

  let total = 0;
  cart.map((item) => {
    total += parseInt(item.price);
  });

  return (
    <div className="wrappper m-5">
      <div className="flex flex-row items-center justify-start">
        <h1 className="text-2xl mb-0">Current Order</h1>

        <FaShoppingCart className="ml-3" size={"20"} />
      </div>
      <div className="orders mt-4 h-96 overflow-scroll">
        {cart.length <= 0 && (
          <h1 className="text-3xl text-center mt-5">Empty Cart</h1>
        )}
        {cart.map((item) => {
          return <RightDetailCard menu={item} />;
        })}
      </div>
      <div className="total mt-3">
        <h1 className="text-lg font-bold">Total: ₱{total}</h1>
      </div>
      <Button color={"warning"} className="w-full my-3">
        Continue to Payment
      </Button>
    </div>
  );
};

export default RightDetail;
