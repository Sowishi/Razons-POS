import { Datepicker } from "flowbite-react";
import CustomTable from "../components/customTable";
import Sidebar from "../components/sidebar";
import useGetOrders from "../hooks/useGetOrders";
import { useState } from "react";
import moment from "moment";

const Orders = () => {
  const { orders } = useGetOrders();
  const [selectedDate, setSelectedDate] = useState();

  const filtered = orders.filter((order) => {
    const orderDate = new Date(
      order.createdAt.seconds * 1000 + order.createdAt.nanoseconds / 1000000
    );
    const customerDate = moment(orderDate).format("LL");

    const filteredDate = moment(selectedDate).format("LL");

    const equalDate = customerDate == filteredDate;

    if (equalDate) {
      return order;
    }
  });

  return (
    <div className="h-screen w-full" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="flex flex-row">
        <div class="basis-1/12 bg-green-800 shadow">
          <Sidebar />
        </div>
        <div class="basis-11/12 p-5 h-screen overflow-scroll">
          <div className="header">
            <h1 className="text-3xl font-bold m-5">Customer Orders</h1>
          </div>
          <div className="m-10">
            <h1 className="mb-1">Filter Date</h1>
            <Datepicker
              onSelectedDateChanged={(date) => setSelectedDate(date)}
            />
          </div>
          {filtered.length <= 0 ? (
            <h1 className="text-center text-3xl my-20">
              No order for this date 🥲
            </h1>
          ) : (
            <CustomTable orders={filtered} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
