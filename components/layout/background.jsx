"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const WIDTH = 1440;
const LINES = 16;
const STEP = 24;

// Flowing contour lines, generated locally. Built after mount so server and client markup match.
function buildLines() {
  const lines = [];
  for (let i = 0; i < LINES; i++) {
    const base = 110 + i * 38;
    const amp = 38 + i * 5;
    const phase = i * 0.42;
    let d = "";
    for (let x = -80; x <= WIDTH + 80; x += STEP) {
      const y = base + amp * Math.sin(x / 260 + phase) + 22 * Math.sin(x / 95 + phase * 1.7);
      d += `${d ? "L" : "M"}${x} ${y.toFixed(1)} `;
    }
    lines.push(d.trim());
  }
  return lines;
}

export default function Background() {
  const [lines, setLines] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.5, 0.3]);

  useEffect(() => {
    setLines(buildLines());
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity }}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {lines && (
        <motion.svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMin slice"
          style={{ y }}
          className="absolute left-0 top-0 h-[130%] w-full"
        >
          <defs>
            <linearGradient id="bg-line" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#804dee" stopOpacity="0" />
              <stop offset="0.5" stopColor="#a98bff" stopOpacity="1" />
              <stop offset="1" stopColor="#804dee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g className="bg-drift">
            {lines.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                fill="none"
                stroke="url(#bg-line)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.1 + (i % 4) * 0.05 }}
                transition={{ duration: 2.6, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </g>
        </motion.svg>
      )}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(6,9,20,0) 55%, #060914 100%)" }}
      />
    </motion.div>
  );
}
