'use client';

// @flow strict

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ project }) {
  const displayTools = project.tools.slice(0, 6);
  const previewHref = project.image;
  const [isImageOpen, setIsImageOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isImageOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isImageOpen]);

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex items-center justify-between px-4 py-4 lg:px-8 lg:py-5">
        <div>
          <p className="text-[#16f2b3] text-base lg:text-xl">{project.name}</p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">Featured project</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 lg:px-8 lg:py-6">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="group relative h-48 overflow-hidden rounded-md border border-white/10 bg-[#070b20] sm:h-56">
            <button
              type="button"
              onClick={() => setIsImageOpen(true)}
              aria-label={`View ${project.name} image`}
              className="relative block h-full w-full cursor-pointer text-left"
            >
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b20]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 rounded border border-white/20 bg-[#070b20]/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[#16f2b3]">View image</div>
            </button>
          </div>
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">Project context</p>
            <p className="text-sm leading-6 text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {displayTools.map((tool) => (
                <span key={tool} className="rounded-full border border-violet-400/25 bg-violet-400/10 px-2.5 py-1 text-[10px] text-violet-200">{tool}</span>
              ))}
              {project.tools.length > displayTools.length && (
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-500">+{project.tools.length - displayTools.length} more</span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <span className="text-xs text-slate-400">Role: <span className="text-white">{project.role}</span></span>
          {(project.code || project.demo) && (
            <div className="flex gap-3 flex-wrap">
              {project.code && (
                <Link href={project.code} target="_blank" className="text-pink-500 hover:text-pink-300 underline">
                  Code
                </Link>
              )}
              {project.demo && (
                <Link href={project.demo} target="_blank" className="text-pink-500 hover:text-pink-300 underline">
                  Demo
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      {isImageOpen && typeof document !== 'undefined' && ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} image viewer`}
        >
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            aria-label="Close image"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#0d1224] text-2xl text-white transition hover:border-[#16f2b3] hover:text-[#16f2b3]"
          >
            &times;
          </button>
          <Image
            src={previewHref}
            alt={`${project.name} full-size preview`}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>,
        document.body
      )}
    </div>
  );
};

export default ProjectCard;