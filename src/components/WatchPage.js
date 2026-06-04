import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import Comments from "./Comments";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const videoId = params.get("v");

  return (
    <div className="flex mt-20 px-6 gap-6">
      {/* Main Content */}
      <div className="flex-1">
        {/* Video */}
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mt-4">
          Building a YouTube Clone with React
        </h1>

        {/* Channel + Actions */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/50"
              alt="channel"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h2 className="font-semibold">Code With React</h2>
              <p className="text-sm text-gray-500">
                100K subscribers
              </p>
            </div>

            <button className="bg-black text-white px-4 py-2 rounded-full">
              Subscribe
            </button>
          </div>

          <div className="flex gap-3">
            <button className="bg-gray-100 px-4 py-2 rounded-full">
              👍 Like
            </button>

            <button className="bg-gray-100 px-4 py-2 rounded-full">
              ↗ Share
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-100 p-4 rounded-xl mt-4">
          <p>
            Learn how to build a YouTube clone using React,
            Redux Toolkit, Tailwind CSS, and YouTube APIs.
          </p>
        </div>

        {/* Comments */}
        <Comments/>
       
      </div>

      {/* Sidebar Recommendations */}
      <div className="w-96 hidden lg:block">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="flex gap-3 mb-4 cursor-pointer"
          >
            <img
              src={`https://picsum.photos/200/120?random=${item}`}
              alt=""
              className="rounded-lg"
            />

            <div>
              <h3 className="font-medium text-sm">
                React Tutorial Part {item}
              </h3>
              <p className="text-xs text-gray-500">
                Code With React
              </p>
              <p className="text-xs text-gray-500">
                50K views
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
