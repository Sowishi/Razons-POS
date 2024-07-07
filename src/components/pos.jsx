import { useState } from "react";
import useGetCategory from "../hooks/useGetCategory";
import Category from "./category";
import PosHeader from "./posHeader";
import PosMenu from "./posMenu";

const POS = () => {
  const { categories, loading } = useGetCategory();
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <div className="container mx-auto">
      <PosHeader />
      <Category
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        categories={categories}
        loading={loading}
      />
      <PosMenu selectedCategory={selectedCategory} />
    </div>
  );
};

export default POS;
