"use server";

import { BlogGet } from "../../../server/admin/paneladmin/blog/BlogGet";

export async function GetBlogs() {
  return await BlogGet();
}

