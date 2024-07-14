import { Accordion, Button, HR, Modal, Table } from "flowbite-react";
import moment from "moment";
import RightDetailCard from "./rightDetailCard";
import { useState } from "react";
import Invoice from "./invoice";

const CustomTable = ({ orders }) => {
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(false);

  return (
    <div className="overflow-x-auto">
      {/* Invoice Modal */}

      <Modal show={invoiceModal} onClose={() => setInvoiceModal(false)}>
        <Modal.Header>Razons By Glenn's Invoice</Modal.Header>
        <Modal.Body>
          <Invoice order={selectedOrder} />
        </Modal.Body>
      </Modal>

      <Table>
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell>Order Date</Table.HeadCell>
          <Table.HeadCell>Customer Money</Table.HeadCell>
          <Table.HeadCell>customer Change</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Orders</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {orders.map((order, index) => {
            const firebaseDate = new Date(
              order.createdAt.seconds * 1000 +
                order.createdAt.nanoseconds / 1000000
            );
            const orderDate = moment(firebaseDate).format("LLL");

            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {orderDate}
                </Table.Cell>
                <Table.Cell className="font-bold">
                  ₱{order.customerMoney}
                </Table.Cell>
                <Table.Cell className="font-bold">₱{order.change}</Table.Cell>
                <Table.Cell>
                  <span className="font-bold text-green-600">
                    ₱{order.total}
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Accordion collapseAll>
                    <Accordion.Panel>
                      <Accordion.Title>Orders</Accordion.Title>
                      <Accordion.Content>
                        {order.order.map((item) => {
                          return (
                            <RightDetailCard confirmation={true} menu={item} />
                          );
                        })}
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    color={"success"}
                    onClick={() => {
                      setInvoiceModal(true);
                      setSelectedOrder(order);
                    }}
                  >
                    View Invoice
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomTable;
