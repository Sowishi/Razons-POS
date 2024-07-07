import { LuLogOut, LuMonitor, LuShoppingCart } from "react-icons/lu";
import logo from "../assets/razon.jpg";
const Sidebar = () => {
  return (
    <div className="container  h-full flex justify-around items-center flex-col">
      <div className="wrapper h-full p-3">
        <img src={logo} alt="" className="object-cover rounded" />
      </div>
      <div className="wrapper text-white">
        <div className="flex items-center justify-center flex-col my-5">
          <LuMonitor size={25} />
          <p className="text-sm">POS</p>
        </div>
        <div className="flex items-center justify-center flex-col my-5">
          <LuShoppingCart size={25} /> <p className="text-sm">Orders</p>
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
