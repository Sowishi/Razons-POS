import { Button } from "flowbite-react";
import { FaShoppingCart } from "react-icons/fa";

const RightDetail = () => {
  return (
    <div className="wrappper m-5">
      <div className="flex flex-row items-center justify-start">
        <h1 className="text-2xl mb-0">Current Order</h1>

        <FaShoppingCart className="ml-3" size={"20"} />
      </div>
      <div className="orders mt-4 h-96 overflow-scroll">
        <div className="flex flex-row justify-start items-center my-3">
          <img
            src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
            alt=""
            className="object-cover rounded"
            style={{ width: 70, height: 70 }}
          />{" "}
          <div className="flex flex-col ml-3 w-full">
            <h1 className="text-lg font-bold">Sisig Overload</h1>
            <div className="flex flex-row justify-between items-center">
              <h1 className="basis-7/12 text-lg font-bold text-red-600">
                ₱100
              </h1>
              <div className="basis-5/12 flex flex-row justify-between">
                <Button color={"success"} size={"xs"}>
                  -
                </Button>
                <p>3</p>
                <Button color={"success"} size={"xs"}>
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center my-3">
          <img
            src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
            alt=""
            className="object-cover rounded"
            style={{ width: 70, height: 70 }}
          />{" "}
          <div className="flex flex-col ml-3 w-full">
            <h1 className="text-lg font-bold">Sisig Overload</h1>
            <div className="flex flex-row justify-between items-center">
              <h1 className="basis-7/12 text-lg font-bold text-red-600">
                ₱100
              </h1>
              <div className="basis-5/12 flex flex-row justify-between">
                <Button color={"success"} size={"xs"}>
                  -
                </Button>
                <p>3</p>
                <Button color={"success"} size={"xs"}>
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center my-3">
          <img
            src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
            alt=""
            className="object-cover rounded"
            style={{ width: 70, height: 70 }}
          />{" "}
          <div className="flex flex-col ml-3 w-full">
            <h1 className="text-lg font-bold">Sisig Overload</h1>
            <div className="flex flex-row justify-between items-center">
              <h1 className="basis-7/12 text-lg font-bold text-red-600">
                ₱100
              </h1>
              <div className="basis-5/12 flex flex-row justify-between">
                <Button color={"success"} size={"xs"}>
                  -
                </Button>
                <p>3</p>
                <Button color={"success"} size={"xs"}>
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center my-3">
          <img
            src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
            alt=""
            className="object-cover rounded"
            style={{ width: 70, height: 70 }}
          />{" "}
          <div className="flex flex-col ml-3 w-full">
            <h1 className="text-lg font-bold">Sisig Overload</h1>
            <div className="flex flex-row justify-between items-center">
              <h1 className="basis-7/12 text-lg font-bold text-red-600">
                ₱100
              </h1>
              <div className="basis-5/12 flex flex-row justify-between">
                <Button color={"success"} size={"xs"}>
                  -
                </Button>
                <p>3</p>
                <Button color={"success"} size={"xs"}>
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center my-3">
          <img
            src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
            alt=""
            className="object-cover rounded"
            style={{ width: 70, height: 70 }}
          />{" "}
          <div className="flex flex-col ml-3 w-full">
            <h1 className="text-lg font-bold">Sisig Overload</h1>
            <div className="flex flex-row justify-between items-center">
              <h1 className="basis-7/12 text-lg font-bold text-red-600">
                ₱100
              </h1>
              <div className="basis-5/12 flex flex-row justify-between">
                <Button color={"success"} size={"xs"}>
                  -
                </Button>
                <p>3</p>
                <Button color={"success"} size={"xs"}>
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="total mt-3">
        <h1 className="text-lg">Total: ₱100</h1>
        <h1 className="text-lg">Discounted: ₱100</h1>
      </div>
      <Button color={"warning"} className="w-full my-3">
        Continue to Payment
      </Button>
    </div>
  );
};

export default RightDetail;
