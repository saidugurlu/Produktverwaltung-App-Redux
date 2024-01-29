import { MdOutlinePostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-xl">React-Redux App</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select onChange={e => dispatch(sortingDataFunc(e.target.value))} className="h-10 rounded-lg px-2" name="" id="">
            <option value="asc">Aufsteigend</option>
            <option value="desc">Absteigend</option>
          </select>
        </div>
        <input
          className="h-10 rounded-lg px-4"
          type="text"
          placeholder="Ich suche ..."
        />
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdOutlinePostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
