import React, { useState } from "react";
import Button from "../../../../../../common/Button";
import { TFormDataGame } from "../../create/FormTabelAddGame";
import Modal from "../../../../../../common/Modal";

type SubmitingBtnsProps = {
  formData: TFormDataGame;
};

export default function SubmitingBtns({ formData }: SubmitingBtnsProps) {
  const [showmodal, setshowmodal] = useState(false);

  return (
    <div className="flex items-center gap-4 pt-6 ">
      <Button type="submit">ایجاد بازی</Button>
      <Button variant="secondary" onClick={() => setshowmodal(true)}>
        پیش‌ نمایش
      </Button>
      {showmodal && (
        <Modal
          onClose={() => setshowmodal(false)}
          isOpen={showmodal}
          title="پیش نمایش"
          size="sm"
        >
          <div className="space-y-2">
            {Object.entries(formData).map(([key, value]) => {
              const label = {
                firstthem: "تیم اول",
                secondthem: "تیم دوم",
                League: "لیگ",
                step: "مرحله",
                data: "تاریخ",
                time: "ساعت",
                status: "وضعیت",
                description: "توضیحات",
              }[key as keyof TFormDataGame];

              return (
                <div key={key} className="flex justify-between">
                  <span className="font-small">{label}:</span>
                  <span>{value?.toString()}</span>
                </div>
              );
            })}
          </div>
        </Modal>
      )}
    </div>
  );
}
