"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { ease } from "@/lib/motion";

export default function PostCard({ post, index = 0 }) {
  const Wrapper = post.href ? motion.a : motion.article;
  const linkProps = post.href ? { href: post.href } : {};

  return (
    <Wrapper
      {...linkProps}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between gap-8 rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-violet/60"
    >
      <div>
        <div className="flex items-center justify-between text-sm text-muted">
          <span className="rounded-full border border-line px-3 py-1 text-violet-soft">{post.tag}</span>
          <span>{post.date}</span>
        </div>
        <h3 className="font-display mt-6 text-xl font-semibold leading-snug">{post.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{post.summary}</p>
      </div>
      <div className="flex items-center justify-between text-sm text-muted">
        <span>{post.read}</span>
        {post.href && (
          <FiArrowUpRight className="text-lg transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        )}
      </div>
    </Wrapper>
  );
}
