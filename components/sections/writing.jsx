import Link from "next/link";
import PostCard from "@/components/ui/post-card";
import SectionHeading from "@/components/ui/section-heading";
import { posts } from "@/data/posts";

export default function Writing() {
  return (
    <section id="writing" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="wrap">
        <SectionHeading title="Notes and writing" intro="Short write-ups on what I build and what I learn along the way." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </div>
        <Link href="/blog" className="mt-10 inline-block text-sm text-violet-soft underline-offset-4 transition hover:text-white hover:underline">
          See all writing
        </Link>
      </div>
    </section>
  );
}
