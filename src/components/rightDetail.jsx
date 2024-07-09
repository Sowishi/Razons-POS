import { Button, Modal, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/cartContext";
import RightDetailCard from "./rightDetailCard";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useAddOrder from "../hooks/useAddOrder";
import { toast } from "react-toastify";

const RightDetail = () => {
  const { cart, setCart } = useContext(CartContext);
  const { addOrder } = useAddOrder();
  const [checkoutModal, setCheckoutModal] = useState();
  const [changeModal, setChangeModal] = useState();
  const [customerMoney, setCustomerMoney] = useState();

  let total = 0;
  cart.map((item) => {
    const quantity = item.quantity == null ? 1 : item.quantity;
    total += parseInt(item.price) * parseInt(quantity);
  });

  return (
    <div className="wrappper m-5">
      {/* Confirmation Checkout Modal */}
      <Modal show={checkoutModal} onClose={() => setCheckoutModal(false)}>
        <Modal.Header>Confirmation of Order</Modal.Header>
        <Modal.Body>
          {cart.map((item) => {
            return <RightDetailCard confirmation={true} menu={item} />;
          })}
        </Modal.Body>
        <Modal.Footer>
          <div className="flex flex-row w-full">
            <div className="basis-6/12 flex">
              <Button
                color={"success"}
                onClick={() => {
                  setChangeModal(true);
                }}
              >
                Confirm Order
              </Button>
              <Button
                color="gray"
                className="mx-3"
                onClick={() => setOpenModal(false)}
              >
                Decline
              </Button>
            </div>
            <div className="basis-6/12 flex items-center justify-center">
              <h1 className="font-bold text-lg">Total: ₱{total}</h1>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Change Modal */}
      <Modal
        show={changeModal}
        size="sm"
        onClose={() => setChangeModal(false)}
        popup
      >
        <Modal.Header className="p-3">Customer Change</Modal.Header>
        <Modal.Body>
          <h1 className="text-center my-3 text-lg">
            Total: <span className="font-bold">₱{total}</span>
          </h1>
          <h1 className="text-lg">Received Money</h1>
          <TextInput
            onChange={(event) => setCustomerMoney(event.target.value)}
            placeholder="Customer's Money"
          />
          {parseInt(customerMoney) >= parseInt(total) && (
            <h1 className="mt-3 text-lg">
              Change: ₱{parseInt(customerMoney) - parseInt(total)}
            </h1>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={
              parseInt(customerMoney) < parseInt(total) || customerMoney == ""
            }
            color="success"
            className="w-full"
            onClick={() => {
              addOrder({
                order: cart,
                total,
                customerMoney: parseInt(customerMoney),
                change: parseInt(customerMoney) - parseInt(total),
              });
              setChangeModal(false);
              setCheckoutModal(false);
              setCustomerMoney("");
              setCart([]);
              toast.success("Order Completed!");
            }}
          >
            Confirm Order
          </Button>
        </Modal.Footer>
      </Modal>

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
        <h1 className="text-lg">Total: ₱{total}</h1>
        {/* <h1 className="text-lg">Discounted: ₱100</h1> */}
      </div>
      <Button
        disabled={cart.length < 1}
        onClick={() => setCheckoutModal(true)}
        color={"warning"}
        className="w-full my-3"
      >
        Continue to Payment
      </Button>
    </div>
  );
};

export default RightDetail;
