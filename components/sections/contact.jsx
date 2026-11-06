"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowRight, FiCheck, FiCopy } from "react-icons/fi";
import Magnetic from "@/components/ui/magnetic";
import { site } from "@/data/site";
import { ease } from "@/lib/motion";

const field =
  "w-full rounded-2xl border border-line bg-surface px-4 py-3.5 text-white placeholder:text-muted/70 outline-none transition focus:border-violet focus:ring-2 focus:ring-violet/30";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Fill in your name, email and message to continue.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    // No backend: this opens the visitor's mail app with the message filled in.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Could not copy. Select the address and copy it manually.");
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-28 md:py-40">
      <div className="wrap grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="font-display text-5xl font-bold leading-[1] tracking-[-0.04em] sm:text-6xl md:text-7xl"
          >
            Let&apos;s build something together.
          </motion.h2>
          <p className="mt-6 max-w-md text-lg text-muted">
            Have a project, an internship or a question about my work? Send a message and I will reply as soon as I can.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={copyEmail}
              className="group inline-flex items-center gap-3 rounded-full border border-line bg-surface py-3 pl-5 pr-4 text-sm transition hover:border-violet"
            >
              <span className="text-white/90">{site.email}</span>
              <span className="relative grid h-6 w-6 place-items-center text-violet-soft">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "check" : "copy"}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="absolute"
                  >
                    {copied ? <FiCheck /> : <FiCopy />}
                  </motion.span>
                </AnimatePresence>
              </span>
            </button>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="rounded-full border border-line bg-surface px-5 py-3 text-sm text-white/90 transition hover:border-violet">
              {site.phone}
            </a>
            <span aria-live="polite" className="text-sm text-signal">
              {copied ? "Copied to clipboard" : ""}
            </span>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: site.github, label: "GitHub", Icon: FaGithub },
              { href: site.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
            ].map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -3 }}
                className="grid h-12 w-12 place-items-center rounded-full border border-line text-muted transition-colors hover:border-violet hover:text-white"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          noValidate
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="rounded-[2rem] border border-line bg-panel p-6 sm:p-9"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-muted">Your name</label>
              <input id="name" className={field} value={form.name} onChange={update("name")} placeholder="Jane Perera" autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-muted">Your email</label>
              <input id="email" type="email" className={field} value={form.email} onChange={update("email")} placeholder="jane@example.com" autoComplete="email" />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-muted">Message</label>
              <textarea id="message" rows={5} className={`${field} resize-none`} value={form.message} onChange={update("message")} placeholder="Tell me about your project or role." />
            </div>
          </div>

          <div className="mt-6 min-h-6" aria-live="polite">
            <AnimatePresence mode="wait">
              {error && (
                <motion.p key="err" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm text-rose-300">
                  {error}
                </motion.p>
              )}
              {sent && !error && (
                <motion.p key="ok" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm text-signal">
                  Opening your mail app with the message filled in.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <Magnetic className="mt-2">
            <button
              type="submit"
              className="accent-fill group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(128,77,238,0.8)] transition hover:brightness-110"
            >
              Send message
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </button>
          </Magnetic>
        </motion.form>
      </div>
    </section>
  );
}
