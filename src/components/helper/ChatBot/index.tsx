import { useState } from "react";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-white rounded-full p-3 shadow-lg"
        >
          {isOpen ? "Close Chat" : "Chat with Us"}
        </button>
  
        {isOpen && (
          <div className="bg-white shadow-lg rounded-lg p-4 w-80 h-96 overflow-y-auto z-auto">
            <iframe
              src="YOUR_CHATBOT_BACKEND_URL"
              className="w-full h-full border-none"
              title="Chatbot"
            ></iframe>
          </div>
        )}
      </div>
    );
  };
  
  export default ChatBot;
  