// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  const insightBars = [42, 68, 53, 82, 61, 74, 49];
  const trendPoints = '8,78 48,60 88,66 128,42 168,52 208,24 248,34';

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 relative w-full px-2 py-4 lg:px-0 lg:py-8">
          <div className="relative">
            <div className="grid gap-3 sm:grid-cols-[1.3fr_0.7fr]">
              <div className="relative h-[170px] overflow-hidden p-3">
                <div className="absolute inset-x-3 top-1/4 border-t border-dashed border-white/10"></div>
                <div className="absolute inset-x-3 top-2/4 border-t border-dashed border-white/10"></div>
                <div className="absolute inset-x-3 top-3/4 border-t border-dashed border-white/10"></div>
                <svg viewBox="0 0 256 100" preserveAspectRatio="none" className="relative h-full w-full overflow-visible">
                  <defs><linearGradient id="insight-line" x1="0" x2="1"><stop offset="0%" stopColor="#16f2b3" /><stop offset="100%" stopColor="#f472b6" /></linearGradient></defs>
                  <polyline points={trendPoints} fill="none" stroke="url(#insight-line)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  {trendPoints.split(' ').map((point) => { const [x, y] = point.split(','); return <circle key={point} cx={x} cy={y} r="2.5" fill="#16f2b3" stroke="#070b20" strokeWidth="1.5" />; })}
                </svg>
                <div className="absolute inset-x-3 bottom-2 flex justify-between text-[8px] text-slate-600"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span></div>
              </div>
              <div className="relative flex h-[170px] items-end gap-2 overflow-hidden px-3 pb-3 pt-6">
                {insightBars.map((height, index) => <div key={`${height}-${index}`} className="flex h-full flex-1 items-end"><div className="w-full rounded-t-sm bg-gradient-to-t from-violet-600 to-pink-400 transition-all duration-500 hover:from-[#16f2b3] hover:to-cyan-300" style={{ height: `${height}%` }}></div></div>)}
              </div>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-[0.75fr_1.25fr]">
              <div className="flex items-center justify-center p-4">
                <div className="relative h-28 w-28 rounded-full" style={{ background: 'conic-gradient(#16f2b3 0 42%, #8b5cf6 42% 70%, #f472b6 70% 88%, #334155 88% 100%)' }}>
                  <div className="absolute inset-4 flex items-center justify-center rounded-full bg-[#070b20]"><span className="h-1.5 w-1.5 rounded-full bg-[#16f2b3]"></span></div>
                </div>
              </div>
              <div className="relative h-[170px] overflow-hidden p-3">
                <div className="absolute inset-x-3 top-1/3 border-t border-dashed border-white/10"></div>
                <div className="absolute inset-x-3 top-2/3 border-t border-dashed border-white/10"></div>
                <svg viewBox="0 0 220 100" preserveAspectRatio="none" className="relative h-full w-full">
                  <defs><linearGradient id="area-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.65" /><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" /></linearGradient></defs>
                  <path d="M0 82 C25 68, 36 75, 56 58 S88 62, 106 43 S137 54, 154 31 S188 42, 220 16 V100 H0 Z" fill="url(#area-fill)" />
                  <path d="M0 82 C25 68, 36 75, 56 58 S88 62, 106 43 S137 54, 154 31 S188 42, 220 16" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-x-3 bottom-2 flex justify-between text-[8px] text-slate-600"><span>W1</span><span>W2</span><span>W3</span><span>W4</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;