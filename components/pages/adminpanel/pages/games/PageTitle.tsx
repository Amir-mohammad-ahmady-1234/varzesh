import Link from "next/link";
import Button from "../../../../common/Button";

export default function PageTitle() {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-(--text-primary)">
        مدیریت بازی‌ها
      </h1>
      <Link href="/admin/games/new">
        <Button>بازی جدید</Button>
      </Link>
    </div>
  );
}
