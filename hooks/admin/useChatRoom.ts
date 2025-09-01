import { useState } from "react";
import { mockChatRooms } from "../../mocks/mock-data";

export function useChatRoom() {
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [isLiveMode, setIsLiveMode] = useState(false);
  const itemsPerPage = 12;

  const filteredRooms = mockChatRooms.filter((room) => {
    const matchesSearch =
      room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.description?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRooms = filteredRooms.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const stats = {
    total: mockChatRooms.length,
    active: mockChatRooms.filter((r) => r.status === "active").length,
    totalParticipants: mockChatRooms.reduce(
      (sum, r) => sum + r.participantCount,
      0
    ),
    totalMessages: mockChatRooms.reduce((sum, r) => sum + r.messageCount, 0),
  };

  return {
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    showRoomModal,
    setShowRoomModal,
    isLiveMode,
    setIsLiveMode,
    filteredRooms,
    totalPages,
    startIndex,
    paginatedRooms,
    stats,
    itemsPerPage,
  };
}
