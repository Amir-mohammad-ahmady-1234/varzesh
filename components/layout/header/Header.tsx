import Image from "next/image";

import SearchFormHeader from "./SearchFormHeader";
import { HeaderNav } from "./HeaderNav";
export type DropdownItemHeader = { id: number; name: string };
export type HeaderItemHeader = {
  id: number;
  name: string;
  dropdown?: DropdownItemHeader[];
};

export default function Header() {
  return (
    <header className="flex items-center justify-between mx-auto md:max-w-[1344px] mobile:max-w-[345px] p-4">
      <div className="flex items-center gap-3">
        <button className="button-primary sm rounded-md">ثبت نام</button>
        <SearchFormHeader />
      </div>
      <div className="flex items-center gap-5">
        <HeaderNav />
        <Image src="/img/logo/logo.png" alt="logo" width={100} height={100} />
      </div>
    </header>
  );
}
