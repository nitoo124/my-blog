import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types/blogtype";
import { groq, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RichText } from "@/components/pages/Richtext";
import Comment from "@/components/pages/comment";

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'post']{
    "slug": slug.current
  }`;

  const posts: Post[] = await client.fetch(query);

  return posts.map((post) => ({
    slug: post.slug, // Ensure slug is directly returned as a string
  }));
};

// Define a type for the dynamic route parameters
interface BlogPageProps {
  params: {
    slug: string; // Ensure this matches the generated params structure
  };
}

async function BlogPage({ params }: BlogPageProps) {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    body,
    author->
  }`;

  const post: Post = await client.fetch(query, {
    slug: params.slug,
  });

  return (
    <main className="mb-10 max-w-screen-xl mx-auto">
      <div className="flex items-center mb-10">
        {/* Main image */}
        <div className="w-full md:w-2/3">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full"
          />
        </div>

        {/* Author */}
        <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
          <Image 
            src={urlFor(post.author.image).url()} 
            alt="author img"
            width={200}
            height={200}
            loading="lazy"
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-3xl font-semibold text-purple-600">{post.author.name}</p>
          <p className="text-center tracking-wide text-xs">{post.author.description}</p>

          {/* Social links */}
          <div className="text-2xl text-gray-700 flex gap-5 items-center">
            <Link className="hover:text-orange-500 duration-200 cursor-pointer" href="https://www.instagram.com/neetukumari3076/">
              <FaSquareInstagram size={30} />
            </Link>
            <Link className="hover:text-orange-500 duration-200 cursor-pointer" href="https://web.facebook.com/people/Nitoo-Kumari/pfbid02tendwaV6VEubNRNoaMjrhiHG7sJT3Hi1ytzBYoGekSmqpUsD6fnxFh4tRqSf5EMal/">
              <FaFacebook size={30} />
            </Link>
            <Link className="hover:text-orange-500 duration-200 cursor-pointer" href="https://pk.linkedin.com/in/nitoo-kumari-97b3b5247">
              <FaLinkedin size={30} />
            </Link>
            <Link className="hover:text-orange-500 duration-200 cursor-pointer" href="https://github.com/nitoo124">
              <FaGithub size={30} />
            </Link>
          </div>
        </div>
      </div>

      {/* Body text */}
      <div className="px-3 max-w-screen-lg mx-auto">
        <PortableText value={post.body} components={RichText} />
      </div>

      <hr className="text-black max-w-screen-lg mx-auto mt-10" />

      {/* Render the Comment form */}
      <Comment />
    </main>
  );
}

export default BlogPage;