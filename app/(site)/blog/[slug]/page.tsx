import React, { Suspense } from "react";
import BlogContent from "../../../../components/pages/home/blog/BlogContent";
import SkeletonBlog from "../../../../components/pages/home/blog/SkeletonBlog";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  return (
    <Suspense fallback={<SkeletonBlog />}>
      <BlogContent params={params} />
    </Suspense>
  );
}
