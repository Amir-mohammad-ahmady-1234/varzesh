"use client";

import { useState } from "react";
import { TPostProfileUser } from "../../../../types/user/profile/type";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";

interface Props {
  children: React.ReactNode;
  userInfo: TPostProfileUser;
}

export default function SidebarWrapper({ children, userInfo }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <MobileHeader setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen}>
          <UserProfile userInfo={userInfo} />
        </Sidebar>
        <main className={`flex-1 p-4 ${isSidebarOpen ? "blur" : ""}`}>
          {children}
        </main>
      </div>
    </>
  );
}
