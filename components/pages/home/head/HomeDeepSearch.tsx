import React from "react";
import Button from "../../../common/Button";
import { BiSearch } from "react-icons/bi";

function HomeDeepSearch() {
  return (
    <section className="bg-[#2D2D2D] flex flex-col  gap-4 p-4 rounded-xl">
      <div className="bg-primary-100 p-2 rounded-b-xl flex  justify-center items-center">
        <h5 className="font-bold text-white mt-2 flex items-center gap-2">
          <BiSearch />
          جستجو <span className="text-primary-500">حرفه ای</span>
        </h5>
      </div>

      <div className="flex gap-4 bg-[#3A3A3A] p-4 rounded-xl flex-1">
        <select className="p-2 rounded-md text-md bg-[#2D2D2D] text-white border border-gray-600 w-full ">
          <option>انتخاب ورزش</option>
          <option>فوتبال</option>
          <option>والیبال</option>
          <option>بسکتبال</option>
          <option>شنا</option>
        </select>

        <select className="p-2 rounded-md bg-[#2D2D2D] text-white border border-gray-600 w-full text-md">
          <option>دسته ورزشی</option>
          <option>آقایان</option>
          <option>بانوان</option>
          <option>معلولین</option>
        </select>

        <select className="p-2 rounded-md bg-[#2D2D2D] text-white border border-gray-600 w-full text-md">
          <option>رده سنی</option>
          <option>زیر ۱۸ سال</option>
          <option>زیر ۲۳ سال</option>
          <option>بزرگسالان</option>
        </select>

        <select className="p-2 rounded-md bg-[#2D2D2D] text-white border border-gray-600 w-full text-md">
          <option>کشور</option>
          <option>ایران</option>
          <option>آلمان</option>
          <option>اسپانیا</option>
          <option>برزیل</option>
        </select>

        <select className="p-2 rounded-md bg-[#2D2D2D] text-white border border-gray-600 w-full text-md">
          <option>نوع جستجو</option>
          <option>تیم</option>
          <option>بازیکن</option>
          <option>مربی</option>
        </select>

        <Button variant="primary">جستجو</Button>
      </div>
    </section>
  );
}

export default HomeDeepSearch;
