import React from "react";
import PageHeader from "../../../../../../styles/ui/PageHeader";
import Badge from "../../../../../../styles/ui/Badge";
import { MdArrowBack, MdCircle } from "react-icons/md";
import Button from "../../../../../common/Button";
import { cn } from "../../../../../../lib/utils";
import { redirect } from "next/navigation";
import { ChatRoom } from "../../../../../../types/adminPanelTypes";

export default function PageTitle({ room }: { room: ChatRoom }) {
  return (
    <PageHeader
      title={room.name}
      description={room.description}
      action={
        <div className="flex items-center gap-2">
          <Badge variant={room.status === "active" ? "success" : "secondary"}>
            <MdCircle
              className={cn(
                "w-2 h-2 ml-1",
                room.status === "active" ? "text-green-500" : "text-gray-400"
              )}
            />
            {room.status === "active" ? "فعال" : "غیرفعال"}
          </Badge>
          <Button
            variant="outline"
            onClick={() => redirect("/admin/chat-rooms")}
            className="cursor-pointer"
          >
            <MdArrowBack className="w-4 h-4 ml-2" />
            بازگشت
          </Button>
        </div>
      }
    />
  );
}
