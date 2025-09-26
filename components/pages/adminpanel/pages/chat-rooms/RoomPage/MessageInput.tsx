import React, { SetStateAction } from "react";
import Button from "../../../../../common/Button";
import { MdSend } from "react-icons/md";
import InputDesign from "../../../../../common/ui/Input";

interface Props {
  newMessage: string;
  setNewMessage: React.Dispatch<SetStateAction<string>>;
}

export default function MessageInput({ newMessage, setNewMessage }: Props) {
  return (
    <div className="p-4 border-t border-border">
      <div className="flex gap-2">
        <InputDesign
          type="text"
          placeholder="پیام ادمین..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1"
          onKeyPress={(e) => {
            if (e.key === "Enter" && newMessage.trim()) {
              // Handle send message
              setNewMessage("");
            }
          }}
        />
        <Button className="cursor-pointer" disabled={!newMessage.trim()}>
          <MdSend className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
