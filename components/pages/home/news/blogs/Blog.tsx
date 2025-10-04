import React from "react";
import Image from "next/image";
import { CiSaveDown2 } from "react-icons/ci";
import { BlogType } from "./BlogSlider";

export default function Blog({ blog }: { blog: BlogType }) {
  return (
    <div className="flex flex-col gap-6 w-full h-[400px] md:h-[450px] p-4 bg-tertiary-300 rounded-md">
      <div className="relative w-full aspect-[16/10] rounded-md overflow-hidden">
        <Image src={blog.img} alt={blog.title} fill className="object-cover" />
        <span className="absolute top-2 right-2  text-xs px-3 py-1  border">
          {blog.category}
        </span>
      </div>

      <div className="flex flex-col gap-4 flex-1 justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative size-11 aspect-square flex-shrink-0">
              <Image
                alt={blog.author}
                src={blog.profile}
                fill
                className="rounded-full object-cover"
              />
            </div>

            <span>{blog.author}</span>
          </div>

          <CiSaveDown2 className="scale-140 hover:scale-160 ml-2 cursor-pointer" />
        </div>

        <div className="flex flex-col justify-between flex-1">
          <p className="text-xl font-semibold mb-4">{blog.title}</p>

          <div className="flex justify-between items-end gap-2 mt-auto">
            <p className="opacity-40 line-clamp-3 text-justify">{blog.summary}</p>
            <span className="text-secondary-100 !opacity-100 flex-shrink-0 cursor-pointer">
              بیشتر
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 
