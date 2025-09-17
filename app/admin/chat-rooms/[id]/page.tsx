'use client'

import MainLayout from "../../../../components/pages/adminpanel/layout/MainLayout";
import Card from "../../../../styles/ui/Card";
import LoadingSpinner from "../../../../styles/ui/LoadingSpinner";
import NotRoomFounded from "../../../../components/pages/adminpanel/pages/chat-rooms/RoomPage/NotRoomFounded";
import PageTitle from "../../../../components/pages/adminpanel/pages/chat-rooms/RoomPage/PageTitle";
import ChatHeader from "../../../../components/pages/adminpanel/pages/chat-rooms/RoomPage/ChatHeader/ChatHeader";
import DeleteBtn from "../../../../components/pages/adminpanel/pages/chat-rooms/RoomPage/ChatHeader/DeleteBtn";
import ChatMessages from "../../../../components/pages/adminpanel/pages/chat-rooms/RoomPage/ChatBox/ChatMessages";
import MessageContent from "../../../../components/pages/adminpanel/pages/chat-rooms/RoomPage/ChatBox/MessageContent";
import MessageOptions from "../../../../components/pages/adminpanel/pages/chat-rooms/RoomPage/ChatBox/MessageOptions";
import MessageInput from "../../../../components/pages/adminpanel/pages/chat-rooms/RoomPage/MessageInput";
import ControlCard from "../../../../components/common/admin/ControlsCard/ControlCard";
import InfoCard from "../../../../components/common/admin/ControlsCard/InfoCard";
import { useRoomPage } from "../../../../hooks/admin/chat-room/useRoomPage";

export interface Message {
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
  const {
    messagesEndRef,
    room,
    messages,
    setMessages,
    loading,
    newMessage,
    setNewMessage,
    selectedMessages,
    setSelectedMessages,
    handleBulkDelete,
  } = useRoomPage();

  if (!room) {
    return <NotRoomFounded />;
  }

  return (
    <MainLayout>
      <PageTitle room={room} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chat Messages */}
        <div className="lg:col-span-3">
          <Card className="h-[600px] flex flex-col">
            {/* Chat Header */}
            <ChatHeader room={room}>
              <DeleteBtn
                handleBulkDelete={handleBulkDelete}
                selectedMessages={selectedMessages}
              />
            </ChatHeader>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <LoadingSpinner />
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <ChatMessages
                      key={message.id}
                      message={message}
                      selectedMessages={selectedMessages}
                      setSelectedMessages={setSelectedMessages}
                    >
                      <MessageContent message={message} />
                      <MessageOptions
                        message={message}
                        setMessages={setMessages}
                      />
                    </ChatMessages>
                  ))}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Message Input */}
            <MessageInput
              newMessage={newMessage}
              setNewMessage={setNewMessage}
            />
          </Card>
        </div>

        {/* Room Controls */}
        <div className="space-y-4">
          <ControlCard />

          <InfoCard messages={messages} room={room} />
        </div>
      </div>
    </MainLayout>
  );
}
