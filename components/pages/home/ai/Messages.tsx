import React from "react";
import { ChatsArrType } from "./ChatModal";

interface Props {
  chatMessages: ChatsArrType[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export default function Messages({
  chatMessages,
  isLoading,
  messagesEndRef,
}: Props) {
  return (
    <div className="flex flex-col gap-2 p-3 overflow-y-auto max-h-[400px]">
      {chatMessages.map((msg) => (
        <div
          key={msg.id}
          className={`max-w-[70%] px-3 py-2 rounded-lg break-words ${
            msg.role === "ai"
              ? "bg-neutral-100 text-bg-primary self-start"
              : "bg-primary-100 text-neutral-100 self-end ml-auto"
          }`}
        >
          {msg.message}
        </div>
      ))}
      {isLoading && (
        <div className="max-w-[70%] px-3 py-2 rounded-lg bg-neutral-100 text-bg-primary self-start">
          در حال تایپ...
        </div>
      )}
      <div ref={messagesEndRef}></div>
    </div>
  );
}
