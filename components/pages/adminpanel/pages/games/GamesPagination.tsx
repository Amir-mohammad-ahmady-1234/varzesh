import React from "react";
import Button from "../../../../common/Button";

export default function GamesPagination() {
  return (
    <div className="flex items-center justify-between mt-6">
      <p className="text-sm text-secondary-100">نمایش 1 تا 3 از 3 بازی</p>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" disabled>
          قبلی
        </Button>
        <Button variant="primary" size="sm">
          1
        </Button>
        <Button variant="ghost" size="sm" disabled>
          بعدی
        </Button>
      </div>
    </div>
  );
}
