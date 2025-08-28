"use client";

import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export type DropdownItemHeader = { id: number; name: string };
export type HeaderItemHeader = {
  id: number;
  name: string;
  dropdown?: DropdownItemHeader[];
};

export default function Header({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="p-4">
        {/* mobile  */}
        <MobileHeader setIsSidebarOpen={setIsSidebarOpen}>
          {children}
        </MobileHeader>

        {/* desktop */}
        <DesktopHeader>{children}</DesktopHeader>
      </header>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
}
