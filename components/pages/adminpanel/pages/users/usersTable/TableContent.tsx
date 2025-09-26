import React from "react";
import {
  MdAccessTime,
  MdCalendarToday,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdEdit,
  MdEmail,
  MdMoreVert,
  MdVisibility,
} from "react-icons/md";
import {
  formatDate,
  getRoleColor,
  getRoleText,
  getStatusColor,
  getStatusText,
} from "../../../../../../hooks/admin/users/usersHandlers";
import Button from "../../../../../common/Button";
import { useUsersStates } from "../../../../../../hooks/admin/users/useUsersStates";
import { User } from "../../../../../../types/adminPanelTypes";
import Badge from "../../../../../common/ui/Badge";

export default function TableContent({ user }: { user: User }) {
  const { toggleUserSelection, selectedUsers, handleUserClick } =
    useUsersStates();

  return (
    <>
      <td className="py-4 px-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleUserSelection(user.id);
          }}
          className="cursor-pointer"
        >
          {selectedUsers.has(user.id) ? (
            <MdCheckBox className="w-5 h-5 text-blue-600" />
          ) : (
            <MdCheckBoxOutlineBlank className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
            {user.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {user.name}
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <MdEmail className="w-4 h-4" />
              {user.email}
            </div>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <Badge variant={getRoleColor(user.role)} size="md">
          {getRoleText(user.role)}
        </Badge>
      </td>
      <td className="py-4 px-6">
        <Badge variant={getStatusColor(user.status)} size="md" dot>
          {getStatusText(user.status)}
        </Badge>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
          <MdCalendarToday className="w-4 h-4" />
          {formatDate(user.createdAt)}
        </div>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
          <MdAccessTime className="w-4 h-4" />
          {user.lastActive ? formatDate(user.lastActive) : "هرگز"}
        </div>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-1">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              handleUserClick(user.id);
            }}
            className="cursor-pointer"
          >
            <MdVisibility className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              // Handle edit
            }}
            className="cursor-pointer"
          >
            <MdEdit className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              // Handle menu
            }}
            className="cursor-pointer"
          >
            <MdMoreVert className="w-4 h-4" />
          </Button>
        </div>
      </td>
    </>
  );
}
