import React from "react";
import { FaThumbsUp, FaReply } from "react-icons/fa";

const Comment = ({ data }) => {
  const { user, text, likes, replies } = data;

  return (
    <div>
      {/* Comment */}
      <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-100">
        <img
          src={`https://ui-avatars.com/api/?name=${user}&background=random`}
          alt={user}
          className="w-10 h-10 rounded-full"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-sm">{user}</h3>

          <p className="text-sm text-gray-800 mt-1">
            {text}
          </p>

          <div className="flex items-center gap-5 mt-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <FaThumbsUp size={12} />
              <span>{likes}</span>
            </div>

            <button className="flex items-center gap-1 hover:text-black">
              <FaReply size={12} />
              Reply
            </button>
          </div>
        </div>
      </div>

      {/* Replies */}
      {replies?.length > 0 && (
        <div className="ml-12 border-l-2 border-gray-300 pl-4">
          {replies.map((reply) => (
            <Comment key={reply.id} data={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;