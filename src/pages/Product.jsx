import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);

  const btnFunc = () => {}
  return (
    <div className="">
      <ProductCard />
      {modal && <Modal  title={"Produkt erstellen"} btnText={"Erstellen"} btnFunc={btnFunc} /> }
    </div>
  );
};

export default Product;
