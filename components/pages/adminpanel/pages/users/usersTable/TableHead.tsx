import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdSort } from "react-icons/md";
import { useUsersStates } from "../../../../../../hooks/admin/users/useUsersStates";

export default function TableHead() {
  const { toggleSelectAll, paginatedUsers, handleSort, sortBy, selectedUsers } =
    useUsersStates();
  return (
    <thead>
      <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <th className="text-right py-4 px-6">
          <button onClick={toggleSelectAll} className="cursor-pointer">
            {selectedUsers.size === paginatedUsers.length ? (
              <MdCheckBox className="w-5 h-5 text-blue-600" />
            ) : (
              <MdCheckBoxOutlineBlank className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </th>
        <th className="text-right py-4 px-6 font-semibold text-gray-900 dark:text-gray-100">
          کاربر
        </th>
        <th className="text-right py-4 px-6">
          <button
            onClick={() => handleSort("role")}
            className="flex items-center gap-1 font-semibold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-blue-600 transition-colors"
          >
            نقش
            <MdSort
              className={`w-4 h-4 ${sortBy === "role" ? "text-blue-600" : ""}`}
            />
          </button>
        </th>
        <th className="text-right py-4 px-6">
          <button
            onClick={() => handleSort("status")}
            className="flex items-center gap-1 font-semibold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-blue-600 transition-colors"
          >
            وضعیت
            <MdSort
              className={`w-4 h-4 ${
                sortBy === "status" ? "text-blue-600" : ""
              }`}
            />
          </button>
        </th>
        <th className="text-right py-4 px-6">
          <button
            onClick={() => handleSort("createdAt")}
            className="flex items-center gap-1 font-semibold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-blue-600 transition-colors"
          >
            تاریخ ثبت‌نام
            <MdSort
              className={`w-4 h-4 ${
                sortBy === "createdAt" ? "text-blue-600" : ""
              }`}
            />
          </button>
        </th>
        <th className="text-right py-4 px-6 font-semibold text-gray-900 dark:text-gray-100">
          آخرین فعالیت
        </th>
        <th className="text-right py-4 px-6 font-semibold text-gray-900 dark:text-gray-100">
          عملیات
        </th>
      </tr>
    </thead>
  );
}
