// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { Reveal } from '../../helper/reveal';
import ContactForm from './contact-form';

const iconClass = "bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer";
const socialClass = "bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <Reveal direction="left">
          <ContactForm />
        </Reveal>
        <Reveal direction="right" className="lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail className={iconClass} size={36} />
              <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall className={iconClass} size={36} />
              <a href={`tel:${personalData.phone.replace(/\s/g, '')}`}>{personalData.phone}</a>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn className={iconClass} size={36} />
              <span>{personalData.address}</span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github} aria-label="GitHub">
              <IoLogoGithub className={socialClass} size={48} />
            </Link>
            <Link target="_blank" href={personalData.linkedIn} aria-label="LinkedIn">
              <BiLogoLinkedin className={socialClass} size={48} />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ContactSection;
