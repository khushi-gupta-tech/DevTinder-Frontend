import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const { id: targetUserId } = useParams();
  const [messages, setMessages] = useState([]);

  const user = useSelector((store) => store.user);
  const userId = user?._id;

  useEffect(() => {
    const socket = createSocketConnection();
    socket.emit("joinChat", { userId, targetUserId });
  }, []);

  return (
    <div
      className="
        w-full 
        md:w-3/4 
        lg:w-1/2 
        mx-auto 
        flex flex-col 
        border border-gray-600 
        h-[80vh] 
        mt-5 
        rounded-xl 
        bg-gray-900
      "
    >
      <h1 className="text-2xl md:text-3xl font-bold text-center p-4 shadow-md text-white border-b border-gray-700">
        Chat
      </h1>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-5 text-white space-y-3">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center">No messages yet...</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="bg-gray-800 p-3 rounded-lg">
              <p>{msg}</p>
            </div>
          ))
        )}
      </div>

      {/* INPUT */}
      <div className="p-4 border-t border-gray-700 flex items-center gap-2 bg-gray-800">
        <input
          type="text"
          placeholder="Type your message..."
          className="
            flex-1 
            border 
            rounded-lg 
            border-gray-500 
            p-2
            bg-gray-700
            text-white
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500
          "
        />
        <button
          className="
            px-4 
            md:px-5 
            py-2 
            bg-blue-600 
            text-white 
            rounded-lg 
            hover:bg-blue-700 
            transition
          "
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
