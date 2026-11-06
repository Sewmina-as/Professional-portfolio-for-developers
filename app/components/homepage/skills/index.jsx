// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../helper/section-title";

function SkillCard({ skill }) {
  return (
    <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
      <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] group-hover:border-violet-500 group-hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.7)] transition-all duration-500">
        <div className="flex -translate-y-[1px] justify-center">
          <div className="w-3/4">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-6">
          <div className="h-8 sm:h-10">
            <Image
              src={skillsImage(skill)?.src}
              alt={skill}
              width={40}
              height={40}
              className="!h-full !w-auto rounded-lg"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <p className="text-white text-sm sm:text-lg">{skill}</p>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const half = Math.ceil(skillsData.length / 2);
  const rowOne = skillsData.slice(0, half);
  const rowTwo = skillsData.slice(half);

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <SectionTitle title="Skills" />

      <div className="w-full my-12">
        <Marquee gradient={false} speed={70} pauseOnHover={true} direction="left">
          {rowOne.map((skill) => <SkillCard key={skill} skill={skill} />)}
        </Marquee>
        <Marquee gradient={false} speed={70} pauseOnHover={true} direction="right">
          {rowTwo.map((skill) => <SkillCard key={skill} skill={skill} />)}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
