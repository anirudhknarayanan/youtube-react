import React from "react";

const VideoCard = ({ info }) => {
    
    
  const { snippet, statistics } = info;

  return (
    <div className="w-[360px] p-2 cursor-pointer hover:scale-[1.02] transition-all duration-200">
      {/* Thumbnail */}
      <img
        className="w-full rounded-2xl"
        src={snippet?.thumbnails?.maxres?.url || snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
      />

      {/* Content */}
      <div className="flex mt-3">
        {/* Channel Avatar */}
        <img
          className="w-10 h-10 rounded-full"
          src="https://yt3.googleusercontent.com/ytc/AIdro_mQ8Q=s88-c-k-c0x00ffffff-no-rj"
          alt="channel"
        />

        {/* Video Info */}
        <div className="ml-3 flex-1">
          <h3 className="font-semibold text-sm line-clamp-2">
            {snippet?.title}
          </h3>

          <p className="text-gray-600 text-sm mt-1">
            {snippet?.channelTitle}
          </p>

          <p className="text-gray-500 text-sm">
            {Number(statistics?.viewCount).toLocaleString()} views
          </p>
        </div>

        {/* More Icon */}
        <button className="text-xl px-2">⋮</button>
      </div>
    </div>
  );
};

export default VideoCard;