import client from "./client";

export const fetchBlogs = async () => {
    const query = `
      *[_type == "blog"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        body,
        publishedAt,
        "authorName": author->name,
        "authorImage": author->image
      }
    `;
    return await client.fetch(query);
  };
  