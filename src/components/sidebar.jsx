import { LuLogOut, LuMonitor, LuShoppingCart } from "react-icons/lu";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import logo from "../assets/razon.jpg";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="container  h-full flex justify-around items-center flex-col">
      <div className="wrapper h-full p-3">
        <img src={logo} alt="" className="object-cover rounded" />
      </div>
      <div className="wrapper text-white">
        <div>
          <Link
            className="flex items-center justify-center flex-col my-5"
            to={"/pos"}
          >
            <LuMonitor size={25} />
            <p className="text-sm">POS</p>
          </Link>
        </div>
        <div>
          <Link
            className="flex items-center justify-center flex-col my-5"
            to={"/menus"}
          >
            <MdOutlineRestaurantMenu size={25} />
            <p className="text-sm">Menu</p>
          </Link>
        </div>
        <div>
          <Link
            className="flex items-center justify-center flex-col my-5"
            to={"/orders"}
          >
            <LuShoppingCart size={25} /> <p className="text-sm">Orders</p>
          </Link>
        </div>
        <div className="flex items-center justify-center flex-col my-5">
          <LuLogOut size={25} />
          <p className="text-sm">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
