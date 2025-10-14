"use client";

import React, { useState } from "react";
import Input from "../../../../common/Input";
import { ticketValidation } from "../../../../../lib/validations/ticket";
import { createTicketAction } from "../../../../../lib/actions/ticket/createTicketAction";

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

    setFields({
      title: "",
      priority: "NORMAL",
      status: "Waiting",
      description: "",
      error: {},
    });
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-extrabold text-neutral-100 text-center mb-8">
        ارسال مشکل به پشتیبانی سایت
      </h3>

      <form
        onSubmit={handleSubmit}
        className="bg-tertiary-300 border border-tertiary-500 rounded-[8px] shadow-sm p-6 flex flex-col gap-6"
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
            className="block text-sm font-semibold text-neutral-200 mb-2"
          >
            شرح مشکل
          </label>
          <textarea
            id="ticket-desc"
            name="description"
            placeholder="مشکل خود را به طور کامل توضیح دهید..."
            value={fields.description}
            onChange={handleChange}
            className={`w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all resize-none min-h-[130px]
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            placeholder="کم، متوسط، زیاد"
            title="اولویت"
            name="priority"
            value={fields.priority}
            changeFn={handleChange}
            err={fields.error.priority}
          />
          <Input
            placeholder="باز، در انتظار، بسته"
            title="وضعیت"
            name="status"
            value={fields.status}
            changeFn={handleChange}
            err={fields.error.status}
          />
        </div>

        {fields.error.general && (
          <p className="text-sm text-error-500">{fields.error.general}</p>
        )}

        <button
          type="submit"
          className="w-full font-bold rounded-[8px] py-3 mt-4 text-neutral-100 bg-primary-100 hover:bg-primary-300
          transition-all shadow-md cursor-pointer"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}
