import useGetCategory from "../hooks/useGetCategory";
import Category from "./category";
import PosHeader from "./posHeader";
import PosMenu from "./posMenu";

const POS = () => {
  const { categories, loading } = useGetCategory();

  return (
    <div className="container mx-auto">
      <PosHeader />
      <Category categories={categories} loading={loading} />
      <PosMenu />
    </div>
  );
};

export default POS;
