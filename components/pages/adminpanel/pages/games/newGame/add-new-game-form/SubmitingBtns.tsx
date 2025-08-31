import React from "react";
import Link from "next/link";
import Button from "../../../../../../common/Button";

export default function SubmitingBtns() {
  return (
    <div className="flex items-center gap-4 pt-6 border-t border-(--border)">
      <Button type="submit">ایجاد بازی</Button>
      <Button variant="secondary" type="button">
        پیش‌نمایش
      </Button>
      <Link href="/games">
        <Button variant="ghost" type="button">
          انصراف
        </Button>
      </Link>
    </div>
  );
}
