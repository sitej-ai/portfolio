// @flow strict

import { blogPosts } from "@/utils/data/blog-posts";
import Link from "next/link";
import BlogCard from "../components/homepage/blog/blog-card";
import { FaArrowLeft } from "react-icons/fa";

function page() {
  return (
    <div className="py-8">
      <div className="mb-6">
        <Link
          href="/#blogs"
          className="inline-flex items-center gap-2 rounded-full border border-[#16f2b3]/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#16f2b3] transition-all hover:border-[#16f2b3] hover:bg-[#16f2b3]/10"
        >
          <FaArrowLeft size={13} />
          <span>Back to portfolio</span>
        </Link>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogPosts.map((blog, i) => (
            <BlogCard blog={blog} key={blog.id || i} priority={i < 3} />
          ))
        }
      </div>
    </div>
  );
};

export default page;