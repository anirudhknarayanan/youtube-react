import Button from "./Button";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const list = [
  "All", "Gaming", "Songs", "Live", "Soccer",
  "Cricket", "Cooking", "News", "Music",
  "Podcasts", "Movies", "Sports", "Technology",
  "Programming", "React", "NodeJS"
];

const ButoonContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed top-16 right-0 z-40 bg-white shadow-sm transition-all duration-300 ${
        isMenuOpen ? "left-64" : "left-0"
      }`}
    >
      <div className="relative flex items-center">
        
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white rounded-full shadow p-2"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Buttons */}
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden whitespace-nowrap px-12 py-2 gap-2"
        >
          {list.map((item, index) => (
            <Button key={index} name={item} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white rounded-full shadow p-2"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ButoonContainer;