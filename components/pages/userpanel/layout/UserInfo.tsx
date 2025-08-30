import React, { SetStateAction } from "react";
import { FaEdit } from "react-icons/fa";

interface Props {
  firstname: string;
  phone: string;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  setIsSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function UserInfo({
  firstname,
  phone,
  setIsModalOpen,
  setIsSidebarOpen,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col justify-center items-center">
        <p>{firstname}</p>
        <p>{phone}</p>
      </div>
      <FaEdit
        className="cursor-pointer text-md lg:text-md"
        onClick={() => {
          setIsSidebarOpen(false);
          setIsModalOpen((prev) => !prev);
        }}
      />
    </div>
  );
}
