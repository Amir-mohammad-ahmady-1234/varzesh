import { IconType } from "react-icons/lib";
import {
  MdAssignment,
  MdChat,
  MdCheckCircle,
  MdPriorityHigh,
  MdSchedule,
  MdSupport,
} from "react-icons/md";

export const usersCardInfo = [
  { id: 1, title: "کل چت روم ها", value: "total", color: "blue", icon: MdChat },
  {
    id: 2,
    title: "روم‌های فعال",
    value: "active",
    color: "green",
    icon: MdChat,
  },
  {
    id: 3,
    title: "کل شرکت‌کنندگان",
    value: "totalParticipants",
    color: "purple",
    icon: MdChat,
  },
  {
    id: 4,
    title: "کل پیام‌ها",
    value: "totalMessages",
    color: "orange",
    icon: MdChat,
  },
];

interface TicketType {
  id: number;
  title: string;
  value: string;
  color: "green" | "purple" | "orange" | "blue" | "red" | "yellow";
  icon: IconType;
}

export const userTicketInfo: TicketType[] = [
  {
    id: 1,
    title: "کل تیکت‌ها",
    value: "total",
    color: "blue",
    icon: MdSupport,
  },
  {
    id: 2,
    title: "تیکت‌های باز",
    value: "open",
    color: "red",
    icon: MdAssignment,
  },
  {
    id: 3,
    title: "در حال بررسی",
    value: "inProgress",
    color: "yellow",
    icon: MdSchedule,
  },
  {
    id: 4,
    title: "حل شده",
    value: "resolved",
    color: "green",
    icon: MdCheckCircle,
  },
  {
    id: 5,
    title: "فوری",
    value: "urgent",
    color: "purple",
    icon: MdPriorityHigh,
  },
];
