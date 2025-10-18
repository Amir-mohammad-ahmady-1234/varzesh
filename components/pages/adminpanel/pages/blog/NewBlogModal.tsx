"use client";

import React, { startTransition, useEffect, useState } from "react";
import Modal from "../../../../common/Modal";
import Input from "../../../../common/Input";
import Textarea from "../../../../common/ui/Textarea";
import { CreateBlog } from "../../../../../lib/actions/blog/CreateBlog";
import type { BlogFormState } from "../../../../../lib/actions/blog/CreateBlog";
import LoadingButton from "../../../../common/LoadingButton";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// types come from server action module

const initialState: BlogFormState = {
  message: {},
};

export default function NewBlogModal({ isModalOpen, setIsModalOpen }: Props) {
  const [state, setState] = useState<BlogFormState>(initialState);
  const [isLoading, setIsLoading] = useState(false);

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
      title="بلاگ جدید"
    >
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);

          setIsLoading(true);

          startTransition(async () => {
            const result = await CreateBlog(state, formData);
            setState(result);
            setIsLoading(false);
          });
        }}
        className="flex flex-col gap-10"
      >
        <div className="flex gap-8">
          <Input
            placeholder="عنوان مقاله"
            title="عنوان مقاله"
            name="title"
            err={state.message.title}
          />
          <Input
            placeholder="دسته بندی بلاگ"
            title="دسته بندی"
            name="category"
            err={state.message.category}
          />
        </div>
        <div className="flex gap-8">
          <Input
            placeholder="پروفایل نویسنده"
            title="پروفایل"
            name="profile"
            type="file"
            err={state.message.profile}
          />
          <Input
            placeholder="تصویر مقاله"
            title="تصویر مقاله"
            name="image"
            type="file"
            err={state.message.img}
          />
        </div>
        <div className="flex gap-8">
          <Input
            placeholder="نام نویسنده"
            name="author"
            title="نام نویسنده"
            err={state.message.author}
          />
          <Input
            placeholder="خلاصه مقاله"
            name="summary"
            title="خلاصه مقاله"
            err={state.message.summary}
          />
        </div>

        <Textarea
          name="content"
          className="rounded-xl border border-primary-100"
          rows={5}
          placeholder="متن مقاله"
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

        <LoadingButton btnText="ایجاد بلاگ" isLoading={isLoading} />
      </form>
    </Modal>
  );
}
