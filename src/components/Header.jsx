import { MdOutlinePostAdd } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-xl">React-Redux App</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select className="h-10 rounded-lg" name="" id="">
            <option value="asc">Aufsteigend</option>
            <option value="desc">Absteigend</option>
          </select>
        </div>
        <input
          className="h-10 rounded-lg px-4"
          type="text"
          placeholder="Ich suche ..."
        />
        <div className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <MdOutlinePostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
