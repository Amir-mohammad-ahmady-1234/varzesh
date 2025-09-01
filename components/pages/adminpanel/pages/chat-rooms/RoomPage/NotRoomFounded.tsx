import React from "react";
import MainLayout from "../../../layout/MainLayout";
import Button from "../../../../../common/Button";
import { useRouter } from "next/navigation";

export default function NotRoomFounded() {
  const router = useRouter();

  return (
    <MainLayout>
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            چت روم یافت نشد
          </h2>
          <Button onClick={() => router.back()} className="cursor-pointer">
            بازگشت
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
