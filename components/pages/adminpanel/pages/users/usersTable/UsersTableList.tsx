import React from "react";
import TableHead from "./TableHead";
import TableContent from "./TableContent";
import { useUsersStates } from "../../../../../../hooks/admin/users/useUsersStates";

export default function UsersTableList() {
  const { paginatedUsers, handleUserClick } = useUsersStates();

  return (
    <table className="w-full">
      <TableHead />
      <tbody>
        {paginatedUsers.map((user, index) => (
          <tr
            key={user.id}
            className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer ${
              index % 2 === 0
                ? "bg-white dark:bg-gray-900"
                : "bg-gray-50/50 dark:bg-gray-800/50"
            }`}
            onClick={() => handleUserClick(user.id)}
          >
            <TableContent user={user} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
