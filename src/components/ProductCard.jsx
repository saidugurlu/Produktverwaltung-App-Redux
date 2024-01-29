import { useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img src={dt?.url} className="w-full h-full rounded-md" />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2">
        <div className="text-lg font-semibold">{dt?.name}</div>
        <div>{dt?.price}€</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute right-0.5 bottom-0.5"
      >
        <MdOutlineEditNote color={"white"} size={20} cursor={"pointer"} />
      </div>
      {openEdit && (
        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-800 opacity-70 flex flex-col justify-center items-center">
          <div className="text-white text-l shadow-md">Löschen</div>

          <div className="text-white text-l shadow-md mt-2">
            Bearbeiten
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
