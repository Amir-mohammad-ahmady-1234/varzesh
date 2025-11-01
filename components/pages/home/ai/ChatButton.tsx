"use client";

import React, { useState } from "react";
import { MdSupportAgent } from "react-icons/md";
import ChatModal from "./ChatModal";

export default function ChatButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onClose() {
    setIsModalOpen(false);
  }

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[900]">
      <div className="relative">
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-60 animate-pulse"></div>

        <div
          onClick={() => setIsModalOpen((prev) => !prev)}
          className="relative rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center cursor-pointer shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-300"
        >
          <MdSupportAgent className="text-white text-3xl md:text-4xl animate-bounce hover:animate-none" />
        </div>
      </div>

      <div className="absolute -top-10 right-1/2 translate-x-1/2 bg-neutral-900 text-white text-sm px-3 py-1 rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
        پشتیبانی آنلاین
      </div>

      <ChatModal isOpen={isModalOpen} onClose={onClose} />
    </div>
  );
}
