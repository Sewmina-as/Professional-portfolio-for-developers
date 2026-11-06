"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const draw = (delay = 0, duration = 1.4) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration, delay, ease },
});

const pop = (delay = 0) => ({
  initial: { scale: 0, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring", stiffness: 260, damping: 16, delay },
});

function Network() {
  const nodes = [
    [200, 150, 14], [90, 70, 8], [310, 64, 8], [70, 200, 8], [330, 210, 8],
    [150, 250, 7], [260, 258, 7], [130, 130, 6], [280, 130, 6],
  ];
  const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 7], [2, 8], [3, 5], [4, 6], [1, 2], [7, 3]];
  return (
    <>
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#804dee" strokeOpacity="0.55" strokeWidth="1.2"
          {...draw(0.1 + i * 0.07, 1)}
        />
      ))}
      {nodes.map(([cx, cy, r], i) => (
        <motion.circle
          key={i} cx={cx} cy={cy} r={r}
          fill={i === 0 ? "#804dee" : "#0b1022"}
          stroke={i === 0 ? "#b9a1ff" : "#804dee"} strokeWidth="1.5"
          {...pop(0.3 + i * 0.08)}
        />
      ))}
      <motion.circle
        cx="200" cy="150" r="14" fill="none" stroke="#b9a1ff" strokeWidth="1"
        animate={{ r: [14, 38], opacity: [0.6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
      />
    </>
  );
}

function Pulse() {
  const d = "M0 160 H92 l14 -12 l14 12 H150 l12 -78 l20 152 l16 -92 l10 14 H252 l14 -16 l16 16 H400";
  return (
    <>
      {[60, 110, 160, 210, 260].map((y) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#1e2647" strokeWidth="1" />
      ))}
      <motion.path d={d} fill="none" stroke="#804dee" strokeOpacity="0.35" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" {...draw(0.1, 2)} />
      <motion.path d={d} fill="none" stroke="#b9a1ff" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" {...draw(0.1, 2)} />
    </>
  );
}

function Blocks() {
  const boxes = [[40, 40, 130], [230, 60, 130], [120, 190, 150]];
  return (
    <>
      <motion.path d="M170 80 H230" stroke="#804dee" strokeWidth="1.5" fill="none" {...draw(0.9, 0.6)} />
      <motion.path d="M105 120 V190" stroke="#804dee" strokeWidth="1.5" fill="none" {...draw(1.1, 0.6)} />
      <motion.path d="M295 140 V215 H270" stroke="#804dee" strokeWidth="1.5" fill="none" {...draw(1.3, 0.7)} />
      {boxes.map(([x, y, w], i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease, delay: i * 0.18 }}>
          <rect x={x} y={y} width={w} height="80" rx="10" fill="#0b1022" stroke="#804dee" strokeOpacity="0.7" />
          <rect x={x} y={y} width={w} height="22" rx="10" fill="#804dee" fillOpacity="0.35" />
          <rect x={x + 12} y={y + 38} width={w - 40} height="5" rx="2.5" fill="#b9a1ff" fillOpacity="0.55" />
          <rect x={x + 12} y={y + 54} width={w - 64} height="5" rx="2.5" fill="#b9a1ff" fillOpacity="0.3" />
        </motion.g>
      ))}
    </>
  );
}

function Rings() {
  return (
    <>
      {[40, 80, 120].map((r, i) => (
        <motion.circle
          key={r} cx="200" cy="150" r={r} fill="none" stroke="#804dee" strokeOpacity={0.6 - i * 0.15} strokeWidth="1.5" strokeDasharray="4 8"
          animate={{ rotate: i % 2 ? -360 : 360 }}
          transition={{ duration: 40 + i * 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 150px" }}
        />
      ))}
      <circle cx="200" cy="150" r="6" fill="#b9a1ff" />
    </>
  );
}

const ART = { network: Network, pulse: Pulse, blocks: Blocks, rings: Rings };

export default function CoverArt({ variant = "rings", className = "" }) {
  const Art = ART[variant] ?? Rings;
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Project illustration"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`cover-glow-${variant}`} cx="50%" cy="50%" r="60%">
          <stop offset="0" stopColor="#804dee" stopOpacity="0.22" />
          <stop offset="1" stopColor="#804dee" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="#0b1022" />
      <rect width="400" height="300" fill={`url(#cover-glow-${variant})`} />
      <Art />
    </svg>
  );
}
