"use client";
// @flow strict
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function BlogCard({ blog, index = 0 }) {
  const title = (
    <p className='my-2 lg:my-3 text-lg text-white sm:text-xl font-medium group-hover:text-violet-500 transition-colors'>
      {blog.title}
    </p>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="border border-[#1d293a] hover:border-[#464c6a] transition-colors duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto overflow-hidden rounded-t-lg relative">
        <Image
          src={blog.cover}
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          unoptimized={blog.cover.endsWith('.svg')}
          className='object-cover group-hover:scale-110 transition-all duration-500'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{blog.date}</p>
          <p className="rounded-full border border-[#2a2e5a] px-3 py-0.5 text-xs text-violet-300">{blog.tag}</p>
        </div>
        {blog.url ? <Link target='_blank' href={blog.url}>{title}</Link> : title}
        <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${blog.reading_time} Min Read`}
        </p>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>
      </div>
    </motion.div>
  );
};

export default BlogCard;
