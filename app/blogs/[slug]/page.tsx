import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-4 pt-0 flex flex-col gap-4">
  <Link href="/blogs" className="hover:underline text-sm text-gray-500">
    ← Back to posts
  </Link>

  <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
  
  {postImageUrl && (
    <img
      src={postImageUrl}
      alt={post.title}
      className="aspect-video rounded-xl w-full"
    />
  )}

  <div className="prose mt-4">
    <p className="text-sm text-gray-500">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
    {Array.isArray(post.body) && <PortableText value={post.body} />}
    <Link href="/" className="hover:underline">
      <p className="text-sm text-gray-500 mt-8">Author: {post.author}</p>
    </Link>
  </div>
</main>

  );
}