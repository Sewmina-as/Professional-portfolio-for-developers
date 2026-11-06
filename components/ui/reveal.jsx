"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
