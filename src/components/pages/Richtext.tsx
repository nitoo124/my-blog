import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export const RichText = {
  types: {
    // Image block
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center">
          <Image
            src={urlFor(value).url()}
            alt="post img"
            width={700}
            height={700}
            loading="lazy"
            className="object-cover py-6"
          />
        </div>
      );
    },
  },

  // List styles
  list: {
    // Bullet list
    bullet: ({ children }: any) => {
      return <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>;
    },

    // Numbered list
    number: ({ children }: any) => {
      return <ol className="ml-10 py-5 list-decimal space-y-5">{children}</ol>;
    },
  },

  // Block elements (headings, blockquote)
  block: {
    // Heading 1
    h1: ({ children }: any) => {
      return <h1 className="text-4xl py-10 font-bold">{children}</h1>;
    },

    // Heading 2
    h2: ({ children }: any) => {
      return <h2 className="text-3xl py-10 font-bold">{children}</h2>;
    },

    // Heading 3
    h3: ({ children }: any) => {
      return <h3 className="text-2xl py-10 font-bold">{children}</h3>;
    },

    // Heading 4
    h4: ({ children }: any) => {
      return <h4 className="text-xl py-10 font-semibold">{children}</h4>;
    },

    // Blockquote
    blockquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-4 border-blue-600 pl-5 py-5 my-5 text-gray-800 italic">
          {children}
        </blockquote>
      );
    },
  },
};
