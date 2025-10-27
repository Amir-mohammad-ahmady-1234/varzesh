import React from "react";
import { BlogByIdUser } from "../../../../server/user/paneluser/blog/BlogByIdUser";
import Image from "next/image";
import BackToHome from "../../../../components/pages/home/blog/BackToHome";

export default async function BlogContent({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;
  const blog = await BlogByIdUser(+slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-neutral-200 font-IRANYekan">
        <h1 className="text-xl md:text-2xl font-bold mb-4">🫤 بلاگی یافت نشد</h1>
        <BackToHome />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-bg-primary text-neutral-100 font-IRANYekan py-6 px-4 md:px-8 lg:px-20">
      {/* Header Image */}
      <div className="relative w-full h-52 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 flex items-end p-3 md:p-5">
          <span className="bg-primary-600 text-white px-2 py-0.5 rounded text-md font-semibold shadow">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto mt-6 md:mt-10 space-y-5">
        {/* Title */}
        <h5 className="text-xl md:text-2xl font-bold text-primary-100 leading-snug md:leading-normal">
          {blog.title}
        </h5>

        {/* Summary */}
        <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
          {blog.summary}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mb-5">
          <Image
            src={blog.profile}
            alt={blog.author}
            width={40}
            height={40}
            className="rounded-full border border-tertiary-400"
          />
          <div>
            <p className="text-neutral-200 font-semibold text-sm md:text-base">
              {blog.author}
            </p>
            <p className="text-neutral-400 text-xs md:text-sm">نویسنده</p>
          </div>
        </div>

        {/* Description */}
        <article className="text-neutral-200 leading-relaxed text-sm md:text-base text-justify md:leading-relaxed space-y-3">
          {blog.description}
        </article>

        {/* Back Button */}
        <div className="mt-10 flex justify-center">
          <BackToHome />
        </div>
      </div>
    </section>
  );
}
