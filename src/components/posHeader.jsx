import { TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";

const PosHeader = () => {
  return (
    <div className="flex flex-row">
      <div className="basis-6/12 items-center justify-start flex">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Welcome, Feg</h1>
          <p>Discover what you need easily</p>
        </div>
      </div>
      <div className="basis-6/12">
        <div className="flex flex-col">
          <h1>Product Search</h1>
          <div className="flex flex-row items-center justify-start">
            <TextInput
              className="w-full"
              color={"success"}
              placeholder="Search product here..."
            />
            <FaSearch color="white" className="ml-3" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosHeader;
