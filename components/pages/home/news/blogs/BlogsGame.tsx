import React from "react";
import { GetBlogs } from "../../../../../lib/actions/blog/GetBlogs";
import BlogSlider from "./BlogSlider";

async function BlogsGame() {
  const blogs = await GetBlogs();

  return (
    <div className="flex flex-col gap-6 m-10">
      <h6 className="underline decoration-[#FF8E25] underline-offset-[15px] font-semibold">
        مقالات ورزشی
      </h6>

      <BlogSlider blogs={blogs} />
    </div>
  );
}

export default BlogsGame;
