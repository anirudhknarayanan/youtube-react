import {
  FaBars,
  FaBell,
  FaSearch,
  FaMicrophone
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
    const dispatch = useDispatch()
    const manageTogglt =()=>{
        dispatch(toggleMenu())
    }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between px-5 py-3 shadow-sm">

      {/* Left */}
      <div className="flex items-center gap-5">
        
        <FaBars size={24} onClick={()=> manageTogglt()} />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
          alt="youtube"
          className="w-10"
        />
        <h2 className="text-2xl font-bold tracking-tight">YouTube</h2>
      </div>

      {/* Center */}
      <div className="flex items-center gap-3 w-[45%]">
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-l-full outline-none"
          />
          <button className="px-6 border rounded-r-full bg-gray-100">
            <FaSearch />
          </button>
        </div>

        <button className="p-3 rounded-full bg-gray-100">
          <FaMicrophone />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="px-4 py-2 bg-gray-100 rounded-full">
          + Create
        </button>

        <FaBell size={22} />

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>

    </header>
  );
};

export default Header;