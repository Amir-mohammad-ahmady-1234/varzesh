import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { mockChatRooms } from "../../../mocks/mock-data";
import { Message } from "../../../app/admin/chat-rooms/[id]/page";
import { mockMessages } from "../../../mocks/admin/chatRoom/roomPageMoocks";

export function useRoomPage() {
  const params = useParams();

  const roomId = params.id as string;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [room, setRoom] = useState(mockChatRooms.find((r) => r.id === roomId));
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [selectedMessages, setSelectedMessages] = useState<Set<string>>(
    new Set()
  );

  const handleBulkDelete = () => {
    setMessages((prev) =>
      prev.map((msg) =>
        selectedMessages.has(msg.id) ? { ...msg, isDeleted: true } : msg
      )
    );
    setSelectedMessages(new Set());
  };

  useEffect(() => {
    // Simulate loading messages
    const timer = setTimeout(() => {
      setMessages(mockMessages);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setLoading, setMessages]);

  useEffect(() => {
    // Auto scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesEndRef]);

  // Simulate real-time messages
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        // 30% chance of new message
        const newMsg: Message = {
          id: Date.now().toString(),
          userId: `user${Math.floor(Math.random() * 10)}`,
          username: `کاربر ${Math.floor(Math.random() * 100)}`,
          content: `پیام جدید ${Date.now()}`,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, newMsg]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [setMessages]);

  return {
    messagesEndRef,
    room,
    setRoom,
    messages,
    setMessages,
    loading,
    setLoading,
    newMessage,
    setNewMessage,
    selectedMessages,
    setSelectedMessages,
    handleBulkDelete,
  };
}
