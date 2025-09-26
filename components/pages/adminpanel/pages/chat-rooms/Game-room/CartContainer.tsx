import React, { SetStateAction } from "react";
import { ChatRoom } from "../../../../../../types/adminPanelTypes";
import CartOptions from "./CartOptions";
import RoomIcon from "./ChatCart/RoomIcon";
import RoomTitle from "./ChatCart/RoomTitle";
import RoomInfo from "./ChatCart/RoomInfo";
import Card from "../../../../../common/ui/Card";

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
  return (
    <div className="space-y-4">
      {paginatedRooms.map((room) => {
        return (
          <div
            key={room.id}
            className="hover:shadow-lg transition-all duration-200 border-l-4 rounded-xl"
            style={{
              borderLeftColor: room.status === "active" ? "#10b981" : "#6b7280",
            }}
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

                <CartOptions room={room} setShowRoomModal={setShowRoomModal} />
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
