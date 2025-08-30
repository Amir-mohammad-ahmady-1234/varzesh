"use client";

import { useState } from "react";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";
import { userInfo } from "../../../../types/user/profile/userInfo";
import UserInfo from "./UserInfo";
import ChangeInfoModal from "./ChangeInfoModal";

interface Props {
  children: React.ReactNode;
  userInfo: userInfo;
}

export default function SidebarWrapper({ children, userInfo }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!userInfo.user) return;

  return (
    <>
      {isModalOpen && (
        <ChangeInfoModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      <MobileHeader setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen}>
          <UserProfile userInfo={userInfo}>
            <UserInfo
              firstname={userInfo.user?.firstname}
              phone={userInfo.user?.phone}
              setIsModalOpen={setIsModalOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </UserProfile>
        </Sidebar>
        <main
          className={`flex-1 p-4 ${isSidebarOpen || isModalOpen ? "blur" : ""}`}
        >
          {children}
        </main>
      </div>
    </>
  );
}
