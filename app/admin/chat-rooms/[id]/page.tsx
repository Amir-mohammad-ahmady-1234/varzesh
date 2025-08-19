"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import MainLayout from "../../../../components/admin/layout/MainLayout";
import PageHeader from "../../../../components/admin/ui/PageHeader";
import Card from "../../../../components/admin/ui/Card";
import Button from "../../../../components/admin/ui/Button";
import Badge from "../../../../components/admin/ui/Badge";
import Input from "../../../../components/admin/ui/Input";
import LoadingSpinner from "../../../../components/admin/ui/LoadingSpinner";
import { mockChatRooms } from "../../../../mocks/mock-data";
import {
  MdArrowBack,
  MdPeople,
  MdMessage,
  MdBlock,
  MdDelete,
  MdReport,
  MdMoreVert,
  MdSend,
  MdCircle,
} from "react-icons/md";
import { cn } from "../../../../lib/utils";

interface Message {
  id: string;
  userId: string;
  username: string;
  avatar?: string;
  content: string;
  timestamp: string;
  isReported?: boolean;
  isDeleted?: boolean;
}

export default function ChatRoomDetailPage() {
  const params = useParams();
  const router = useRouter();
  const roomId = params.id as string;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [room, setRoom] = useState(mockChatRooms.find((r) => r.id === roomId));
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [selectedMessages, setSelectedMessages] = useState<Set<string>>(
    new Set()
  );

  // Mock messages data
  const mockMessages: Message[] = [
    {
      id: "1",
      userId: "user1",
      username: "علی احمدی",
      content: "سلام بچه‌ها، بازی شروع شد!",
      timestamp: "2024-01-20T20:00:00Z",
    },
    {
      id: "2",
      userId: "user2",
      username: "محمد رضایی",
      content: "پرسپولیس حتماً برنده میشه",
      timestamp: "2024-01-20T20:01:00Z",
    },
    {
      id: "3",
      userId: "user3",
      username: "فاطمه محمدی",
      content: "استقلال بهتر بازی می‌کنه",
      timestamp: "2024-01-20T20:02:00Z",
      isReported: true,
    },
    {
      id: "4",
      userId: "user4",
      username: "حسن کریمی",
      content: "گل زدن!!! 🎉",
      timestamp: "2024-01-20T20:15:00Z",
    },
    {
      id: "5",
      userId: "user5",
      username: "مریم احمدی",
      content: "چه بازی جذابی!",
      timestamp: "2024-01-20T20:16:00Z",
    },
  ];

  useEffect(() => {
    // Simulate loading messages
    const timer = setTimeout(() => {
      setMessages(mockMessages);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
  }, []);

  const handleDeleteMessage = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isDeleted: true } : msg
      )
    );
  };

  const handleReportMessage = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isReported: true } : msg
      )
    );
  };

  const handleBulkDelete = () => {
    setMessages((prev) =>
      prev.map((msg) =>
        selectedMessages.has(msg.id) ? { ...msg, isDeleted: true } : msg
      )
    );
    setSelectedMessages(new Set());
  };

  const toggleMessageSelection = (messageId: string) => {
    const newSelected = new Set(selectedMessages);
    if (newSelected.has(messageId)) {
      newSelected.delete(messageId);
    } else {
      newSelected.add(messageId);
    }
    setSelectedMessages(newSelected);
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!room) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              چت روم یافت نشد
            </h2>
            <Button onClick={() => router.back()} className="cursor-pointer">
              بازگشت
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
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
              onClick={() => router.back()}
              className="cursor-pointer"
            >
              <MdArrowBack className="w-4 h-4 ml-2" />
              بازگشت
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chat Messages */}
        <div className="lg:col-span-3">
          <Card className="h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MdPeople className="w-4 h-4" />
                  <span>
                    {room.participantCount.toLocaleString("fa-IR")} شرکت‌کننده
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MdMessage className="w-4 h-4" />
                  <span>{room.messageCount.toLocaleString("fa-IR")} پیام</span>
                </div>
              </div>

              {selectedMessages.size > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {selectedMessages.size.toLocaleString("fa-IR")} انتخاب شده
                  </span>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={handleBulkDelete}
                    className="cursor-pointer"
                  >
                    <MdDelete className="w-4 h-4 ml-1" />
                    حذف
                  </Button>
                </div>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <LoadingSpinner />
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg transition-colors",
                        message.isDeleted && "opacity-50",
                        message.isReported && "bg-red-50 dark:bg-red-950/20",
                        selectedMessages.has(message.id) && "bg-primary/10"
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={selectedMessages.has(message.id)}
                        onChange={() => toggleMessageSelection(message.id)}
                        className="mt-1 cursor-pointer"
                      />

                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                        {message.username.charAt(0)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-foreground">
                            {message.username}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {formatTime(message.timestamp)}
                          </span>
                          {message.isReported && (
                            <Badge variant="destructive" className="text-xs">
                              گزارش شده
                            </Badge>
                          )}
                          {message.isDeleted && (
                            <Badge variant="secondary" className="text-xs">
                              حذف شده
                            </Badge>
                          )}
                        </div>
                        <p
                          className={cn(
                            "text-sm",
                            message.isDeleted
                              ? "line-through text-muted-foreground"
                              : "text-foreground"
                          )}
                        >
                          {message.content}
                        </p>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleReportMessage(message.id)}
                          className="p-1 hover:bg-accent rounded cursor-pointer"
                          title="گزارش پیام"
                        >
                          <MdReport className="w-4 h-4 text-muted-foreground" />
                        </button>
                        <button
                          onClick={() => handleDeleteMessage(message.id)}
                          className="p-1 hover:bg-accent rounded cursor-pointer"
                          title="حذف پیام"
                        >
                          <MdDelete className="w-4 h-4 text-muted-foreground" />
                        </button>
                        <button className="p-1 hover:bg-accent rounded cursor-pointer">
                          <MdMoreVert className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
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
                <Button
                  className="cursor-pointer"
                  disabled={!newMessage.trim()}
                >
                  <MdSend className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Room Controls */}
        <div className="space-y-4">
          <Card>
            <h3 className="font-semibold text-foreground mb-4">
              کنترل‌های روم
            </h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start cursor-pointer bg-transparent"
              >
                <MdBlock className="w-4 h-4 ml-2" />
                مسدود کردن روم
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start cursor-pointer bg-transparent"
              >
                <MdPeople className="w-4 h-4 ml-2" />
                مدیریت کاربران
              </Button>
              <Button
                variant="destructive"
                className="w-full justify-start cursor-pointer"
              >
                <MdDelete className="w-4 h-4 ml-2" />
                حذف روم
              </Button>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-foreground mb-4">آمار روم</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  شرکت‌کنندگان:
                </span>
                <span className="text-sm font-medium">
                  {room.participantCount.toLocaleString("fa-IR")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  کل پیام‌ها:
                </span>
                <span className="text-sm font-medium">
                  {room.messageCount.toLocaleString("fa-IR")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  پیام‌های گزارش شده:
                </span>
                <span className="text-sm font-medium text-red-600">
                  {messages
                    .filter((m) => m.isReported)
                    .length.toLocaleString("fa-IR")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  پیام‌های حذف شده:
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {messages
                    .filter((m) => m.isDeleted)
                    .length.toLocaleString("fa-IR")}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
