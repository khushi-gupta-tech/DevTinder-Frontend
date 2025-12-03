import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../constants";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });

    const chatMessages = chat?.data?.messages.map((msg) => {
      return { firstName: msg?.senderId?.firstName, text: msg?.text };
    });
    setMessages(chatMessages);
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    socket.emit("joinChat", { userId, targetUserId });

    socket.on("messageReceived", ({ firstName, text }) => {
      setMessages((messages) => [...messages, { firstName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

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
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center italic">No messages yet...</p>
        ) : (
          messages.map((msg, index) => {
            const isMe = msg.isSender; // <-- Use your own condition

            return (
              <div
                key={index}
                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs md:max-w-sm lg:max-w-md p-3 rounded-2xl shadow 
              ${isMe ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-200"}`}
                >
                  <p className="text-xs text-gray-300 mb-1">{msg.firstName}</p>
                  <p className="text-sm leading-relaxed break-words">
                    {msg.text}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1 text-right">
                    {msg.time || ""}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* INPUT */}
      <div className="p-4 border-t border-gray-700 flex items-center gap-2 bg-gray-800">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
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
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
