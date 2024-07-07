import { Button } from "flowbite-react";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Menus from "./pages/menus";
import Orders from "./pages/orders";

const App = () => {
  return (
    <Routes>
      <Route path="pos" element={<Home />} />
      <Route path="menus" element={<Menus />} />
      <Route path="orders" element={<Orders />} />
    </Routes>
  );
};

export default App;
