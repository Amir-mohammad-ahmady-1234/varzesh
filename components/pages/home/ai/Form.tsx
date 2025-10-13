import React, { useEffect, useRef, useState } from "react";
import { MdSend } from "react-icons/md";
import { sendMessage } from "../../../../lib/actions/ai/SendMessage";
import { ChatsArrType } from "./ChatModal";

interface Props {
  setChatMessages: React.Dispatch<React.SetStateAction<ChatsArrType[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export default function Form({
  setChatMessages,
  setIsLoading,
  isLoading,
  messagesEndRef,
}: Props) {
  const [message, setMessage] = useState("");
  const messageRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    messageRef.current?.focus();
  }, [isLoading, messagesEndRef]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user" as const,
      message,
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const result = await sendMessage(message);

      const aiMessage = {
        id: crypto.randomUUID(),
        role: "ai" as const,
        message: result || "پاسخی دریافت نشد 😐",
      };

      setChatMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      setChatMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "ai",
          message: "خطا در ارتباط با سرور 😕",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center p-3 gap-2 border-t border-neutral-400 bg-tertiary-200"
    >
      <input
        type="text"
        placeholder="پیام خود را بنویسید..."
        className="flex-1 bg-neutral-100 text-bg-primary rounded-full px-4 py-2 focus:outline-none placeholder-neutral-700"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isLoading}
        ref={messageRef}
      />
      <button
        disabled={isLoading}
        type="submit"
        className="ml-2 bg-secondary-100 hover:bg-secondary-200 text-neutral-100 rounded-full p-2 transition-colors disabled:opacity-50"
      >
        <MdSend size={20} />
      </button>
    </form>
  );
}
