"use client";

import { useState } from "react";
import Sidebar from "../../components/pages/userpanel/layout/Sidebar";
import MobileHeader from "../../components/pages/userpanel/layout/MobileHeader";

export default function UserPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <MobileHeader setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className={`flex-1 p-4 ${isSidebarOpen ? "blur" : ""}`}>
          {children}
        </main>
      </div>
    </>
  );
}
