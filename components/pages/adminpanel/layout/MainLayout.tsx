import { Suspense, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export const metadata = {
  title: "پنل ادمین",
  description: "پنل ادمین برای مدیریت سایت توسط ادمین ها اپراتور های سایت",
};

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Suspense>
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar />
          <main className="flex-1 overflow-y-auto p-6">
            <Suspense>
              <div className="max-w-7xl mx-auto">{children}</div>
            </Suspense>
          </main>
        </div>
      </Suspense>
    </div>
  );
}
