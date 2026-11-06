import { marqueeSkills } from "@/data/skills";

export default function TechMarquee() {
  const items = [...marqueeSkills, ...marqueeSkills];
  return (
    <div
      aria-hidden="true"
      className="marquee relative overflow-hidden border-y border-line bg-ink/60 py-5"
      style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
    >
      <div className="marquee-track gap-12">
        {items.map((label, i) => (
          <span key={i} className="font-display flex items-center gap-12 text-2xl font-semibold text-white/35 transition-colors hover:text-white">
            {label}
            <span className="h-1.5 w-1.5 rounded-full bg-violet" />
          </span>
        ))}
      </div>
    </div>
  );
}
