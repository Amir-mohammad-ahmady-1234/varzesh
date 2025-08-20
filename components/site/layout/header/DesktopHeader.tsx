import Image from "next/image";
import React from "react";
import { HeaderNav } from "./HeaderNav";
import SearchFormHeader from "./SearchFormHeader";
import Link from "next/link";

function DesktopHeader() {
  return (
    <div className="hidden md:flex items-center justify-center w-full">
      <div className="flex items-center gap-5">
        <Image src="/img/logo/logo.png" alt="logo" width={100} height={100} />
        <HeaderNav />
        <div className="flex items-center gap-3">
          <SearchFormHeader />
          <Link href="/auth/register">
            <button className="button-primary sm rounded-md cursor-pointer">
              ثبت نام
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
