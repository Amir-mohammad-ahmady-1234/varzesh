import Image from "next/image";
import React from "react";
import { HeaderNav } from "./HeaderNav";
import SearchFormHeader from "./SearchFormHeader";
import Link from "next/link";
import Button from "../../../../styles/ui/Button";

function DesktopHeader() {
  return (
    <div className="hidden md:flex items-center justify-center w-full">
      <div className="flex items-center gap-5">
        <Image src="/img/logo/logo.png" alt="logo" width={100} height={100} />
        <HeaderNav />
        <div className="flex items-center gap-3">
          <SearchFormHeader />
          <Link href="/auth/register">
            <Button className="rounded-sm" variant="primary" size="sm">
              ثبت نام
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
