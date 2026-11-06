"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

export default function SectionHeading({ title, intro }) {
  const words = title.split(" ");

  return (
    <div className="mb-14 max-w-3xl md:mb-20">
      <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="flex flex-wrap gap-x-[0.28em]"
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.12em]">
              <motion.span
                className="inline-block"
                variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 0.85, ease } } }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </h2>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mt-5 max-w-xl text-lg text-muted"
        >
          {intro}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease, delay: 0.2 }}
        className="accent-line mt-8 h-px origin-left"
      />
    </div>
  );
}
