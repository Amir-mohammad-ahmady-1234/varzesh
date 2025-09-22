import { $Enums } from "@prisma/client";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "moderator" | "user";
  status: "active" | "inactive" | "suspended";
  createdAt: string;
  lastActive?: string;
}

export interface ChatRoom {
  id: string;
  name: string;
  description?: string;
  gameId?: string;
  type: "game" | "general" | "private";
  status: "active" | "inactive";
  participantCount: number;
  messageCount: number;
  createdAt: string;
  lastActivity?: string;
}

export interface Message {
  id: string;
  roomId: string;
  userId: string;
  user: Pick<User, "id" | "name" | "avatar">;
  content: string;
  type: "text" | "image" | "system";
  createdAt: string;
  isReported?: boolean;
  isDeleted?: boolean;
}

export interface SupportTicket {
  id: string;
  userId: string;
  user: Pick<User, "id" | "name" | "email" | "avatar">;
  subject: string;
  content: string;
  status: "Open" | "Waiting" | "Approved" | "Blocked";
  priority: "URGENT" | "HIGH" | "NORMAL" | "LOW";
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
  messages: SupportMessage[];
}

export interface TicketType {
  createdAt: Date;
  priority: $Enums.Priority;
  status: $Enums.Status;
  id: number;
  title: string;
  updatedAt: Date;
  description: string | null;
  userId: number;
}

export interface SupportMessage {
  id: string;
  ticketId: string;
  userId: string;
  user: Pick<User, "id" | "name" | "avatar">;
  content: string;
  isInternal: boolean;
  createdAt: string;
}

export interface Game {
  id?: string;
  firstthem?: string;
  seccondthem?: string;
  League?: string;
  status?: "scheduled" | "live" | "finished";
  time?: Date;
  data?: Date;
  description?: string;
  step?: string;
  startTime?: string;
  endTime?: string;
  score?: {
    home: number;
    away: number;
  };
  chatRoomId?: string;
}

export interface Notification {
  id: string;
  userId?: string;
  title: string;
  content: string;
  type: "info" | "warning" | "error" | "success";
  isRead: boolean;
  createdAt: string;
  actionUrl?: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalGames: number;
  liveGames: number;
  totalMessages: number;
  todayMessages: number;
  openTickets: number;
  resolvedTickets: number;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}
