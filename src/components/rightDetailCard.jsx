import { Button, Tooltip } from "flowbite-react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FaTrash } from "react-icons/fa";

const RightDetailCard = ({ menu, confirmation }) => {
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
    <div className="flex flex-row  justify-start items-center my-3">
      <div className="basis-3/12 flex justify-start items-center mx-3">
        {confirmation && (
          <p className="mr-2">x{menu.quantity == null ? 1 : menu.quantity}</p>
        )}
        <div className="img-wrapper relative">
          <img
            src={menu.image}
            alt=""
            className="object-cover rounded"
            style={{ width: 50, height: 50 }}
          />{" "}
          <FaTrash
            onClick={handleDelete}
            color="#A20000"
            style={{
              position: "absolute",
              top: 0,
              right: -15,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <div className="basis-9/12 flex flex-col ">
        <div className="flex flex-col ml-3 ">
          <div
            className="title-wrapper  overflow-hidden"
            style={{ width: !confirmation ? 140 : "100%" }}
          >
            <h1 className="text-sm text-nowrap font-bold text-gray-700">
              {menu.title}
            </h1>
          </div>

          <h1 className="text-lg font-bold text-red-600">₱{menu.price}</h1>
        </div>
        {!confirmation && (
          <div>
            <div className="quantity flex justify-around items-center">
              <Button
                disabled={!menu.quantity || menu.quantity == 1}
                color={"success"}
                size={"xs"}
                onClick={handleDecrement}
              >
                -
              </Button>
              <p className="mx-1">
                x{menu.quantity == null ? 1 : menu.quantity}
              </p>
              <Button onClick={handleIncrement} color={"success"} size={"xs"}>
                +
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightDetailCard;
