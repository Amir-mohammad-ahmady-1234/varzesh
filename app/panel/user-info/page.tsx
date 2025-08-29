import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";

import { LuUserRoundPen } from "react-icons/lu";

export default function UserInfoPage() {
  return (
    <div className="rounded-2xl shadow-2xl p-6">
      <div className="flex items-center justify-start gap-4">
        <LuUserRoundPen className="text-4xl" />
        <h4>ویرایش اطلاعات</h4>
      </div>

      <hr className="mt-4 mb-10 opacity-40" />

      <form className="flex flex-col items-center gap-14" action="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input name="change-name" placeholder="تغییر نام" title="تغییر نام" />
          <Input
            name="change-phone"
            placeholder="شماره موبایل جدید"
            title="شماره موبایل"
          />
          <Input
            name="change-email"
            placeholder="تغییر ایمیل"
            title="تغییر ایمیل"
          />
          <Input
            name="change-profile"
            placeholder="تغییر تصویر پروفایل"
            title="تغییر پروفایل"
            type="file"
          />
        </div>

        <Button type="submit" className="w-40 self-end">
          ثبت تغییرات
        </Button>
      </form>
    </div>
  );
}
