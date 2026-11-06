"use client";
// @flow strict

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';
import CodeWindow from '../../helper/code-window';

function ProjectCard({ project }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="w-full group"
    >
      <CodeWindow title={project.name}>
        {project.image && (
          <div className="relative h-40 sm:h-52 w-full overflow-hidden border-t-[2px] border-indigo-900">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(min-width: 768px) 42rem, 100vw"
              unoptimized={project.image.endsWith('.svg')}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d37] via-transparent to-transparent" />
          </div>
        )}
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div>
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">project</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">{project.name}</span>
              <span className="text-gray-400">{`',`}</span>
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className=" text-white">tools:</span>
              <span className="text-gray-400">{` ['`}</span>
              {
                project.tools.map((tag, i) => (
                  <React.Fragment key={i}>
                    <span className="text-amber-300">{tag}</span>
                    {
                      project.tools?.length - 1 !== i &&
                      <span className="text-gray-400">{`', '`}</span>
                    }
                  </React.Fragment>
                ))
              }
              <span className="text-gray-400">{"'],"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
              <span className="text-orange-400">{project.role}</span>
              <span className="text-gray-400">,</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">Description:</span>
              <span className="text-cyan-400">{' ' + project.description}</span>
              <span className="text-gray-400">,</span>
            </div>
            <div><span className="text-gray-400">{`};`}</span></div>
          </code>

          {(project.code || project.demo) && (
            <div className="mt-6 flex items-center gap-3">
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  aria-label={`${project.name} live demo`}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-2 text-xs md:text-sm font-medium text-white no-underline transition-all hover:gap-3"
                >
                  <FaPlay size={12} /> Live demo
                </Link>
              )}
              {project.code && (
                <Link
                  href={project.code}
                  target="_blank"
                  aria-label={`${project.name} source code`}
                  className="flex items-center gap-2 rounded-full border border-[#353a52] px-4 py-2 text-xs md:text-sm font-medium text-white no-underline transition-all hover:border-[#16f2b3] hover:text-[#16f2b3]"
                >
                  <FaCode size={14} /> Code
                </Link>
              )}
            </div>
          )}
        </div>
      </CodeWindow>
    </motion.div>
  );
};

export default ProjectCard;
