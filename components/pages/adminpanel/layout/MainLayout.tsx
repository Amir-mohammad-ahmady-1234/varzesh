"use client";

import { Suspense, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Suspense>
        <Sidebar />
      </Suspense>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Suspense>
          <Topbar />
        </Suspense>
        <main className="flex-1 overflow-y-auto p-6">
          <Suspense>
            <div className="max-w-7xl mx-auto">{children}</div>
          </Suspense>
        </main>
      </div>
    </div>
  );
}
