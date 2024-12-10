"use client";
// components/BlogList.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import client from '@/sanity/client'; // Import your Sanity client
import {PortableText, type SanityDocument } from "next-sanity";
import { useSectionInView } from "@/lib/hooks";

// type Blog = {
//   _id: string;
//   title: string;
//   slug: { current: string };
//   publishedAt: string;
// };

const options = { next: { revalidate: 30 } };
const BlogList = () => {
  const [blogs, setBlogs] = useState<SanityDocument[]>([]);
  const { ref } = useSectionInView("Blogs", 0.5);
  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `
        *[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          publishedAt,
          description,
          image {
            asset -> {
              url
            }
          }
        }
      `;
      const data = await client.fetch(query, {}, options);
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <section ref={ref} id="blogs" className="scroll-mt-28 m-5 sm:m-20 md:m-28">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 dark:text-white dark:bg-white/10"
          >
            {blog.image?.asset?.url && (
              <img
                src={blog.image.asset.url}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
                <Link href={`/blogs/${blog.slug.current}`}>
                  {blog.title}
                </Link>
              </h2>
              <p className='text-base text-gray-700 mb-2 dark:text-gray-300'>
                {blog.description}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                Published: {new Date(blog.publishedAt).toLocaleDateString()}
              </p>
              {/* <p className="text-gray-700 text-sm">
                {blog.body.length > 100
                  ? `${blog.body.slice(0, 100)}...`
                  : blog.body}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default BlogList;
