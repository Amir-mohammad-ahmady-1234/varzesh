import { IconType } from "react-icons/lib";
import {
  MdAssignment,
  MdChat,
  MdCheckCircle,
  MdPriorityHigh,
  MdSchedule,
  MdSupport,
} from "react-icons/md";

export interface TicketType {
  id: number;
  title: string;
  value: string;
  color: "green" | "purple" | "orange" | "blue" | "red" | "yellow";
  icon: IconType;
}

export const usersCardInfo: TicketType[] = [
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

export const userTicketInfo: TicketType[] = [
  {
    id: 1,
    title: "کل تیکت‌ها",
    value: "totalsupport",
    color: "blue",
    icon: MdSupport,
  },
  {
    id: 2,
    title: "تیکت‌های باز",
    value: "activesupport",
    color: "red",
    icon: MdAssignment,
  },
  {
    id: 3,
    title: "در حال بررسی",
    value: "waitingsupport",
    color: "yellow",
    icon: MdSchedule,
  },
  {
    id: 4,
    title: "حل شده",
    value: "approvedsupport",
    color: "green",
    icon: MdCheckCircle,
  },
  {
    id: 5,
    title: "فوری",
    value: "Immediatesupport",
    color: "purple",
    icon: MdPriorityHigh,
  },
];
