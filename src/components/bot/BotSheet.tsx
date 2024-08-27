"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import MainHeading from "../reusables/MainHeading";
import Image from "next/image";
import Heading from "../reusables/Heading";

import './botSheetStyles.css';

// Define a type for chat messages
type Message = {
  type: "user" | "bot";
  text: string;
};

function BotSheet() {
  const [messages, setMessages] = useState<Message[]>([]); // State to store chat messages
  const [input, setInput] = useState<string>(""); // State to store input value

  const handleSend = async () => {
    if (input.trim() === "") return; // Prevent sending empty messages

    // Add user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: input },
    ]);

    try {
      // Send the message to the backend
      const response = await fetch(
        "https://chatbot-api-abid-hasan-rafis-projects.vercel.app/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await response.json();
      const reply = data.reply || "Sorry, I didn't understand that.";

      // Add bot's reply to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: reply },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: "An error occurred. Please try again." },
      ]);
    }

    setInput(""); // Clear the input field
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="bg-white text-blue-950 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-950 hover:text-white transition-colors duration-300">
          Start Chatting
        </button>
      </SheetTrigger>
      <SheetContent className=" bg-blue-300 bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 flex flex-col h-full">
        <SheetHeader>
          <MainHeading>Chat</MainHeading>
        </SheetHeader>
        {/* Chat Messages */}
        <div id="botSheetDiv" className="flex-1 overflow-y-auto mb-4 p-2 ">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 flex flex-col gap-4">
              <Image
                src="/chatBot.png"
                alt="your bot"
                width={300}
                height={300}
              />
              <Heading>{`Let's Chat!`}</Heading>
            </div>
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`message p-3 text-white rounded-md ${
                  message.type === "user" ? "bg-[#519ab4]" : "bg-blue-950"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        {/* Input and Send Button */}
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={handleSend}
            className="ml-2 p-2 bg-blue-500 text-white rounded"
          >
            Send
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default BotSheet;
