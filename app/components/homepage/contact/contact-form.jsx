"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import { personalData } from "@/utils/data/personal-data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";

const inputClass =
  "bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2";

function ContactForm() {
  const [message, setMessage] = useState({ type: "", text: "" });
  const [userInput, setUserInput] = useState({ name: "", email: "", message: "" });

  const set = (key) => (e) => setUserInput({ ...userInput, [key]: e.target.value });

  // No backend: opens the visitor's mail app with the message filled in.
  const handleSendMail = (e) => {
    e.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      setMessage({ type: "error", text: "All fields are required." });
      return;
    }
    if (!isValidEmail(userInput.email)) {
      setMessage({ type: "error", text: "Please provide a valid email." });
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${userInput.name}`);
    const body = encodeURIComponent(`${userInput.message}\n\nFrom: ${userInput.name} (${userInput.email})`);
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    setMessage({ type: "success", text: "Opening your mail app with the message filled in." });
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
      <form onSubmit={handleSendMail} noValidate className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-base">Your Name: </label>
            <input id="name" className={inputClass} type="text" maxLength="100" value={userInput.name} onChange={set("name")} autoComplete="name" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base">Your Email: </label>
            <input id="email" className={inputClass} type="email" maxLength="100" value={userInput.email} onChange={set("email")} autoComplete="email" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-base">Your Message: </label>
            <textarea id="message" className={inputClass} maxLength="500" rows="4" value={userInput.message} onChange={set("message")} />
          </div>

          <div className="flex flex-col items-center gap-3" aria-live="polite">
            <AnimatePresence mode="wait">
              {message.text && (
                <motion.p
                  key={message.text}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`text-sm ${message.type === "error" ? "text-red-400" : "text-[#16f2b3]"}`}
                >
                  {message.text}
                </motion.p>
              )}
            </AnimatePresence>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold"
            >
              <span className="flex items-center gap-1">
                Send Message
                <TbMailForward size={20} />
              </span>
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
