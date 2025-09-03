import React, {
  SetStateAction,
  startTransition,
  useActionState,
  useEffect,
} from "react";
import Modal from "../../../common/Modal";
import Input from "../../../common/Input";
import Button from "../../../common/Button";
import {
  putProfileInfo,
  putProfileInfoState,
} from "../../../../lib/actions/change-user-info/putProfileInfo";
import toast from "react-hot-toast";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

const initialState: putProfileInfoState = {
  message: {},
};

export default function ChangeInfoModal({
  isModalOpen,
  setIsModalOpen,
}: Props) {
  const [state, formAction] = useActionState(putProfileInfo, initialState);

  useEffect(
    function () {
      if (state.message && "path" in state.message) {
        toast.success("تغییرات با موفقیت اعمال شد");
        setIsModalOpen(false);
      }
    },
    [state.message, setIsModalOpen]
  );

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen((prev) => !prev)}
      title="تغییر اطلاعات "
      size="lg"
    >
      <form
        className="flex flex-col items-center gap-14"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);

          startTransition(() => {
            formAction(formData);
          });
        }}
      >
        <div className="flex flex-col gap-6">
          <Input
            name="change-profile"
            placeholder="تغییر تصویر پروفایل"
            title="تغییر پروفایل"
            type="file"
            err={
              state.message && "profile" in state.message
                ? state.message.profile
                : undefined
            }
          />
          <Input
            name="change-email"
            placeholder="ایمیل جدید"
            title="اپدیت ایمیل"
            err={
              state.message && "email" in state.message
                ? state.message.email
                : undefined
            }
          />
        </div>

        <Button type="submit" className="w-40 self-end">
          ثبت تغییرات
        </Button>
      </form>
    </Modal>
  );
}
