import { Button } from "flowbite-react";
import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/cartContext";

const MenuCard = ({
  menu,
  admin,
  setDeleteMenuModal,
  setSelectedMenu,
  setEditMenuModal,
}) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="card bg-white p-5 shadow">
      <img src={menu.image} alt="" className="w-full h-52 object-cover" />
      <div className="wrapper">
        <h1 className="text-2xl my-3">{menu.title}</h1>
        <p className="text-sm text-gray-500">{menu.description}</p>
        <p className="text-sm text-gray-500">Category: {menu.category}</p>

        <h1 className="text-2xl my-3 font-bold text-red-600">₱{menu.price}</h1>
      </div>
      {!admin && (
        <Button
          className="w-full bg-green-900"
          onClick={() => {
            setCart([...cart, menu]);
          }}
        >
          Add to Cart
        </Button>
      )}
      {admin && (
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              setDeleteMenuModal(true);
              setSelectedMenu(menu);
            }}
            type="button"
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Delete
            <FaTrash className="ml-3" />
          </button>
          <button
            onClick={() => {
              setEditMenuModal(true);
              setSelectedMenu(menu);
            }}
            type="button"
            class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit
            <FaEdit className="ml-3" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
