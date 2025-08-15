"use client";
import Image from "next/image";
import SearchFormHeader from "./SearchFormHeader";
import { HeaderNav } from "./HeaderNav";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

export type DropdownItemHeader = { id: number; name: string };
export type HeaderItemHeader = {
  id: number;
  name: string;
  dropdown?: DropdownItemHeader[];
};

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="mx-auto md:max-w-[1344px] p-4">
        {/* حالت موبایل */}
        <div className="flex items-center justify-between md:hidden w-[375px]">
          {/* آیکون سرچ سمت چپ */}
          <div className="flex-1 flex gap-2">
            <button className="button-primary sm rounded-md">
              <FiSearch />
            </button>
            <button className="button-primary sm rounded-md">
              <FiUser className="text-lg" />
            </button>
          </div>

          {/* لوگو وسط */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/img/logo/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>

          {/* آیکون منو + دکمه ثبت‌نام سمت راست */}
          <div className="flex-1 flex justify-end items-center gap-2">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="button-primary sm rounded-md "
            >
              <FiMenu />
            </button>
          </div>
        </div>

        {/* حالت دسکتاپ */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <button className="button-primary sm rounded-md">ثبت نام</button>
            <SearchFormHeader />
          </div>
          <div className="flex items-center gap-5">
            <HeaderNav />
            <Image
              src="/img/logo/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </header>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
}
