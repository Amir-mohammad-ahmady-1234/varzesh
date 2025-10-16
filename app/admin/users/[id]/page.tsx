import Image from "next/image";
import { GetPageUserById } from "../../../../server/admin/paneladmin/users/GetPageUserById/GetPageUserById";

export const metadata = {
  title: "مشاهده کاربر",
  description: "نمایش جزئیات کاربر در پنل ادمین",
};

export default async function UserPage({ params }: { params: { id: string } }) {
  const { user, error, message, status } = await GetPageUserById(
    Number(params.id)
  );

  if (error || status === 500)
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl font-semibold">
        خطا در بارگذاری اطلاعات کاربر
      </div>
    );

  if (!user)
    return (
      <div className="flex items-center justify-center h-screen text-neutral-400 text-lg">
        {message || "کاربر یافت نشد"}
      </div>
    );

  return (
    <div className="flex flex-col gap-6 p-6 mx-auto max-w-4xl">
      <div className="bg-[var(--color-tertiary-300)] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--color-primary-200)]">
          <Image
            src={user.profileImage || "/images/default-avatar.png"}
            alt={user.firstname || "user"}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            {user.firstname || "بدون نام"}
          </h1>
          <p className="text-sm text-[var(--color-neutral-400)]">
            {user.email || "ایمیل ثبت نشده"}
          </p>
          <p className="text-sm text-[var(--color-neutral-400)]">
            {user.phone || "شماره ثبت نشده"}
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                user.status === "Approved"
                  ? "bg-[var(--color-success-500)]/20 text-[var(--color-success-300)]"
                  : "bg-[var(--color-error-500)]/20 text-[var(--color-error-300)]"
              }`}
            >
              {user.status === "Approved" ? "فعال" : "غیرفعال"}
            </span>
            <span className="px-4 py-1 rounded-full text-sm bg-[var(--color-primary-100)]/20 text-[var(--color-primary-400)]">
              {user.role === "ADMIN" ? "ادمین" : "کاربر"}
            </span>
            <span
              className={`px-4 py-1 rounded-full text-sm ${
                user.isVerify
                  ? "bg-[var(--color-success-500)]/20 text-[var(--color-success-300)]"
                  : "bg-[var(--color-error-500)]/20 text-[var(--color-error-300)]"
              }`}
            >
              {user.isVerify ? "تایید شده" : "تایید نشده"}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-[var(--color-tertiary-300)] rounded-xl p-5 flex flex-col gap-3">
          <h4 className="text-[var(--color-primary-400)] font-semibold text-lg">
            آمار کلی
          </h4>
          <div className="flex flex-col gap-2 text-sm text-[var(--color-neutral-300)]">
            <p>
              تعداد پیام‌ها:{" "}
              <span className="text-[var(--color-primary-300)]">
                {user.totalMessage ?? 0}
              </span>
            </p>
            <p>
              امتیاز کاربر:{" "}
              <span className="text-[var(--color-primary-300)]">
                {user.userRate ?? 0}
              </span>
            </p>
            <p>
              تغییر شماره:{" "}
              <span className="text-[var(--color-neutral-400)]">
                {user.changephone ? "دارد" : "ندارد"}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-tertiary-300)] rounded-xl p-5 flex flex-col gap-3">
          <h4 className="text-[var(--color-primary-400)] font-semibold text-lg">
            اطلاعات زمانی
          </h4>
          <div className="flex flex-col gap-2 text-sm text-[var(--color-neutral-300)]">
            <p>
              تاریخ ساخت:{" "}
              <span className="text-[var(--color-neutral-400)]">
                {new Date(user.createdAt).toLocaleDateString("fa-IR")}
              </span>
            </p>
            <p>
              آخرین بروزرسانی:{" "}
              <span className="text-[var(--color-neutral-400)]">
                {new Date(user.updatedAt).toLocaleDateString("fa-IR")}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-tertiary-300)] rounded-xl p-5 flex flex-col gap-3">
        <h4 className="text-[var(--color-primary-400)] font-semibold text-lg">
          گزارش‌ها و تیکت‌ها
        </h4>
        <div className="flex flex-col gap-2 text-sm text-[var(--color-neutral-300)]">
          <p>
            تعداد گزارش‌ها:{" "}
            <span className="text-[var(--color-error-400)]">
              {user.report ?? 0}
            </span>
          </p>
          <p>
            تعداد تیکت‌های پشتیبانی:{" "}
            <span className="text-[var(--color-primary-300)]">
              {user.ticketsSupport ?? 0}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
