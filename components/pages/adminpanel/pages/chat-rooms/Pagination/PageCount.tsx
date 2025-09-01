import React from "react";
import { ChatRoom } from "../../../../../../types/adminPanelTypes";

interface Props {
  currentPage: number;
  itemsPerPage: number;
  filteredRooms: ChatRoom[];
}

export default function PageCount({
  currentPage,
  itemsPerPage,
  filteredRooms,
}: Props) {
  return (
    <div className="text-sm text-gray-600 dark:text-gray-400">
      نمایش {((currentPage - 1) * itemsPerPage + 1).toLocaleString("fa-IR")} تا{" "}
      {Math.min(
        currentPage * itemsPerPage,
        filteredRooms.length
      ).toLocaleString("fa-IR")}{" "}
      از {filteredRooms.length.toLocaleString("fa-IR")} چت روم
    </div>
  );
}
