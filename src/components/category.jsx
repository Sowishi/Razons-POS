import { Button, Tooltip } from "flowbite-react";
import { FaTrash } from "react-icons/fa";

const Category = ({
  categories,
  admin,
  loading,
  setDeleteCategoryModal,
  setSelectedCategory,
}) => {
  return (
    <div
      className="wrapper my-5 mx-auto overflow-scroll py-3"
      style={{ width: 850 }}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="text-1xl">Category</h1>
          <Button.Group className="p-3">
            {categories.map((category) => {
              return (
                <Button key={category.id} className="shadow" color="green">
                  {category.name}
                  {admin && (
                    <Tooltip content="Delete Category">
                      <FaTrash
                        className="ml-3"
                        color="red"
                        size={18}
                        onClick={() => {
                          setDeleteCategoryModal(true);
                          setSelectedCategory(category.id);
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
