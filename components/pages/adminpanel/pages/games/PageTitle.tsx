import Link from "next/link";
import Button from "../../../../common/Button";

export default function PageTitle() {
  return (
    <div className="flex items-center justify-between mb-8">
      <h4 className="text-3xl font-bold text-primary-100">مدیریت بازی‌ها</h4>
      <Link href="/admin/games/new">
        <Button>بازی جدید</Button>
      </Link>
    </div>
  );
}
