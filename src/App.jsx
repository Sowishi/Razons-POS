import { Button } from "flowbite-react";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Menus from "./pages/menus";
import Orders from "./pages/orders";
import { CartContextProvider } from "./context/cartContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="pos" element={<Home />} />
        <Route path="menus" element={<Menus />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
      <ToastContainer />
    </CartContextProvider>
  );
};

export default App;
