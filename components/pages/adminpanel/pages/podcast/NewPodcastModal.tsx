"use client";

import React, { startTransition, useEffect, useState } from "react";
import Modal from "../../../../common/Modal";
import Input from "../../../../common/Input";
import Textarea from "../../../../common/ui/Textarea";
import { CreatePodcast, PodcastFormState } from "../../../../../lib/actions/podcast/CreatePodcast";
import LoadingButton from "../../../../common/LoadingButton";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: PodcastFormState = {
  message: {},
};

export default function NewPodcastModal({
  isModalOpen,
  setIsModalOpen,
}: Props) {
  const [state, setState] = useState<PodcastFormState>(initialState);
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
      title="پادکست جدید"
    >
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);

          setIsLoading(true);

          startTransition(async () => {
            const result = await CreatePodcast(state, formData);
            setState(result);
            setIsLoading(false);
          });
        }}
        className="flex flex-col gap-10"
      >
        <div className="flex gap-8">
          <Input
            placeholder="عنوان پادکست"
            title="عنوان پادکست"
            name="title"
            err={state.message.title}
          />
          <Input
            placeholder="دسته بندی پادکست"
            title="دسته بندی"
            name="category"
            err={state.message.category}
          />
        </div>

        <div className="flex gap-8">
          <Input
            placeholder="تصویر"
            title="تصویر"
            name="image"
            type="file"
            err={state.message.img}
          />
          <Input
            placeholder="فایل صوتی"
            title="فایل صوتی"
            name="audio"
            type="file"
            err={state.message.audio}
          />
        </div>

        <div className="w-1/2">
          <Input
            placeholder="خلاصه"
            name="summary"
            title="خلاصه"
            err={state.message.summary}
          />
        </div>

        <Textarea
          name="content"
          className="rounded-xl border border-primary-100"
          rows={5}
          placeholder="توضیحات"
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
        <LoadingButton btnText="ایجاد پادکست" isLoading={isLoading} />
      </form>
    </Modal>
  );
}
