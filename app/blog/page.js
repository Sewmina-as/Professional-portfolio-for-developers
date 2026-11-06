// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { posts } from "@/utils/data/posts";
import BlogCard from "../components/homepage/blog/blog-card";
import SectionTitle from "../components/helper/section-title";

export const metadata = { title: `All Blogs | ${personalData.fullName}` };

function page() {
  return (
    <div className="py-8">
      <SectionTitle title="All Blogs" size="lg" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {posts.map((blog, i) => (
          <BlogCard blog={blog} key={blog.id} index={i} />
        ))}
      </div>
    </div>
  );
}

export default page;
