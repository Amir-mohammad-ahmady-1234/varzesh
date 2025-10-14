import React from "react";
import { getTicketsByUserId } from "../../../server/user/paneluser/support/getTicketsByUserId/getTicketsByUserId";
import { GetUserById } from "../../../server/user/getuserbyid/GetUserById";
import TicketsList from "../../../components/pages/userpanel/pages/ticket/TicketsList";
import AddTicket from "../../../components/pages/userpanel/pages/ticket/AddTicket";

export default async function Page() {
  const user = await GetUserById();
  if (!user) return null;

  const { error, tickets } = await getTicketsByUserId(user.userId);

  if (error)
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-[var(--color-error-500)] text-lg font-semibold">
          خطا در دریافت اطلاعات: {error}
        </p>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-5 py-16 space-y-20">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-extrabold text-neutral-100">
          مرکز پشتیبانی کاربران
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base">
          در این بخش می‌تونی تیکت‌های خودت رو مشاهده یا تیکت جدید ثبت کنی.
        </p>
      </div>

      {tickets?.length ? (
        <section
          className="bg-[var(--color-tertiary-300)] border border-[var(--color-tertiary-500)] 
                     rounded-[var(--radius-medium)] shadow-sm p-6 sm:p-10 space-y-8"
        >
          <h2 className="text-xl font-bold text-neutral-100 text-center">
            تیکت‌های شما
          </h2>
          <TicketsList tickets={tickets} />
        </section>
      ) : (
        <div
          className="flex flex-col items-center justify-center py-16 text-neutral-400 
                     bg-[var(--color-tertiary-300)] rounded-[var(--radius-medium)] border border-[var(--color-tertiary-500)]"
        >
          <p className="text-lg font-semibold text-neutral-200">
            هنوز هیچ تیکتی ثبت نکردی 😅
          </p>
          <p className="text-sm mt-2 text-neutral-400">
            برای ارسال درخواست جدید از بخش زیر اقدام کن.
          </p>
        </div>
      )}

      <section
        className="bg-[var(--color-tertiary-300)] border border-[var(--color-tertiary-500)] 
                   rounded-[var(--radius-medium)] shadow-sm p-6 sm:p-10"
      >
        <h2 className="text-xl font-bold text-neutral-100 text-center mb-8">
          ارسال تیکت جدید
        </h2>
        <AddTicket userId={user.userId} />
      </section>
    </div>
  );
}
