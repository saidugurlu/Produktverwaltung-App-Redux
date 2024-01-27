import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);

  const buttonFunc = () => {};

  const contentModal = (
    <>
      <Input
        type="text"
        placeholder="Produkt hinzufügen"
        name="name"
        id="name"
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        type="number"
        placeholder="Preis hinzufügen"
        name="price"
        id="price"
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type="file"
        placeholder="Bild hinzufügen"
        name="url"
        id="url"
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button btnText={"Erstellen"} onClick={buttonFunc} />
    </>
  );

  return (
    <div className="">
      <ProductCard />
      {modal && <Modal content={contentModal} title="Produkt erstellen" />}
    </div>
  );
};

export default Product;
