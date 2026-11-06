// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from 'next/link';
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} <span className="text-[#16f2b3]">Achintha Sewmina Gamage</span>. All rights reserved. | Template by <Link target="_blank" href="https://github.com/Sewmina-as" className="text-[#16f2b3] hover:underline">Achintha Sewmina</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link target="_blank" href={personalData.github} aria-label="GitHub" className="text-xl hover:text-[#16f2b3] transition-colors">
              <BsGithub />
            </Link>
            <Link target="_blank" href={personalData.linkedIn} aria-label="LinkedIn" className="text-xl hover:text-[#16f2b3] transition-colors">
              <BsLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
