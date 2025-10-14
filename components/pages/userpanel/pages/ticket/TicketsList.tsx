import { $Enums } from "@prisma/client";
import React from "react";
import { formatDate } from "../../../../../hooks/admin/users/usersHandlers";

interface Props {
  tickets:
    | never[]
    | {
        id: number;
        status: $Enums.Status;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: number;
        priority: $Enums.Priority;
      }[]
    | undefined;
}

export default function TicketsList({ tickets }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-extrabold text-center text-neutral-800 mb-8">
        تیکت‌های پشتیبانی شما
      </h3>

      <div className="grid gap-5">
        {tickets?.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-neutral-400 border border-neutral-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h4 className="text-lg font-semibold text-neutral-700">
                {ticket.title}
              </h4>
              <span className="text-sm text-neutral-700 mt-1 sm:mt-0">
                {formatDate(ticket.createdAt.toString())}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
              <span
                className={`px-3 py-1 rounded-full ${
                  ticket.status === "Open"
                    ? "bg-green-100 text-green-700"
                    : ticket.status === "Waiting"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                وضعیت:{" "}
                {ticket.status === "Open"
                  ? "باز"
                  : ticket.status === "Waiting"
                  ? "در انتظار"
                  : "بسته"}
              </span>

              <span
                className={`px-3 py-1 rounded-full ${
                  ticket.priority === "HIGH"
                    ? "bg-red-100 text-red-700"
                    : ticket.priority === "NORMAL"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                اولویت:{" "}
                {ticket.priority === "HIGH"
                  ? "زیاد"
                  : ticket.priority === "NORMAL"
                  ? "متوسط"
                  : "کم"}
              </span>
            </div>

            <p className="text-neutral-700 leading-relaxed">
              {ticket.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
