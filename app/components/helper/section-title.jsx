"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

// The original pill-and-lines heading, now animated on scroll.
function SectionTitle({ title, size = "md" }) {
  return (
    <div className="flex justify-center my-5 lg:py-8">
      <div className="flex items-center">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="w-24 h-[2px] bg-[#1a1443] origin-right"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className={`bg-[#1a1443] w-fit text-white p-2 px-5 rounded-md ${size === "lg" ? "text-2xl" : "text-xl"}`}
        >
          {title}
        </motion.span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="w-24 h-[2px] bg-[#1a1443] origin-left"
        />
      </div>
    </div>
  );
}

export default SectionTitle;
