"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import CoverArt from "@/components/ui/cover-art";
import SectionHeading from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

function useIsWide() {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setWide(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return wide;
}

function ProjectCard({ project, index, total, progress, wide }) {
  const targetScale = 1 - (total - 1 - index) * 0.045;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const reversed = index % 2 === 1;

  return (
    <div className="mb-10 lg:sticky lg:top-0 lg:mb-0 lg:flex lg:h-screen lg:items-center">
      <motion.article
        style={wide ? { scale, top: `calc(-2vh + ${index * 24}px)` } : undefined}
        initial={wide ? false : { opacity: 0, y: 40 }}
        whileInView={wide ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className={`group relative flex w-full origin-top flex-col overflow-hidden rounded-[2rem] border border-line bg-panel shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] transition-colors hover:border-violet/50 lg:flex-row ${
          reversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex flex-1 flex-col justify-between gap-8 p-7 sm:p-10">
          <div>
            <p className="text-sm text-violet-soft">
              {project.year}, {project.role}
            </p>
            <h3 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted">{project.summary}</p>
          </div>

          <div>
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li key={tool} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-white/80">
                  {tool}
                </li>
              ))}
            </ul>
            {(project.code || project.demo) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-violet hover:bg-violet/10"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="accent-fill inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
                  >
                    Live demo <FiArrowUpRight />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden border-t border-line lg:aspect-auto lg:w-[46%] lg:border-l lg:border-t-0">
          {project.image ? (
            <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 40vw, 100vw" unoptimized={project.image.endsWith(".svg")} className="object-cover" />
          ) : (
            <CoverArt variant={project.art} />
          )}
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const container = useRef(null);
  const wide = useIsWide();
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  return (
    <section id="projects" className="relative scroll-mt-24 pt-28 md:pt-36">
      <div className="wrap">
        <SectionHeading title="Things I have built" intro="A few projects where I owned the design, the code and the results." />
        <div ref={container}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              total={projects.length}
              progress={scrollYProgress}
              wide={wide}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
