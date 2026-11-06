"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import Magnetic from "@/components/ui/magnetic";
import { site } from "@/data/site";
import { ease } from "@/lib/motion";
import HeroPortrait from "./hero-portrait";

const nameContainer = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } };
const nameLine = { hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 1.1, ease } } };

function FocusRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((v) => (v + 1) % site.focus.length), 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={site.focus[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease }}
          className="whitespace-nowrap text-violet-soft"
        >
          {site.focus[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-[100svh] items-center pb-16 pt-32">
      <motion.div style={{ y, opacity }} className="wrap grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            {...rise(0.1)}
            className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-4 text-sm text-white/90"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            {site.availability}
          </motion.div>

          <h1 className="font-display mt-8 text-[clamp(3.4rem,10.5vw,8rem)] font-bold leading-[0.92] tracking-[-0.045em]">
            <motion.span variants={nameContainer} initial="hidden" animate="show" className="block">
              {[site.firstName, site.lastName].map((word) => (
                <span key={word} className="block overflow-hidden pb-[0.1em]">
                  <motion.span variants={nameLine} className="block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.span>
          </h1>

          <motion.p {...rise(0.75)} className="font-display mt-6 text-xl font-medium text-white/90 sm:text-2xl">
            {site.title}. Focused on <FocusRotator />
          </motion.p>

          <motion.p {...rise(0.9)} className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {site.intro}
          </motion.p>

          <motion.div {...rise(1.05)} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link
                href="/#projects"
                className="accent-fill group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(128,77,238,0.8)] transition hover:brightness-110"
              >
                View my work
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href={site.resume}
                download
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-violet hover:bg-violet/10"
              >
                Download CV
                <FiDownload className="transition group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <div className="ml-1 flex items-center gap-2">
              {[
                { href: site.github, label: "GitHub", Icon: FaGithub },
                { href: site.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
                { href: `mailto:${site.email}`, label: "Email", Icon: FiMail },
              ].map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-violet hover:text-white"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <HeroPortrait />
      </motion.div>

      <motion.div
        aria-hidden="true"
        {...rise(1.8)}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted lg:flex"
      >
        Scroll
        <span className="relative block h-10 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-violet-soft"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
