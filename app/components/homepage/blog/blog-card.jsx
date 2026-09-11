// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';

function BlogCard({ blog, priority = false }) {
  const tags = blog.tag_list?.slice(0, 3) || [];
  const blogHref = blog.slug ? `/blog/${blog.slug}` : blog.url;
  const isInternal = Boolean(blog.slug);

  return (
    <article className="group relative overflow-hidden rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] transition-all duration-500 hover:border-[#16f2b3]/60">
      <Link target={isInternal ? undefined : "_blank"} href={blogHref} aria-label={`Read ${blog.title}`}>
        <div className="relative h-48 w-full cursor-pointer overflow-hidden sm:h-56">
          <Image
            src={blog?.cover_image}
            height={1080}
            width={1920}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
            alt={`${blog.title} cover`}
            priority={priority}
            style={{ width: '100%', height: '100%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b20]/90 via-transparent to-transparent"></div>
          <span className="absolute bottom-3 left-3 rounded border border-white/20 bg-[#070b20]/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[#16f2b3]">Article preview</span>
        </div>
      </Link>
      <div className="flex flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-wider text-slate-500">
          <span>{timeConverter(blog.published_at)}</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">Insights</span>
        </div>
        <Link target={isInternal ? undefined : "_blank"} href={blogHref}>
          <h3 className="my-3 cursor-pointer text-lg font-medium text-white transition-colors hover:text-[#16f2b3] sm:text-xl">
            {blog.title}
          </h3>
        </Link>
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-[#16f2b3]">{blog.reading_time_minutes} Min Read</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">Insights</span>
        </div>
        <p className="line-clamp-3 text-sm leading-6 text-[#d3d8e8]">
          {blog.description}
        </p>
        {tags.length > 0 && <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {tags.map((tag) => <span key={tag} className="rounded-full border border-violet-400/25 bg-violet-400/10 px-2.5 py-1 text-[10px] text-violet-200">{tag}</span>)}
        </div>}
      </div>
    </article>
  );
};

export default BlogCard;