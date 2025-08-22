import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import Button from "../../../../styles/ui/Button";
type Props = {
  setIsSidebarOpen: (value: boolean) => void;
};
function MobileHeader({ setIsSidebarOpen }: Props) {
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

        <Link href="/auth/register">
          <Button size="sm" className="rounded-md cursor-pointer">
            <FiUser className="text-lg" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MobileHeader;
