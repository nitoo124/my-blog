import Data from "@/components/pages/post";
import Hero from "@/components/pages/hero";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Blog from "@/components/pages/blog";

export const revalidate = 30;

const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`; // Fetch only the first 3 posts

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <main className="">
     
      <Blog posts={posts} />
    </main>
  );
}
