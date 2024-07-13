import { Button, Spinner, Tooltip } from "flowbite-react";
import { FaTrash } from "react-icons/fa";

const Category = ({
  categories,
  admin,
  loading,
  setDeleteCategoryModal,
  setSelectedCategory,
  setSelectedDeleteCategory,
  selectedCategory,
}) => {
  return (
    <div
      className="wrapper my-5 mx-auto overflow-x-scroll overflow-y-hidden py-3 "
      style={{ width: 850 }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-1xl">Category</h1>
          <Button.Group className="p-3">
            <Button
              onClick={() => setSelectedCategory()}
              className="shadow"
              color={selectedCategory == undefined ? "success" : "green"}
            >
              All
            </Button>
            {categories.map((category) => {
              return (
                <Button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category);
                  }}
                  className="shadow"
                  color={
                    selectedCategory?.id == category.id ? "success" : "green"
                  }
                >
                  <h1 className="text-nowrap">{category.name}</h1>
                  {admin && (
                    <Tooltip content="Delete Category">
                      <FaTrash
                        className="ml-3"
                        color="red"
                        size={18}
                        onClick={() => {
                          setDeleteCategoryModal(true);
                          setSelectedDeleteCategory(category.id);
                        }}
                      />
                    </Tooltip>
                  )}
                </Button>
              );
            })}
          </Button.Group>
        </>
      )}
    </div>
  );
};

export default Category;
