import React, { SetStateAction } from "react";
import Button from "../../../../../common/Button";
import { MdMoreVert, MdSettings, MdVisibility } from "react-icons/md";
import { ChatRoom } from "../../../../../../types/adminPanelTypes";
import { redirect } from "next/navigation";

interface Props {
  room: ChatRoom;
  setShowRoomModal: React.Dispatch<SetStateAction<boolean>>;
}

export default function CartOptions({ room, setShowRoomModal }: Props) {
  const handleRoomClick = (roomId: string) => {
    redirect(`/admin/chat-rooms/${roomId}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          handleRoomClick(room.id);
        }}
        className="cursor-pointer"
      >
        <MdVisibility className="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          // setSelectedRoom(room.id); // Removed
          setShowRoomModal(true);
        }}
        className="cursor-pointer"
      >
        <MdSettings className="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          // Handle more options
        }}
        className="cursor-pointer"
      >
        <MdMoreVert className="w-4 h-4" />
      </Button>
    </div>
  );
}
