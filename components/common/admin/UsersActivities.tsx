import React from "react";
import { IconType } from "react-icons/lib";
import Card from "../ui/Card";

interface Props {
  stats: {
    total?: number;
    active?: number;
    totalParticipants?: number;
    totalMessages?: number;
    totalsupport?: number;
    activesupport?: number;
    waitingsupport?: number;
    approvedsupport?: number;
    Immediatesupport?: number;
    totalUsers?: number;
    activeUser?: number;
    blockUsers?: number;
    admins?: number;
    totalBlogs?: number;
    savedBlogs?: number;
    totalViewedBlogs?: number;
    deletedBlogs?: number;
  };
  usersCardInfo: {
    id: number;
    title: string;
    value: string;
    color: "green" | "purple" | "orange" | "blue" | "red" | "yellow";
    icon: IconType;
  }[];
}

const colorMap = {
  red: "from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400",
  yellow:
    "from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 border-yellow-200 dark:border-yellow-800 text-yellow-600 dark:text-yellow-400",
  blue: "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400",
  green:
    "from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400",
  purple:
    "from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400",
  orange:
    "from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400",
};

export default function UsersActivities({ stats, usersCardInfo }: Props) {
  const CardLength = usersCardInfo.length;

  return (
    <div
      className={`grid grid-cols-1 ${
        CardLength === 5 ? "md:grid-cols-5" : "md:grid-cols-4"
      } gap-4 mb-6`}
    >
      {usersCardInfo.map((cardInfo) => (
        <Card
          key={cardInfo.id}
          className={`bg-gradient-to-br ${colorMap[cardInfo.color]}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className={`text-sm text-${cardInfo.color}-600 dark:text-${cardInfo.color}-400 mb-1`}
              >
                {cardInfo.title}
              </p>
              <p
                className={`text-2xl font-bold text-${cardInfo.color}-900 dark:text-${cardInfo.color}-100`}
              >
                {Number(
                  stats[cardInfo.value as keyof typeof stats] ?? 0
                ).toLocaleString("fa-IR")}
              </p>
            </div>
            <div className={`p-3 bg-${cardInfo.color}-600 rounded-lg`}>
              <cardInfo.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
