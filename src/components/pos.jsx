import Category from "./category";
import PosHeader from "./posHeader";
import PosMenu from "./posMenu";

const POS = () => {
  return (
    <div className="container mx-auto">
      <PosHeader />
      <Category />
      <PosMenu />
    </div>
  );
};

export default POS;
