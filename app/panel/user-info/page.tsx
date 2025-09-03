import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";

import { LuUserRoundPen } from "react-icons/lu";
import EditNameAndEmail from "../../../components/pages/userpanel/pages/user-info/EditNameAndEmail";

export default function UserInfoPage() {
  return (
    <div className="rounded-2xl p-6">
      <div className="flex items-center justify-start gap-4">
        <LuUserRoundPen className="text-4xl" />
        <h4>ویرایش اطلاعات</h4>
      </div>

      <hr className="mt-4 mb-10 opacity-40" />

      <div className="space-y-15">
        <EditNameAndEmail />
        <form
          className="flex flex-col shadow-2xl items-center gap-14"
          action=""
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              name="change-phone"
              placeholder="شماره موبایل جدید"
              title="شماره موبایل"
            />
          </div>

          <Button type="submit" className="w-40 self-end">
            دریافت کد otp
          </Button>
        </form>
      </div>
    </div>
  );
}
