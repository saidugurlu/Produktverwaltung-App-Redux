import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { modalFunc } from "../redux/modalSlice";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const onChangeFunc = (e, type) => {
    if (type === "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  let loc = location?.search.split("=")[1];

  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((dt) => dt.id === Number(loc)));
    }
  }, [loc]);

  console.log(data, "data");

  const btnFunc = () => {
    setProductInfo({
      name: "",
      price: "",
      url: "",
    });
    dispatch(createDataFunc({ ...productInfo, id: data?.length + 1 }));
    dispatch(modalFunc());
  };

  const btnUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    dispatch(modalFunc());
    navigate("/");
    setProductInfo({
      name: "",
      price: "",
      url: "",
    });
  };

  const contentModal = (
    <>
      <Input
        label="Name"
        value={productInfo.name || ""}
        type="text"
        placeholder="Produkt hinzufügen"
        name="name"
        id="name"
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        label="Preis"
        value={productInfo.price || ""}
        type="number"
        placeholder="Preis hinzufügen"
        name="price"
        id="price"
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        label="Bild"
        type="file"
        placeholder="Bild hinzufügen"
        name="url"
        id="url"
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button
        btnText={loc ? "Produkt bearbeiten" : "Produkt erstellen"}
        onClick={loc ? btnUpdateFunc : btnFunc}
      />
    </>
  );
  

  const filteredItems = data?.filter((dt) =>
    dt.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-10">
        {filteredItems?.map((dt, i) => (
          <ProductCard key={i} dt={dt} />
        ))}
      </div>
      {modal && (
        <Modal
          content={contentModal}
          title={loc ? "Produkt bearbeiten" : "Produkt erstellen"}
        />
      )}
    </div>
  );
};

export default Product;
