import Data from "@/components/pages/post";
import Hero from "@/components/pages/hero";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";

export const revalidate = 30;

const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)[0...3]`; // Fetch only the first 3 posts

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <main>
      <Hero />
      <Data posts={posts} />

    
</main>
  );
}
