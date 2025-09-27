"use client";
import React from "react";
import { useUsersStates } from "../../../../../../hooks/admin/users/useUsersStates";
import Button from "../../../../../common/Button";

export default function PaginationBtns() {
  const {
    currentPage,
    setCurrentPage,
    filteredUsers,
    itemsPerPage,
    totalPages,
  } = useUsersStates();
  return (
    totalPages > 1 && (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          نمایش {((currentPage - 1) * itemsPerPage + 1).toLocaleString("fa-IR")}{" "}
          تا{" "}
          {Math.min(
            currentPage * itemsPerPage,
            filteredUsers.length
          ).toLocaleString("fa-IR")}{" "}
          از {filteredUsers.length.toLocaleString("fa-IR")} کاربر
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="cursor-pointer"
          >
            قبلی
          </Button>

          <div className="flex gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let page = i + 1;
              if (totalPages > 5) {
                if (currentPage > 3) {
                  page = currentPage - 2 + i;
                }
                if (currentPage > totalPages - 2) {
                  page = totalPages - 4 + i;
                }
              }
              return (
                <Button
                  key={page}
                  variant={page === currentPage ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className="cursor-pointer w-10"
                >
                  {page.toLocaleString("fa-IR")}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="cursor-pointer"
          >
            بعدی
          </Button>
        </div>
      </div>
    )
  );
}
