"use client";

import { personalData } from "@/utils/data/personal-data";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Blogs", id: "blogs" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-3 z-[60] mt-3"
    >
      <div
        className={`flex items-center justify-between rounded-full px-4 py-3 transition-all duration-500 ${
          scrolled ? "border border-[#25213b] bg-[#0d1224]/85 backdrop-blur-md shadow-lg shadow-black/30" : "border border-transparent"
        }`}
      >
        <Link href="/" className="text-[#16f2b3] text-2xl sm:text-3xl font-bold">
          {personalData.name}
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={`/#${link.id}`} className="relative block px-4 py-2 no-underline">
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-violet-600/20 border border-violet-500/40"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative uppercase transition-colors duration-300 ${active === link.id ? "text-white" : "text-gray-300 hover:text-pink-500"}`}>
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-10 w-10 place-items-center rounded-full border border-[#25213b] md:hidden"
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 0 : -4 }} className="absolute h-0.5 w-4 rounded bg-white" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? 0 : 4 }} className="absolute h-0.5 w-4 rounded bg-white" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-2 rounded-2xl border border-[#25213b] bg-[#0d1224]/95 p-2 backdrop-blur-md md:hidden"
          >
            {links.map((link, i) => (
              <motion.li key={link.id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                <Link
                  href={`/#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 uppercase text-gray-200 hover:bg-[#1a1443]"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
