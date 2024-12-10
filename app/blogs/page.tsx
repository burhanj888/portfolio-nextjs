import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/client';
import imageUrlBuilder from "@sanity/image-url";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image: { asset: { url: string } };
  author: string;
  description: string;
}


async function getBlogs() {
  const query = `
        *[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          publishedAt,
          author,
          description,
          image {
            asset -> {
              url
            }
          }
        }
      `;
  return await client.fetch(query);
}

export default async function BlogList() {
  const blogs: BlogPost[] = await getBlogs();
  return (
    <div>
  {/* Portfolio Link */}
  <div className="fixed top-12 left-12">
    <Link
      href="/"
      className="text-gray-800 dark:text-gray-100 text-sm font-semibold hover:underline p-2 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md"
    >
      ← Portfolio
    </Link>
  </div>

  {/* Main Content */}
  <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 px-4">
    <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
      Latest Articles
    </h1>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 px-4">
      {blogs.map((blog) => (
        <Link href={`/blogs/${blog.slug.current}`} key={blog._id} className="group">
          <article className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
            {/* Image above text on small screens, side-by-side on larger screens */}
            <div className="flex flex-col sm:flex-row">
              {blog.image?.asset?.url && (
                <div className="relative w-full h-48 sm:w-32 sm:h-32 mb-4 sm:mb-0 sm:mr-4">
                  <img
                    src={blog.image.asset.url}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:underline">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                  {blog.description}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <span>{blog.author}</span>
                  <span className="mx-2">•</span>
                  <span>12 min read</span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  </div>
</div>

  );
}
