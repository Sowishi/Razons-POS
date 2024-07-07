import { Button, Card } from "flowbite-react";
import MenuCard from "./menuCard";
import useGetMenus from "../hooks/useGetMenus";

const PosMenu = () => {
  const { menus } = useGetMenus();
  return (
    <div className="flex flex-row flex-wrap">
      {menus.map((menu) => {
        return (
          <div key={menu.id} className="basis-4/12">
            <MenuCard admin={false} menu={menu} />
          </div>
        );
      })}
    </div>
  );
};

export default PosMenu;
