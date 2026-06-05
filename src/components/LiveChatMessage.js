import React from 'react'

const LiveChatMessage = ({name,message}) => {
  return (
   <div  className="flex items-center gap-2 py-2">
                <img
                  src={`https://i.pravatar.cc/30?img=${Math.floor(Math.random() * 70)}`}
                  alt="user"
                  className="rounded-full"
                />

                <span className="font-semibold text-sm">{name}</span>

                <span className="text-sm">{message}</span>
              </div>
  )
}

export default LiveChatMessage
