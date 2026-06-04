import {
  FaBars,
  FaBell,
  FaSearch,
  FaMicrophone
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";

const Header = () => {
  const [searchText,setsearchText] = useState("")
  const [suggestions,setsuggestions] = useState([])

  useEffect(()=>{
   const timer = setTimeout(()=>{
         if (searchText.trim()) {
      getSearchSuggestion();
    }
    },300)

    return ()=> clearTimeout(timer)

    
  },[searchText])

  const getSearchSuggestion = async()=>{
       let data = await fetch( `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchText}`)
       let json = await data.json() 
       console.log(json[1]);
       setsuggestions(json[1])
       
  }


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
        <div className="flex flex-1 relative">
  <input
    type="text"
    placeholder="Search"
    value={searchText}
    onChange={(e) => setsearchText(e.target.value)}
    className="w-full px-4 py-2 border rounded-l-full outline-none"
  />

  {suggestions.length > 0 && (
    <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-full z-50">
      {suggestions.map((item) => (
        <div 
          key={item}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
        >
        <FaSearch /> {item}
        </div>
      ))}
    </div>
  )}

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