import { Button, Card, Spinner } from "flowbite-react";
import MenuCard from "./menuCard";
import useGetMenus from "../hooks/useGetMenus";

const PosMenu = ({ selectedCategory }) => {
  const { menus, loading } = useGetMenus();

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
      {loading && (
        <>
          <div className="wrapper w-full h-52 flex justify-center items-center ">
            <Spinner aria-label="Extra large spinner example" size="xl" />
          </div>
        </>
      )}
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
