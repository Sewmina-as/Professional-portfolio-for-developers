"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/section-heading";
import { experiences } from "@/data/experience";
import { ease } from "@/lib/motion";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

  return (
    <section id="experience" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="wrap">
        <SectionHeading title="Where I have worked" intro="Roles, projects and coursework where I owned real parts of the build." />

        <div ref={ref} className="relative max-w-3xl pl-9 md:pl-14">
          <div aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-line md:left-[11px]" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY, background: "linear-gradient(to bottom, #804dee, #b9a1ff)" }}
            className="absolute bottom-2 left-[7px] top-2 w-px origin-top md:left-[11px]"
          />

          <ol className="space-y-14">
            {experiences.map((item) => (
              <li key={item.id} className="relative">
                <motion.span
                  aria-hidden="true"
                  initial={{ scale: 0.4, backgroundColor: "#060914" }}
                  whileInView={{ scale: 1, backgroundColor: "#804dee" }}
                  viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                  transition={{ duration: 0.5, ease }}
                  className="absolute -left-9 top-1.5 h-4 w-4 rounded-full border-2 border-violet md:-left-14 md:h-6 md:w-6"
                />
                <motion.div
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease }}
                >
                  <p className="text-sm text-violet-soft">{item.period}</p>
                  <h3 className="font-display mt-1 text-2xl font-semibold tracking-tight">{item.role}</h3>
                  <p className="mt-1 text-muted">{item.org}</p>
                  <ul className="mt-4 space-y-2 text-white/80">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-violet-soft" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
