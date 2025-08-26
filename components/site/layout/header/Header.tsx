"use client";

import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export type DropdownItemHeader = { id: number; name: string };
export type HeaderItemHeader = {
  id: number;
  name: string;
  dropdown?: DropdownItemHeader[];
};

export default function Header({ token }: { token: string | null }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="p-4">
        {/* mobile  */}
        <MobileHeader setIsSidebarOpen={setIsSidebarOpen} token={token} />

        {/* desktop */}
        <DesktopHeader token={token} />
      </header>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
}
