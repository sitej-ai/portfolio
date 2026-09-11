// @flow strict

import { blogPosts } from '@/utils/data/blog-posts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return blogPosts.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const blog = blogPosts.find((post) => post.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-4xl py-8 lg:py-16">
            <Link href="/blog" className="text-sm text-[#16f2b3] transition-colors hover:text-pink-400">
                Back to all posts
            </Link>
            <div className="mt-6 overflow-hidden rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
                <div className="relative h-64 w-full sm:h-80 lg:h-[26rem]">
                    <Image
                        src={blog.cover_image}
                        alt={`${blog.title} cover`}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 896px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b20] via-transparent to-transparent" />
                </div>
                <div className="p-5 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-wider text-slate-500">
                        <span>{blog.reading_time_minutes} min read</span>
                        <span>{blog.tag_list?.join(' / ')}</span>
                    </div>
                    <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">{blog.title}</h1>
                    <p className="mt-5 text-base leading-8 text-slate-300">{blog.description}</p>
                    <div className="mt-8 space-y-6 border-t border-white/10 pt-8">
                        {blog.content.map((paragraph) => (
                            <p key={paragraph} className="text-base leading-8 text-[#d3d8e8]">{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
