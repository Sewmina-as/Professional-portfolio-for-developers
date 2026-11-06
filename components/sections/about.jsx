"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/ui/reveal";
import ScrollFillText from "@/components/ui/scroll-fill-text";
import SectionHeading from "@/components/ui/section-heading";
import { disciplines, facts, statement } from "@/data/about";
import { ease } from "@/lib/motion";

function Discipline({ item, open, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className={`font-display text-xl font-semibold transition-colors ${open ? "text-white" : "text-white/70"}`}>
          {item.title}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease }}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-lg leading-none text-violet-soft"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden"
          >
            <p className="max-w-lg pb-6 leading-relaxed text-muted">{item.body}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function About() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="about" className="relative scroll-mt-24 py-28 md:py-40">
      <div className="wrap">
        <SectionHeading title="Who I am" />
        <ScrollFillText
          text={statement}
          className="font-display max-w-4xl text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl md:text-5xl"
        />

        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h3 className="font-display mb-4 text-lg font-semibold text-muted">What I do</h3>
            <div className="border-t border-line">
              {disciplines.map((item, i) => (
                <Discipline
                  key={item.title}
                  item={item}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-display mb-4 text-lg font-semibold text-muted">At a glance</h3>
            <dl className="border-t border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="font-medium text-white/90">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
