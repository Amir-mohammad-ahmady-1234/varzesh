import React, { startTransition, useActionState } from "react";
import Modal from "../../../../common/Modal";
import Input from "../../../../common/Input";
import Textarea from "../../../../common/ui/Textarea";
import { CreateBlog } from "../../../../../lib/actions/blog/CreateBlog";
import Button from "../../../../common/Button";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Blog {
  id: number;
  title: string;
  description: string;
  profile: string;
  img: string;
  category: string;
  summary: string;
}

export interface BlogFormState {
  message: {
    title?: string;
    category?: string;
    profile?: string;
    img?: string;
    summary?: string;
    description?: string;
    otherErr?: string;
    success?: string;
    blog?: Blog;
  };
}

const initialState: BlogFormState = {
  message: {},
};

export default function NewBlogModal({ isModalOpen, setIsModalOpen }: Props) {
  const [state, formAction] = useActionState<BlogFormState>(
    CreateBlog,
    initialState
  );

  return (
    <Modal
      size="xl"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="بلاگ جدید"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);

          startTransition(() => {
            formAction(formData);
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
        <div className="w-1/2">
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

        <Button type="submit">ایجاد بلاگ</Button>
      </form>
    </Modal>
  );
}
