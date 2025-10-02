"use client";

import React, { startTransition, useEffect, useState } from "react";
import Modal from "../../../../common/Modal";
import Input from "../../../../common/Input";
import Textarea from "../../../../common/ui/Textarea";
import type { BlogFormState } from "../../../../../lib/actions/blog/CreateBlog";
import Button from "../../../../common/Button";
import { CreateNewsCart } from "../../../../../lib/actions/news/CreateNews";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// types come from server action module

const initialState: BlogFormState = {
  message: {},
};

export default function NewNewsModal({ isModalOpen, setIsModalOpen }: Props) {
  const [state, setState] = useState<BlogFormState>(initialState);

  useEffect(() => {
    if (state.message.success) {
      setIsModalOpen(false);
    }
  }, [state.message.success, setIsModalOpen]);

  return (
    <Modal
      size="xl"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="اخبار جدید"
    >
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);

          startTransition(async () => {
            const result = await CreateNewsCart(state, formData);
            setState(result);
          });
        }}
        className="flex flex-col gap-10"
      >
        <div className="flex gap-8">
          <Input
            placeholder="عنوان خبر"
            title="عنوان خبر"
            name="title"
            err={state.message.title}
          />
        </div>
        <div className="flex gap-8">
          <Input
            placeholder="وضعیت خبر"
            title="وضعیت"
            name="status"
            err={state.message.status}
          />
          <Input
            placeholder="تصویر خبر"
            title="تصویر خبر"
            name="image"
            type="file"
            err={state.message.img}
          />
        </div>
        <div className="w-1/2">
          <Input
            placeholder="خلاصه خبر"
            name="summary"
            title="خلاصه خبر"
            err={state.message.summary}
          />
        </div>

        <Textarea
          name="content"
          className="rounded-xl border border-primary-100"
          rows={5}
          placeholder="متن خبر"
        />
        <p className="text-error-500 text-sm">
          {state.message.description && state.message.description}
        </p>
        <p className="text-error-500 text-sm">
          {state.message.otherErr && state.message.otherErr}
        </p>
        {state.message.success && (
          <p className="text-success-600 text-sm">{state.message.success}</p>
        )}

        <Button type="submit">ایجاد</Button>
      </form>
    </Modal>
  );
}
