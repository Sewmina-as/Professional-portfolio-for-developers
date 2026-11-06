"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";
import { ease } from "@/lib/motion";

const group = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const chip = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="wrap">
        <SectionHeading title="What I work with" intro="Tools I use to take an idea from requirements to a running product." />

        <div className="divide-y divide-line border-y border-line">
          {skillGroups.map((g) => (
            <motion.div
              key={g.title}
              variants={group}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-5 py-8 md:grid-cols-[14rem_1fr] md:gap-10"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } } }}>
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                <p className="mt-1 text-sm text-muted">{g.note}</p>
              </motion.div>
              <div className="flex flex-wrap gap-3">
                {g.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={chip}
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="cursor-default rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-violet hover:bg-violet/15 hover:text-white"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
