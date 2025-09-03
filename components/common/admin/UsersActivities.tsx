import React from "react";
import Card from "../../../styles/ui/Card";
import { IconType } from "react-icons/lib";

interface Props {
  stats:
    | {
        total: number;
        active: number;
        totalParticipants: number;
        totalMessages: number;
      }
    | {
        total: number;
        open: number;
        inProgress: number;
        resolved: number;
        urgent: number;
      };
  usersCardInfo: {
    id: number;
    title: string;
    value: string;
    color: string;
    icon: IconType;
  }[];
}

export default function UsersActivities({ stats, usersCardInfo }: Props) {
  const CardLength = usersCardInfo.length;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-${CardLength} gap-4 mb-6`}>
      {usersCardInfo.map((cardInfo) => (
        <Card
          key={cardInfo.id}
          className={`bg-gradient-to-br from-${cardInfo.color}-50 to-${cardInfo.color}-100 dark:from-${cardInfo.color}-950 dark:to-${cardInfo.color}-900 border-${cardInfo.color}-200 dark:border-${cardInfo.color}-800`}
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
                {stats[cardInfo.value as keyof typeof stats]?.toLocaleString(
                  "fa-IR"
                )}
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
