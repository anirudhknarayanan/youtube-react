import { useSelector } from "react-redux";
import {
  Home,
  PlaySquare,
  History,
  Clock,
  ThumbsUp,
  Flame,
  Music,
  Gamepad2,
  Trophy,
  Newspaper,
} from "lucide-react";

import { FaYoutube } from "react-icons/fa";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;


return (
  <div className="fixed left-0 top-16 w-64 h-[calc(100vh-64px)] bg-white shadow-lg p-4 overflow-y-auto">
    <ul className="space-y-3">
      <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
        <Home size={20} />
        Home
      </li>

      <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
        <PlaySquare size={20} />
        Shorts
      </li>

      <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
        <FaYoutube className="text-red-600" />
        Subscriptions
      </li>
      <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
  <Home size={20} />
  Home
</li>

<li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
  <PlaySquare size={20} />
  Shorts
</li>

<li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
  <FaYoutube className="text-red-600 text-xl" />
  Subscriptions
</li>
<h2 className="mt-4 mb-2 font-semibold text-gray-600">
  You
</h2>

<li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
  <History size={20} />
  History
</li>
    </ul>
  </div>
);}

export default SideBar;