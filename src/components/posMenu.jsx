import { Button, Card } from "flowbite-react";
import MenuCard from "./menuCard";
import useGetMenus from "../hooks/useGetMenus";

const PosMenu = ({ selectedCategory }) => {
  const { menus } = useGetMenus();

  const menusCopy = [...menus];
  const filtered =
    selectedCategory == undefined
      ? menus
      : menusCopy.filter((menu) => {
          if (menu.category == selectedCategory?.name) {
            return menu;
          }
        });
  return (
    <div className="flex flex-row flex-wrap">
      {filtered.map((menu) => {
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
