"use client";
import React from "react";
import Button from "../../../../../common/Button";
import { $Enums } from "@prisma/client";

export interface UserData {
  email: string | null;
  role: $Enums.Role;
  status: $Enums.Status;
  createdAt: Date;
  id: number;
  firstname: string;
  phone: string;
  password: string;
  totalMessage: number;
  report: number;
  profileImage: string | null;
  ticketsSupport: number | null;
  isVerify: boolean;
  userRate: number | null;
  changephone: string | null;
  jwt: string | null;
  otpCode: string | null;
  otpExpiresAt: Date | null;
  updatedAt: Date;
}

export interface userCompleteType {
  users: {
    data: UserData[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}

export default function PaginationBtns({ users }: userCompleteType) {
  const { pagination } = users;
  const { total, page, limit, totalPages } = pagination;

  if (totalPages <= 1) return null;

  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
      <div className="text-sm text-gray-600 dark:text-gray-400">
        نمایش {start.toLocaleString("fa-IR")} تا {end.toLocaleString("fa-IR")}{" "}
        از {total.toLocaleString("fa-IR")} کاربر
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          className="cursor-pointer"
          onClick={() => console.log("صفحه قبل:", page - 1)}
        >
          قبلی
        </Button>

        <div className="flex gap-1">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let current = i + 1;

            if (totalPages > 5) {
              if (page > 3) current = page - 2 + i;
              if (page > totalPages - 2) current = totalPages - 4 + i;
            }

            if (current < 1 || current > totalPages) return null;

            return (
              <Button
                key={current}
                variant={current === page ? "primary" : "outline"}
                size="sm"
                className="cursor-pointer w-10"
                onClick={() => console.log("صفحه:", current)}
              >
                {current.toLocaleString("fa-IR")}
              </Button>
            );
          })}
        </div>

        <Button
          variant="outline"
          size="sm"
          disabled={page === totalPages}
          className="cursor-pointer"
          onClick={() => console.log("صفحه بعد:", page + 1)}
        >
          بعدی
        </Button>
      </div>
    </div>
  );
}
