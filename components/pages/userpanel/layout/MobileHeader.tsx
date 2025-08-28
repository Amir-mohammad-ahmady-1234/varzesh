import { Dispatch, SetStateAction } from "react";
import { PiList } from "react-icons/pi";

export default function MobileHeader({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className="lg:hidden flex items-center justify-between bg-primary-200 px-6 py-2">
      <PiList
        className="text-xl cursor-pointer"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      />
      <h6>پنل کاربری</h6>
      <div></div>
    </header>
  );
}
