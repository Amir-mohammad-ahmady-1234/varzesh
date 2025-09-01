import React, { SetStateAction } from "react";
import Card from "../../../../../../styles/ui/Card";
import { ChatRoom } from "../../../../../../types/adminPanelTypes";
import { redirect } from "next/navigation";
import CartOptions from "./CartOptions";
import RoomIcon from "./ChatCart/RoomIcon";
import RoomTitle from "./ChatCart/RoomTitle";
import RoomInfo from "./ChatCart/RoomInfo";

interface Props {
  paginatedRooms: ChatRoom[];
  isLiveMode: boolean;
  setShowRoomModal: React.Dispatch<SetStateAction<boolean>>;
}

export default function CartContainer({
  paginatedRooms,
  isLiveMode,
  setShowRoomModal,
}: Props) {
  const handleRoomClick = (roomId: string) => {
    redirect(`/admin/chat-rooms/${roomId}`);
  };

  return (
    <div className="space-y-4">
      {paginatedRooms.map((room) => {
        return (
          <div
            key={room.id}
            className="hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 rounded-xl"
            style={{
              borderLeftColor: room.status === "active" ? "#10b981" : "#6b7280",
            }}
            onClick={() => handleRoomClick(room.id)}
          >
            <Card>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center gap-3">
                    <RoomIcon room={room} isLiveMode={isLiveMode} />
                    <div>
                      <RoomTitle room={room} />
                      <RoomInfo room={room} />
                    </div>
                  </div>
                </div>

                <CartOptions
                  handleRoomClick={handleRoomClick}
                  room={room}
                  setShowRoomModal={setShowRoomModal}
                />
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
