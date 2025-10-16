import React from "react";
import TableHead from "./TableHead";
import TableContent from "./TableContent";
import { userCompleteType } from "../pagination/PaginationBtns";

export default function UsersTableList({ users }: userCompleteType) {
  return (
    <table className="w-full">
      <TableHead />
      <tbody>
        {users.data.map((user, index) => (
          <tr
            key={user.id}
            className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer ${
              index % 2 === 0
                ? "bg-white dark:bg-gray-900"
                : "bg-gray-50/50 dark:bg-gray-800/50"
            }`}
          >
            <TableContent user={user} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
