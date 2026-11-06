"use client";
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import CodeWindow from "../../helper/code-window";
import Magnetic from "../../helper/magnetic";
import Typewriter from "../../helper/typewriter";

const ease = [0.22, 1, 0.36, 1];
const rise = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

// Token colours used in the code card.
const color = {
  kw: "text-pink-500",
  id: "text-white",
  p: "text-gray-400",
  str: "text-amber-300",
  val: "text-orange-400",
  ok: "text-green-400",
  self: "text-cyan-400",
};

const skills = ["Python", "FastAPI", "Java", "React", "NextJS", "PostgreSQL", "PyTorch", "Docker"];

const lines = [
  { i: 0, t: [["kw", "const"], ["id", "coder"], ["kw", "="], ["p", "{"]] },
  { i: 1, t: [["id", "name:"], ["str", "'Sewmina'"], ["p", ","]] },
  { i: 1, t: [["id", "role:"], ["str", "'Full-Stack & Backend'"], ["p", ","]] },
  { i: 1, t: [["id", "skills:"], ["p", "["], ...skills.flatMap((s, n) => [["str", `'${s}'`], ["p", n < skills.length - 1 ? "," : ""]]), ["p", "],"]] },
  { i: 1, t: [["id", "hardWorker:"], ["val", "true"], ["p", ","]] },
  { i: 1, t: [["id", "quickLearner:"], ["val", "true"], ["p", ","]] },
  { i: 1, t: [["id", "problemSolver:"], ["val", "true"], ["p", ","]] },
  { i: 1, t: [["ok", "hireable:"], ["val", "function"], ["p", "() {"]] },
  { i: 2, t: [["val", "return"], ["p", "("]] },
  { i: 3, t: [["self", "this."], ["id", "hardWorker"], ["str", "&&"]] },
  { i: 3, t: [["self", "this."], ["id", "problemSolver"], ["str", "&&"]] },
  { i: 3, t: [["self", "this."], ["id", "skills.length"], ["str", ">="], ["val", "5"]] },
  { i: 2, t: [["p", ");"]] },
  { i: 1, t: [["p", "};"]] },
  { i: 0, t: [["p", "};"]] },
];

const indent = ["", "ml-4 lg:ml-8", "ml-8 lg:ml-16", "ml-12 lg:ml-24"];

const socials = [
  { href: personalData.github, label: "GitHub", Icon: BsGithub },
  { href: personalData.linkedIn, label: "LinkedIn", Icon: BsLinkedin },
  { href: `mailto:${personalData.email}`, label: "Email", Icon: BsEnvelopeFill },
];

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <motion.p
            {...rise(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#25213b] bg-[#11152c] px-4 py-1.5 text-sm text-gray-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16f2b3] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16f2b3]" />
            </span>
            Open to opportunities
          </motion.p>

          <motion.h1
            {...rise(0.25)}
            className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]"
          >
            Hello, <br />
            This is <span className="text-gradient">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>.
          </motion.h1>

          <motion.p {...rise(0.45)} className="mt-5 text-lg text-gray-300 min-h-[1.75rem]">
            Focused on <Typewriter words={personalData.roles} className="text-pink-500 font-medium" />
          </motion.p>

          <motion.div {...rise(0.6)} className="my-10 flex items-center gap-5">
            {socials.map(({ href, label, Icon }) => (
              <motion.div key={label} whileHover={{ scale: 1.25, y: -3 }} whileTap={{ scale: 0.9 }}>
                <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} aria-label={label} className="text-pink-500 transition-colors hover:text-[#16f2b3]">
                  <Icon size={30} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...rise(0.75)} className="flex items-center gap-3">
            <Magnetic>
              <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 block">
                <span className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-center md:text-sm font-medium uppercase tracking-wider text-white md:font-semibold flex items-center gap-1 hover:gap-3 transition-all duration-200">
                  <span>Contact me</span>
                  <RiContactsFill size={16} />
                </span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold shadow-[0_10px_40px_-10px_rgba(236,72,153,0.8)]"
                role="button"
                target="_blank"
                href={personalData.resume}
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="order-1 lg:order-2"
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
            <CodeWindow>
              <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                <motion.code
                  initial="hidden"
                  animate="show"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.9 } } }}
                  className="block font-mono text-xs md:text-sm lg:text-base"
                >
                  {lines.map((line, n) => (
                    <motion.div
                      key={n}
                      variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                      className={`${indent[line.i]} break-words`}
                    >
                      {line.t.map(([kind, text], k) => (
                        <span key={k} className={`${color[kind]} ${kind === "p" ? "" : "mr-2"}`}>
                          {text}
                        </span>
                      ))}
                    </motion.div>
                  ))}
                </motion.code>
              </div>
            </CodeWindow>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
