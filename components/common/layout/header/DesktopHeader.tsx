import Image from "next/image";
import React from "react";
import { HeaderNav } from "./HeaderNav";
import SearchFormHeader from "./SearchFormHeader";
import Button from "../../Button";
import { MdAdminPanelSettings } from "react-icons/md";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  isAdmin: boolean;
}

function DesktopHeader({ children, isAdmin }: Props) {
  return (
    <div className="hidden md:flex items-center justify-center w-full">
      <div className="flex items-center gap-5">
        <Image
          src="/assets/img/logo/logo.png"
          alt="logo"
          width={100}
          height={100}
        />
        <HeaderNav />
        <div className="flex items-center gap-3">
          <SearchFormHeader />
          {children}
          {isAdmin && (
            <Link href={"/admin"}>
              <Button>
                <MdAdminPanelSettings />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
