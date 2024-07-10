import { Button, Table } from "flowbite-react";
import logo from "../assets/razon.jpg";
import moment from "moment";
import { usePDF } from "react-to-pdf";

const Invoice = ({ order }) => {
  let firebaseDate;
  if (order) {
    firebaseDate = new Date(
      order.createdAt.seconds * 1000 + order.createdAt.nanoseconds / 1000000
    );
  }

  const orderDate = moment(firebaseDate).format("LLL");
  const { toPDF, targetRef } = usePDF({ filename: "razon-invoice.pdf" });

  return (
    <>
      <div className="container mx-auto" ref={targetRef}>
        <div className="header flex justify-between items-center">
          <img src={logo} alt="" style={{ width: 75, height: 75 }} />
          <h1>Order ID: {order.id}</h1>
        </div>
        <div className="content my-3">
          <div className="w-full mb-2">
            <h1 className="text-6xl font-bold">INVOICE</h1>
          </div>
          <h1>Date: {orderDate}</h1>
          <Table className="my-3">
            <Table.Head>
              <Table.HeadCell className="bg-green-500 text-white">
                Image
              </Table.HeadCell>
              <Table.HeadCell className="bg-green-500 text-white">
                Product Name
              </Table.HeadCell>
              <Table.HeadCell className="bg-green-500 text-white">
                Quantity
              </Table.HeadCell>
              <Table.HeadCell className="bg-green-500 text-white">
                Price
              </Table.HeadCell>
              <Table.HeadCell className="bg-green-500 text-white">
                Total
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {order?.order?.map((item) => {
                return (
                  <Table.Row
                    key={item.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <img
                        style={{ width: 50, height: 50, objectFit: "cover" }}
                        src={item.image}
                        alt=""
                      />
                    </Table.Cell>
                    <Table.Cell className="font-bold">{item.title}</Table.Cell>
                    <Table.Cell className="font-bold">
                      x{item.quantity == null ? 1 : item.quantity}
                    </Table.Cell>
                    <Table.Cell className="font-bold">₱{item.price}</Table.Cell>
                    <Table.Cell className="font-bold">
                      ₱
                      {parseInt(item.quantity == null ? 1 : item.quantity) *
                        parseInt(item.price)}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
          <div className="w-full flex flex-col justify-center items-end">
            <div
              className="line w-full my-2 bg-slate-400"
              style={{ height: "1px" }}
            ></div>
            <h1 className="text-lg mr-10">
              Total:{" "}
              <span className="text-green-500 font-bold">₱{order.total}</span>
            </h1>
            <div
              className="line w-full my-2 bg-slate-400"
              style={{ height: "1px" }}
            ></div>
          </div>
          <h1 className="text-lg mt-3">
            Payment Method:{" "}
            <span className="text-green-500 font-bold">Cash</span>
          </h1>

          <h1 className="text-lg mt-3">Thank you for choosing us!</h1>
          <h1 className="text-lg mt-3">
            Address: Razon's By Glenn Daet 4600 Daet, Philippines
          </h1>
          <h1 className="text-lg mt-3">Email: rbgdaet1108@gmail.com</h1>
          <h1 className="text-lg mt-3">Phone: 0956 934 4117</h1>
        </div>
      </div>
      <Button className="w-full" onClick={() => toPDF()} color={"warning"}>
        Download Invoice
      </Button>
    </>
  );
};

export default Invoice;
