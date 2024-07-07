import { Button } from "flowbite-react";

const MenuCard = ({ menu, admin }) => {
  return (
    <div className="card bg-white p-5 shadow">
      <img src={menu.image} alt="" className="w-full h-52 object-cover" />
      <div className="wrapper">
        <h1 className="text-2xl my-3">{menu.title}</h1>
        <p className="text-sm text-gray-500">{menu.description}</p>
        <h1 className="text-2xl my-3 font-bold text-red-600">{menu.price}</h1>
      </div>
      {!admin && <Button className="w-full bg-green-900">Add to Cart</Button>}
    </div>
  );
};

export default MenuCard;
