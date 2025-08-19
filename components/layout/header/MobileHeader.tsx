import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
type Props = {
  setIsSidebarOpen: (value: boolean) => void;
};
function MobileHeader({ setIsSidebarOpen }: Props) {
  return (
    <div className="flex md:hidden items-center justify-center w-full">
      <div className=" flex justify-start items-center gap-2">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="button-primary sm rounded-md "
        >
          <FiMenu />
        </button>
      </div>
      <div className=" flex  mx-auto">
        <Image src="/img/logo/logo.png" alt="logo" width={100} height={100} />
      </div>

      <div className=" flex gap-2">
        <button className="button-primary sm rounded-md">
          <FiSearch />
        </button>

        <Link href="/regester">
          <button className="button-primary sm rounded-md cursor-pointer">
            <FiUser className="text-lg" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MobileHeader;
