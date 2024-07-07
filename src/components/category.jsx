import { Button } from "flowbite-react";

const Category = () => {
  return (
    <div
      className="wrapper my-5 mx-auto overflow-scroll"
      style={{ width: 850 }}
    >
      <h1 className="text-1xl">Category</h1>
      <Button.Group className="p-3">
        <Button className="shadow" color="green">
          Profile
        </Button>
        <Button className="shadow" color="failure">
          Profile
        </Button>
        <Button className="shadow" color="green">
          Profile
        </Button>{" "}
        <Button className="shadow" color="green">
          Profile
        </Button>{" "}
        <Button className="shadow" color="green">
          Profile
        </Button>{" "}
        <Button className="shadow" color="green">
          Profile
        </Button>{" "}
        <Button className="shadow" color="green">
          Profile
        </Button>
      </Button.Group>
    </div>
  );
};

export default Category;
