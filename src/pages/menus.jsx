import { Button, Label, Modal, TextInput } from "flowbite-react";
import Sidebar from "../components/sidebar";
import MenuCard from "../components/menuCard";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useAddCategory from "../hooks/useAddCategory";
import Category from "../components/category";
import useGetCategory from "../hooks/useGetCategory";
import useDeleteCategory from "../hooks/useDeleteCategory";
import useAddImage from "../hooks/useAddImage";
import useAddMenu from "../hooks/useAddMenu";
import useGetMenus from "../hooks/useGetMenus";

const Menus = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
  const [addMenuModal, setAddMenuModal] = useState(false);
  const [categoryName, setCategoryName] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [newMenu, setNewMenu] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const [image, setImage] = useState(null);

  const { addCategory } = useAddCategory();
  const { categories, loading } = useGetCategory();
  const { menus } = useGetMenus();
  const { deleteCategory } = useDeleteCategory();
  const { addMenu } = useAddMenu();

  const handleChangeText = (event) => {
    const output = { ...newMenu, [event.target.name]: event.target.value };
    setNewMenu(output);
  };

  const handleChangeImage = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="h-screen w-full" style={{ backgroundColor: "#FBFBFB" }}>
      {/* Add Category Modal */}
      <Modal
        show={categoryModal}
        size="md"
        onClose={() => setCategoryModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Add Category
            </h3>
            <TextInput
              required
              onChange={(event) => setCategoryName(event.target.value)}
              className="my-5"
              placeholder="Add Category Name"
              color={"failure"}
            />
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  setCategoryModal(false);
                  addCategory(categoryName);
                }}
              >
                Add it
              </Button>
              <Button color="gray" onClick={() => setCategoryModal(false)}>
                {"Cancel"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Delete Category Modal Confirmation */}
      <Modal
        show={deleteCategoryModal}
        size="md"
        onClose={() => setDeleteCategoryModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  deleteCategory(selectedCategory);
                  setDeleteCategoryModal(false);
                }}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button
                color="gray"
                onClick={() => setDeleteCategoryModal(false)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Add Menu Modal */}
      <Modal
        show={addMenuModal}
        size="lg"
        onClose={() => setAddMenuModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add Menu
            </h3>
            <div>
              <div className="mb-2 block">
                <Label value="Category" />
              </div>

              <select
                name="category"
                onChange={handleChangeText}
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a Category</option>
                {categories.map((category) => {
                  return <option value={category.name}>{category.name}</option>;
                })}
              </select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Title" />
              </div>

              <TextInput
                onChange={handleChangeText}
                placeholder="Menu Title"
                required
                name="title"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Decription" />
              </div>
              <TextInput
                onChange={handleChangeText}
                placeholder="Menu Description"
                required
                name="description"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Price" />
              </div>
              <TextInput
                onChange={handleChangeText}
                placeholder="Menu Price"
                required
                name="price"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Image" />
              </div>
              <TextInput
                onChange={handleChangeImage}
                type="file"
                placeholder="Menu Price"
                required
              />
            </div>

            <Button
              onClick={() => {
                addMenu({ ...newMenu, image: image });
                setAddMenuModal(false);
              }}
              className="w-full"
              color={"warning"}
            >
              Add Menu
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <div className="flex flex-row">
        <div class="basis-1/12 bg-green-800 shadow">
          <Sidebar />
        </div>
        <div
          class="basis-11/12 p-5"
          style={{
            backgroundColor: "white",
            height: "100vh",
            overflow: "scroll",
          }}
        >
          <div className="cotainer mx-auto">
            <div className="header flex justify-between">
              <h1 className="text-3xl font-bold ">Menus</h1>
              <div className="wrapper flex flex-row">
                <Button
                  color={"success"}
                  className="mx-3"
                  onClick={() => setAddMenuModal(true)}
                >
                  Add Menu
                </Button>
                <Button
                  color={"failure"}
                  onClick={() => setCategoryModal(true)}
                >
                  Add Category
                </Button>
              </div>
            </div>
            <div className="wrapper flex justify-start items-start">
              <Category
                setSelectedCategory={setSelectedCategory}
                setDeleteCategoryModal={setDeleteCategoryModal}
                admin={true}
                categories={categories}
                loading={loading}
              />
            </div>

            <div className="flex flex-row flex-wrap">
              {menus.map((menu) => {
                return (
                  <div key={menu.id} className="basis-3/12">
                    <MenuCard admin={true} menu={menu} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
