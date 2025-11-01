import React, { Suspense } from "react";
import BlogContent from "../../../../components/pages/home/blog/BlogContent";
import SkeletonBlog from "../../../../components/pages/home/blog/SkeletonBlog";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `مقاله شماره ${slug} | وبلاگ Varzesh`,
    description:
      "مقاله‌ای از وبلاگ Varzesh در مورد جدیدترین تحلیل‌ها، اخبار و مطالب دنیای ورزش.",
    url: `https://varzesh-frg6.vercel.app/blog/${slug}`,
    inLanguage: "fa",
    author: {
      "@type": "Person",
      name: "تحریریه Varzesh",
      url: "https://varzesh-frg6.vercel.app/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Varzesh",
      url: "https://varzesh-frg6.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://varzesh-frg6.vercel.app/assets/img/logo.png",
      },
    },
    image: "https://varzesh-frg6.vercel.app/assets/img/blog/default.png",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://varzesh-frg6.vercel.app/blog/${slug}`,
    },
    datePublished: "2025-10-31",
    dateModified: "2025-10-31",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Suspense fallback={<SkeletonBlog />}>
        <BlogContent params={params} />
      </Suspense>
    </>
  );
}
