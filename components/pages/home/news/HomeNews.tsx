import React, { Suspense } from "react";
import LastNews from "./LastNews/LastNews";
import SummaryGamePlay from "./SummaryGame/SummaryGamePlay";
import BlogsGame from "./blogs/BlogsGame";
import ClubRanking from "./club-ranking/ClubRanking";
import SectionContainer from "../../../common/home/ContentHome";
import LastNewsSkeleton from "../../../skeletons/LastNewsSkeleton";
import BlogSliderSkeleton from "../../../skeletons/BlogSliderSkeleton";

function HomeNews() {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="md:w-1/2">
          <SectionContainer title="اخرین اخبار">
            <Suspense fallback={<LastNewsSkeleton />}>
              <LastNews />
            </Suspense>
          </SectionContainer>
        </div>
        <div className="md:w-1/2">
          <ClubRanking />
        </div>
      </div>

      <SummaryGamePlay />
      <Suspense fallback={<BlogSliderSkeleton />}>
        <BlogsGame />
      </Suspense>
    </div>
  );
}

export default HomeNews;
