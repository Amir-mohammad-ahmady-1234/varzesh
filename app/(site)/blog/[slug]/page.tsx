import React from "react";
import { BlogByIdUser } from "../../../../server/user/paneluser/blog/BlogByIdUser";
import Image from "next/image";
import BackToHome from "../../../../components/pages/home/blog/BackToHome";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;
  const blog = await BlogByIdUser(+slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-color-neutral-200 font-IRANYekan">
        <h1 className="text-2xl font-semibold mb-3">🫤 بلاگی یافت نشد</h1>
        <BackToHome />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-color-bg-primary text-color-neutral-100 font-IRANYekan py-10 px-5 md:px-10 lg:px-24">
      {/* Header Image */}
      <div className="relative w-full h-[300px] md:h-[450px] rounded-radius-medium overflow-hidden shadow-lg">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-5">
          <span className="bg-color-primary-200 text-white px-4 py-1 rounded-radius-small text-sm font-semibold shadow">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-color-primary-100 mb-4 leading-tight">
          {blog.title}
        </h1>
        <p className="text-color-neutral-300 text-base md:text-lg leading-relaxed mb-6">
          {blog.summary}
        </p>

        <div className="flex items-center gap-3 mb-10">
          <Image
            src={blog.profile}
            alt={blog.author}
            width={48}
            height={48}
            className="rounded-full border border-color-tertiary-400"
          />
          <div>
            <p className="text-color-neutral-200 font-semibold">
              {blog.author}
            </p>
            <p className="text-color-neutral-400 text-sm">نویسنده</p>
          </div>
        </div>

        <article className="text-color-neutral-200 leading-8 text-justify text-[1.05rem]">
          {blog.description}
        </article>

        <div className="mt-16 flex justify-center">
          <BackToHome />
        </div>
      </div>
    </section>
  );
}
