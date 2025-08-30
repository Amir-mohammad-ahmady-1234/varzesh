import React, { SetStateAction } from "react";
import Modal from "../../../common/Modal";
import Input from "../../../common/Input";
import Button from "../../../common/Button";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function ChangeInfoModal({
  isModalOpen,
  setIsModalOpen,
}: Props) {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen((prev) => !prev)}
      title="تغییر اطلاعات "
      size="lg"
    >
      <form className="flex flex-col items-center gap-14" action="">
        <div className="flex flex-col gap-6">
          <Input
            name="change-profile"
            placeholder="تغییر تصویر پروفایل"
            title="تغییر پروفایل"
            type="file"
          />
          <Input
            name="change-email"
            placeholder="ایمیل جدید"
            title="اپدیت ایمیل"
          />
        </div>

        <Button type="submit" className="w-40 self-end">
          ثبت تغییرات
        </Button>
      </form>
    </Modal>
  );
}
