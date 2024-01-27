import { CgClose } from "react-icons/cg";
import Input from "./Input";
import { useState } from "react";

const Modal = ({ title, content, btnText, btnFunc }) => {
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });
  console.log(productInfo);
  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4">
        <div className="border-b py-3 flex items-center justify-between">
          <div className="text-2xl">{title}</div>
          <CgClose size={20} />
        </div>
        <Input
          type={"text"}
          placeholder={"Produkt hinzufügen"}
          name={"name"}
          id={"name"}
          onChange={(e) => onChangeFunc(e, "name")}
        />
        <Input
          type={"number"}
          placeholder={"Preis hinzufügen"}
          name={"price"}
          id={"price"}
          onChange={(e) => onChangeFunc(e, "price")}
        />
        <Input
          type={"file"}
          placeholder={"Bild hinzufügen"}
          name={"url"}
          id={"url"}
          onChange={(e) => onChangeFunc(e, "filurle")}
        />
      </div>
    </div>
  );
};

export default Modal;
