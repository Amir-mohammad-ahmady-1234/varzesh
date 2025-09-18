import Link from "next/link";
import React from "react";
import Button from "../../../../../common/Button";

export default function PageTitle() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <Link href="/admin/games">
        <Button variant="ghost">← بازگشت</Button>
      </Link>
    </div>
  );
}
