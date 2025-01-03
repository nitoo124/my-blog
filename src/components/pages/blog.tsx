import Link from "next/link";
import { Post } from "../../types/blogtype";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  return (
    <div className=" h-full max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-10 px-5 overflow-hidden">
      {posts.map((post) => {
        return (
          <Link
            href={{
              pathname: `/post/${post.slug.current}`,
              query: { slug: post.slug.current },
            }}
            key={post._id}
          >
            <div className="flex flex-col bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
              {/* Image Section */}
              <div className="relative group">
                <Image
                  src={urlFor(post.mainImage).url()}
                  width={500}
                  height={500}
                  alt="blog post image"
                  loading="lazy"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Call to Action */}
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-semibold">Click to Read</p>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex flex-col justify-between flex-grow p-5">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((item) => (
                    <p
                      className="text-xs uppercase text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-md"
                      key={item._id}
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
                {/* Title and Description */}
                <div>
                  <h2 className="text-xl font-bold text-gray-800 hover:text-orange-500 transition-colors duration-200 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
                {/* Footer */}
                <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                  <p>
                    {new Date(post?._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogContent;
