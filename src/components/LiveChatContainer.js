import React, { useEffect, useRef, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChatContainer = () => {
    const [liveMsg,setliveMsg] = useState("")
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    const i = setInterval(() => {
      //api calling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        }),
      );
    }, 1500);

    return () => clearInterval(i);
  }, [dispatch]);


  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);


  return (
    <div className="border rounded-lg p-3 h-[400px] flex flex-col">
      <h2 className="font-bold text-lg mb-2">Live Chat</h2>

      <div ref={chatContainerRef} className="flex-1 overflow-y-auto">
        {chatMessages.map((c, i) => (
          <LiveChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form className="mt-2 flex" onSubmit={(e)=>{
        e.preventDefault()
         dispatch(addMessage({
            name : "Anirudh kn",
            message : liveMsg
         }))
         setliveMsg("")
      }}>
        <input
        value={liveMsg}
          type="text"
          placeholder="Chat..."
          className="border p-2 flex-1 rounded-l-lg"
          onChange={(e)=>setliveMsg(e.target.value)}
          
        />

        <button className="bg-blue-500 text-white px-4 rounded-r-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChatContainer;
