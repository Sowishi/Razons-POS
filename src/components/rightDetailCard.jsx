import { Button } from "flowbite-react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const RightDetailCard = ({ menu }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleIncrement = () => {
    const cartCopy = [...cart];
    cartCopy.map((cart) => {
      if (cart.id == menu.id) {
        cart.quantity = cart.quantity == null ? 2 : (cart.quantity += 1);
      }
      return cart;
    });

    setCart(cartCopy);
  };

  const handleDecrement = () => {
    const cartCopy = [...cart];
    cartCopy.map((cart) => {
      if (cart.id == menu.id) {
        cart.quantity = cart.quantity -= 1;
      }
      return cart;
    });

    setCart(cartCopy);
  };

  const handleDelete = () => {
    const cartCopy = [...cart];
    const output = cartCopy.filter((cart) => {
      if (cart.id !== menu.id) {
        return cart;
      }
    });

    setCart(output);
  };

  return (
    <div className="flex flex-row justify-start items-center my-3">
      <div className="basis-2/12 flex justify-start items-center">
        <img
          src={menu.image}
          alt=""
          className="object-cover rounded"
          style={{ width: 50, height: 50 }}
        />{" "}
      </div>
      <div className="basis-10/12 flex">
        <div className="basis-8/12 ">
          <div className="flex flex-col ml-3">
            <h1 className="text-sm">{menu.title}</h1>
            <h1 className="text-lg font-bold text-red-600">₱{menu.price}</h1>
          </div>
        </div>
        <div className="basis-4/12 flex justify-center flex-col items-start ">
          <div className="quantity flex justify-around items-center">
            <Button
              disabled={!menu.quantity || menu.quantity == 1}
              color={"success"}
              size={"xs"}
              onClick={handleDecrement}
            >
              -
            </Button>
            <p className="mx-1">x{menu.quantity == null ? 1 : menu.quantity}</p>
            <Button onClick={handleIncrement} color={"success"} size={"xs"}>
              +
            </Button>
          </div>
          <Button
            onClick={handleDelete}
            className="mt-2"
            color={"failure"}
            size={"xs"}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightDetailCard;
