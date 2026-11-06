"use client";
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "../../helper/reveal";

const highlights = ["Python & Java", "Full-stack", "Data science", "Always learning"];

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <Reveal direction="left" className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
                whileHover={{ y: -3 }}
                className="rounded-full border border-[#25213b] bg-[#11152c] px-4 py-2 text-sm text-gray-200 hover:border-violet-500 transition-colors"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="right" className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            <motion.div
              aria-hidden="true"
              className="absolute -inset-1 rounded-xl bg-gradient-to-r from-pink-500 via-violet-600 to-[#16f2b3] opacity-60 blur-md"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              src={personalData.profile}
              width={320}
              height={380}
              alt={personalData.fullName}
              className="relative rounded-xl transition-all duration-500 hover:scale-105 cursor-pointer object-cover shadow-2xl max-w-[280px] sm:max-w-[320px] w-full h-auto"
              priority
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutSection;
