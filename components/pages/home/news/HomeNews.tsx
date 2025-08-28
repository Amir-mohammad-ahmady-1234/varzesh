import React from "react";
import LastNews from "./LastNews/LastNews";
import SummaryGamePlay from "./SummaryGame/SummaryGamePlay";
import BlogsGame from "./blogs/BlogsGame";

function HomeNews() {
  return (
    <>
      <LastNews />
      <SummaryGamePlay />
      <BlogsGame />
    </>
  );
}

export default HomeNews;
