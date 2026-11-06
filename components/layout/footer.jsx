import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-ink">
      <div className="wrap flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} All rights reserved. Designed and built by me.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-violet hover:text-white"
          >
            <FaGithub />
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-violet hover:text-white"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </footer>
  );
}
