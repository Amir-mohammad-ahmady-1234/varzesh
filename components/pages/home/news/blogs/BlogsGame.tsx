import React from "react";
import { GetBlogs } from "../../../../../lib/actions/blog/GetBlogs";
import BlogSlider from "./BlogSlider";
import SectionContainer from "../../../../common/home/ContentHome";

async function BlogsGame() {
  const blogs = await GetBlogs();

  return (
    <div className="flex flex-col gap-6 m-10">
      <SectionContainer title="مقالات ورزشی">
        <BlogSlider blogs={blogs} />
      </SectionContainer>
    </div>
  );
}

export default BlogsGame;
