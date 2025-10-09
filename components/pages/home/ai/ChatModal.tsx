"use client";
import React, { useRef, useState } from "react";
import Header from "./Header";
import Messages from "./Messages";
import Form from "./Form";

export interface ChatsArrType {
  id: string;
  message: string;
  role: "user" | "ai";
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [chatMessages, setChatMessages] = useState<ChatsArrType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end justify-end bg-black/40 p-2 md:p-4">
      <div className="flex flex-col w-full max-w-[360px] md:max-w-[400px] bg-bg-primary rounded-t-xl md:rounded-xl shadow-2xl">
        <Header onClose={onClose} />

        <Messages
          chatMessages={chatMessages}
          isLoading={isLoading}
          messagesEndRef={messagesEndRef}
        />

        <Form
          setChatMessages={setChatMessages}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          messagesEndRef={messagesEndRef}
        />
      </div>
    </div>
  );
}
