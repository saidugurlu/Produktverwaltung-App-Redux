import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  
  console.log(modal, "modal");
  return (
    <div className="">
      <ProductCard />
    </div>
  );
};

export default Product;
