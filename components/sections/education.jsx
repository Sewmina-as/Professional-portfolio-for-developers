"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { education } from "@/data/education";
import { ease } from "@/lib/motion";

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="wrap">
        <SectionHeading title="Where I studied" />
        <div className="border-t border-line">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="group relative grid gap-3 border-b border-line py-9 md:grid-cols-[12rem_1fr] md:gap-10"
            >
              <span aria-hidden="true" className="accent-line absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
              <p className="text-sm text-violet-soft md:pt-2">{item.period}</p>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                  {item.title}
                </h3>
                <p className="mt-1 text-white/80">{item.place}</p>
                <p className="mt-3 max-w-xl text-muted">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
