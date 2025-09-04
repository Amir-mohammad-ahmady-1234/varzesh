import React from "react";
import { LuUserRoundPen } from "react-icons/lu";

export default function PageTitle() {
  return (
    <>
      <div className="flex items-center justify-start gap-4">
        <LuUserRoundPen className="text-4xl" />
        <h4>ویرایش اطلاعات</h4>
      </div>
      <hr className="mt-4 mb-10 opacity-40" />
    </>
  );
}
