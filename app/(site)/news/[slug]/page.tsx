import React, { Suspense } from "react";
import SkeletonBlog from "../../../../components/skeletons/SkeletonBlog";
import LatestNewsContent from "../../../../components/pages/home/news/LastNews/LatestNewsContent";

export default async function newsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<SkeletonBlog />}>
      <LatestNewsContent params={params} />
    </Suspense>
  );
}
