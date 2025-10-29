"use client";

import React, { useState } from "react";
import Input from "../../../../common/Input";
import { ticketValidation } from "../../../../../lib/validations/ticket";
import { createTicketAction } from "../../../../../lib/actions/ticket/createTicketAction";
import toast from "react-hot-toast";

interface AddTicketProps {
  userId: number;
}

interface FieldsType {
  title: string;
  priority: "LOW" | "NORMAL" | "HIGH";
  status: "Open" | "Waiting" | "Approved" | "Blocked";
  description: string;
  error: Record<string, string>;
}

export default function AddTicket({ userId }: AddTicketProps) {
  const [fields, setFields] = useState<FieldsType>({
    title: "",
    priority: "NORMAL",
    status: "Waiting",
    description: "",
    error: {},
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFields((prev) => ({ ...prev, error: {} }));

    const validateData = ticketValidation.safeParse(fields);

    if (!validateData.success) {
      const fieldErrors: Record<string, string> = {};
      validateData.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });
      setFields((prev) => ({ ...prev, error: fieldErrors }));
      return;
    }

    const data = { ...fields, userId };
    const { error } = await createTicketAction(data);

    if (error) {
      setFields((prev) => ({ ...prev, error: { general: error } }));
      return;
    }

    toast.success("تیکت با موفقیت ثبت شد");

    setFields({
      title: "",
      priority: "NORMAL",
      status: "Waiting",
      description: "",
      error: {},
    });
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <h6 className="text-xl sm:text-2xl font-extrabold text-neutral-100 text-center mb-8">
        ارسال مشکل به پشتیبانی سایت
      </h6>

      <form
        onSubmit={handleSubmit}
        className="bg-tertiary-300 border border-tertiary-500 
                   rounded-radius-medium shadow-sm p-4 sm:p-6 md:p-8 flex flex-col gap-6"
      >
        <Input
          placeholder="برای مثال: خطا در ورود به حساب کاربری"
          title="عنوان مشکل"
          name="title"
          value={fields.title}
          changeFn={handleChange}
          err={fields.error.title}
        />

        <div>
          <label
            htmlFor="ticket-desc"
            className="block text-sm sm:text-base font-semibold text-neutral-200 mb-2"
          >
            شرح مشکل
          </label>
          <textarea
            id="ticket-desc"
            name="description"
            placeholder="مشکل خود را به طور کامل توضیح دهید..."
            value={fields.description}
            onChange={handleChange}
            className={`w-full border rounded-[10px] px-4 py-3 text-sm sm:text-base leading-relaxed
                        focus:outline-none focus:ring-2 transition-all resize-none min-h-[160px]
                        ${
                          fields.error.description
                            ? "border-error-500 focus:ring-error-400"
                            : "border-tertiary-500 focus:ring-primary-300"
                        }
                        bg-tertiary-200 text-neutral-100 placeholder:text-neutral-500`}
          />
          {fields.error.description && (
            <p className="text-sm text-error-500 mt-1">
              {fields.error.description}
            </p>
          )}
        </div>

        {/* اولویت و وضعیت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* اولویت */}
          <div>
            <label
              htmlFor="priority"
              className="block text-sm sm:text-base font-semibold text-neutral-200 mb-2"
            >
              اولویت
            </label>
            <select
              id="priority"
              name="priority"
              value={fields.priority}
              onChange={handleChange}
              className={`w-full border rounded-[10px] px-4 py-3 text-sm sm:text-base bg-tertiary-200 
                          text-neutral-100 focus:outline-none focus:ring-2 transition-all
                          ${
                            fields.error.priority
                              ? "border-error-500 focus:ring-error-400"
                              : "border-tertiary-500 focus:ring-primary-300"
                          }`}
            >
              <option value="LOW">کم</option>
              <option value="NORMAL">متوسط</option>
              <option value="HIGH">زیاد</option>
            </select>
            {fields.error.priority && (
              <p className="text-sm text-error-500 mt-1">
                {fields.error.priority}
              </p>
            )}
          </div>

          {/* وضعیت */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm sm:text-base font-semibold text-neutral-200 mb-2"
            >
              وضعیت
            </label>
            <select
              id="status"
              name="status"
              value={fields.status}
              onChange={handleChange}
              className={`w-full border rounded-[10px] px-4 py-3 text-sm sm:text-base bg-tertiary-200 
                          text-neutral-100 focus:outline-none focus:ring-2 transition-all
                          ${
                            fields.error.status
                              ? "border-error-500 focus:ring-error-400"
                              : "border-tertiary-500 focus:ring-primary-300"
                          }`}
            >
              <option value="Open">باز</option>
              <option value="Waiting">در انتظار</option>
              <option value="Approved">تأیید شده</option>
              <option value="Blocked">مسدود شده</option>
            </select>
            {fields.error.status && (
              <p className="text-sm text-error-500 mt-1">
                {fields.error.status}
              </p>
            )}
          </div>
        </div>

        {fields.error.general && (
          <p className="text-sm text-error-500 text-center">
            {fields.error.general}
          </p>
        )}

        <button
          type="submit"
          className="w-full font-bold rounded-[10px] py-3 sm:py-3.5 mt-2
                     text-neutral-100 bg-primary-100 hover:bg-primary-300
                     transition-all shadow-md active:scale-[0.98]"
        >
          ارسال تیکت
        </button>
      </form>
    </div>
  );
}
