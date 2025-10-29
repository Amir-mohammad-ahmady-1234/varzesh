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
      <div className="flex items-center justify-center py-16 px-4 sm:px-0">
        <p className="text-error-500 text-center text-base sm:text-lg font-semibold">
          خطا در دریافت اطلاعات: {error}
        </p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-20">
      <div className="text-center space-y-2 sm:space-y-3">
        <h4 className="text-2xl sm:text-3xl font-extrabold text-neutral-100">
          مرکز پشتیبانی کاربران
        </h4>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          در این بخش می‌تونی تیکت‌هات رو مشاهده یا تیکت جدید ثبت کنی.
        </p>
      </div>

      {tickets?.length ? (
        <section
          className="bg-tertiary-300 border border-tertiary-500
                     rounded-radius-medium shadow-sm p-4 sm:p-8 space-y-6 sm:space-y-8"
        >
          <h5 className="text-lg sm:text-xl font-bold text-neutral-100 text-center">
            تیکت‌های شما
          </h5>
          <div className="overflow-x-auto">
            <TicketsList tickets={tickets} />
          </div>
        </section>
      ) : (
        <div
          className="flex flex-col items-center justify-center py-12 sm:py-16 px-4 text-center text-neutral-400
                     bg-tertiary-300 rounded-radius-medium border border-tertiary-500"
        >
          <p className="text-base sm:text-lg font-semibold text-neutral-200">
            هنوز هیچ تیکتی ثبت نکردی 😅
          </p>
          <p className="text-xs sm:text-sm mt-2 text-neutral-400">
            برای ارسال درخواست جدید از بخش زیر اقدام کن.
          </p>
        </div>
      )}

      <section
        className="bg-tertiary-300 border border-tertiary-500
                   rounded-radius-medium shadow-sm p-4 sm:p-8"
      >
        <h5 className="text-lg sm:text-xl font-bold text-neutral-100 text-center mb-6 sm:mb-8">
          ارسال تیکت جدید
        </h5>
        <AddTicket userId={user.userId} />
      </section>
    </div>
  );
}
