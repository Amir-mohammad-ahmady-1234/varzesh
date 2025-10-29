import React from "react";
import { GetNewsById } from "../../../../../server/user/paneluser/news/GetNewsById";
import BackToHome from "../../blog/BackToHome";
import Image from "next/image";

export default async function LatestNewsContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = Number(slug);

  const news = await GetNewsById(id);

  const isValidNews =
    news &&
    typeof news === "object" &&
    "id" in news &&
    "img" in news &&
    "title" in news;

  if (!isValidNews) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-color-neutral-200 font-IRANYekan">
        <h1 className="text-2xl font-semibold mb-3">🫤 خبری یافت نشد</h1>
        <BackToHome />
      </div>
    );
  }

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Simple":
        return "bg-[var(--color-primary-500)]/15 text-[var(--color-primary-500)]";
      case "Medium":
        return "bg-[var(--color-secondary-100)]/15 text-[var(--color-secondary-100)]";
      case "Special":
        return "bg-[var(--color-success-500)]/15 text-[var(--color-success-500)]";
      default:
        return "bg-[var(--color-neutral-400)]/10 text-[var(--color-neutral-400)]";
    }
  };

  const validNews = news as {
    id: number;
    status: string;
    createdAt: Date;
    title: string;
    description: string;
    img: string;
    summary: string;
  };

  return (
    <section className="max-w-[1000px] mx-auto mt-10 mb-20 px-4 tablet:px-6 laptop:px-8">
      <div className="flex flex-col gap-6 bg-[var(--color-tertiary-200)] rounded-[var(--radius-large)] shadow-md overflow-hidden transition-all duration-400 hover:shadow-lg">
        <div className="relative w-full h-[230px] tablet:h-[350px] laptop:h-[450px] overflow-hidden">
          <Image
            src={validNews.img}
            alt={validNews.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-4 p-5">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <span
              className={`text-sm px-3 py-1 rounded-[var(--radius-extrasmall)] font-semibold ${getStatusColor(
                validNews.status
              )}`}
            >
              {validNews.status === "Simple"
                ? "عادی"
                : validNews.status === "Medium"
                ? "مهم"
                : "ویژه"}
            </span>

            <time className="text-sm text-[var(--color-neutral-400)]">
              {formatDate(validNews.createdAt)}
            </time>
          </div>

          <h1 className="text-2xl tablet:text-3xl font-bold text-[var(--color-neutral-100)] leading-snug">
            {validNews.title}
          </h1>

          <p className="text-base text-[var(--color-neutral-200)] leading-relaxed">
            {validNews.description}
          </p>

          <div className="bg-[var(--color-tertiary-300)]/40 border border-[var(--color-tertiary-500)]/20 rounded-[var(--radius-medium)] p-4">
            <h3 className="font-semibold text-[var(--color-neutral-100)] mb-2">
              خلاصه خبر
            </h3>
            <p className="text-[var(--color-neutral-300)] leading-relaxed">
              {validNews.summary}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <BackToHome />
      </div>
    </section>
  );
}
