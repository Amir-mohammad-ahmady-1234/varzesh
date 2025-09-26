import React from "react";
import LastNews from "./LastNews/LastNews";
import SummaryGamePlay from "./SummaryGame/SummaryGamePlay";
import BlogsGame from "./blogs/BlogsGame";
import ClubRanking from "./club-ranking/ClubRanking";

function HomeNews() {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8">
      <h4 className="font-bold text-xl">اخرین اخبار</h4>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="md:w-1/2">
          <LastNews />
        </div>
        <div className="md:w-1/2">
          <ClubRanking />
        </div>
      </div>

      <SummaryGamePlay />
      <BlogsGame />
    </div>
  );
}

export default HomeNews;
