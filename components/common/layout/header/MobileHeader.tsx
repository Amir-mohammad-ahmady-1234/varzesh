import Image from "next/image";
import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import Button from "../../Button";
import Link from "next/link";
import { MdAdminPanelSettings } from "react-icons/md";

type Props = {
  setIsSidebarOpen: (value: boolean) => void;
  children: React.ReactNode;
  isAdmin: boolean;
};

function MobileHeader({ setIsSidebarOpen, children, isAdmin }: Props) {
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
        <Image
          src="/assets/img/logo/logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      <div className="flex gap-2">
        <div>{children}</div>
        {isAdmin && (
          <Link href={"/admin"}>
            <Button>
              <MdAdminPanelSettings />
            </Button>
          </Link>
        )}
        <Button size="sm" className="rounded-md">
          <FiSearch />
        </Button>
      </div>
    </div>
  );
}

export default MobileHeader;
