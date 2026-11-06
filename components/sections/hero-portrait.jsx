"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { site } from "@/data/site";
import { ease } from "@/lib/motion";

const ORBIT_SECONDS = 50;

export default function HeroPortrait() {
  const chips = site.orbit;

  return (
    <div
      className="relative mx-auto aspect-square"
      style={{ "--s": "min(78vw, 25rem)", "--r": "calc(var(--s) * 0.54)", width: "var(--s)" }}
    >
      {/* dashed ring */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-[6%] rounded-full border border-dashed border-white/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* portrait in an arch */}
      <motion.div
        className="absolute inset-[15%] overflow-hidden rounded-b-[2rem] rounded-t-[999px] border border-white/10 bg-panel"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)", y: [0, -8, 0] }}
        transition={{
          clipPath: { duration: 1.3, ease, delay: 0.5 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
        }}
      >
        <Image
          src={site.profileImage}
          alt={`Portrait of ${site.name}`}
          fill
          priority
          sizes="(min-width: 1024px) 20rem, 60vw"
          unoptimized={site.profileImage.endsWith(".svg")}
          className="object-cover"
        />
      </motion.div>

      {/* orbiting skill chips, kept upright by counter-rotation */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: ORBIT_SECONDS, repeat: Infinity, ease: "linear" }}
      >
        {chips.map((label, i) => {
          const angle = (360 / chips.length) * i - 90;
          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(var(--r) * -1)) rotate(${-angle}deg)`,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { delay: 1.2 + i * 0.1, duration: 0.6 },
                  scale: { delay: 1.2 + i * 0.1, type: "spring", stiffness: 240, damping: 16 },
                  rotate: { duration: ORBIT_SECONDS, repeat: Infinity, ease: "linear" },
                }}
                className="glass whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-white/90"
              >
                {label}
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease }}
        className="glass absolute bottom-[8%] left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs text-white/90"
      >
        <FiMapPin className="text-violet-soft" />
        {site.location}
      </motion.div>
    </div>
  );
}
