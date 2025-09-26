import Link from "next/link";
import Button from "../../../../common/Button";

export default function PageTitle() {
  return (
    <div className="flex items-center justify-between mb-8">
      <h3 className="font-bold text-primary-100">مدیریت بازی‌ها</h3>
      <Link href="/admin/games/new">
        <Button>بازی جدید</Button>
      </Link>
    </div>
  );
}
