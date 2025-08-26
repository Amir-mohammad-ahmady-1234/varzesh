import Image from "next/image";
import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import Button from "../../../../styles/ui/Button";

type Props = {
  children: React.ReactNode;
  setIsSidebarOpen: (value: boolean) => void;
};

function MobileHeader({ children, setIsSidebarOpen }: Props) {
  return (
    <div className="flex md:hidden items-center justify-center w-full">
      <div className=" flex justify-start items-center gap-2">
        <Button
          size="sm"
          onClick={() => setIsSidebarOpen(true)}
          className="rounded-md"
        >
          <FiMenu />
        </Button>
      </div>
      <div className="flex mx-auto">
        <Image src="/img/logo/logo.png" alt="logo" width={100} height={100} />
      </div>

      <div className="flex gap-2">
        <Button size="sm" className="rounded-md">
          <FiSearch />
        </Button>

        {children}
      </div>
    </div>
  );
}

export default MobileHeader;
