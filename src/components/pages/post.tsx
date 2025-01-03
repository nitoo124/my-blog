import Link from "next/link";
import { Post } from "../../types/blogtype";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 py-20 px-10 flex flex-col  gap-10">
      {
        posts.map((post)=>{
          return(
           <Link href={{pathname:`/post/${post.slug.current}`, query:
           {
            slug:post.slug.current
           }}} key={post._id}>
            <div className=" flex flex-col md:flex-row gap-10 bg-white
            rounded-md rounded-tl-md rounded-br-md hover:shadow-md duration-200">
              {/* images */}
             <div className=" w-full md:w-3/5 group overflow-hidden
             rounded-tl-md rounded-bl-md relative">
             <Image src={urlFor(post.mainImage).url()}
              width={500}
              height={500}
              alt="blog post image"
              loading="lazy"
              className=" w-full max-h-[500px] object-cover
               group-hover:scale-105 duration-500 rounded-tl-md 
                rounded-bl-md"/>
              <div className=" absolute top-0 left-0 bg-black/20 w-full
               h-full group-hover:hidden duration-200"/>
               {/* call to action text */}
               <div className=" absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20
                bg-black backdrop:blur-lg rounded drop-shadow-lg text-white p-5 justify-center duration-200">
                <p className=" text-lg font-semibold">Click to Read</p>
               </div>

             </div>
             {/* content */}
             <div className=" w-full md:w-2/5 flex flex-col  
              justify-between py-10 px-4">
                {/* categories */}
              <div className=" flex flex-col gap-5">
              <div className=" flex items-center gap-2">
                  {post.categories.map((item)=>{
                    return(
                      <p className=" text-xm uppercase
                      text-blue-600 font-semibold" key={item._id}>{item.title}</p>
                    )
                  })}
                </div>
                {/* post title */}
                <div>
                  <h2 className=" text-2xl font-semibold hover:text-orange-600 
                  duration-200 cursor-pointer">{post.title}</h2>
                  {/* description */}
                  <p className="text-gray-500 ">
                    {post.description}
                  </p>
                </div>
              </div>
              {/* publish date */}
              <div className=" flex items-center justify-between ">
                  <p className="text-sm font-semibold text-gray-500">{new Date (post?._createdAt).toLocaleDateString(
                    'en-US', {
                      day : "numeric",
                      month :"long",
                      year : "numeric",
                    }
                  )}</p>

                {/* author img */}
                <div className=" flex items-center gap-2">
                 <Image src={urlFor(post.author.image).url()}
                 alt="author image"
                 width={200} 
                 height={200}
                 loading="lazy"
                 className=" rounded-full object-cover w-10 h-10"/>
                 <p className="text-sm font-medium">{post.author.name}</p>
                </div>
                </div>
             </div>
            </div>
           </Link>
          )
        })
      }

<Link href={'/blog'} className="flex justify-center" >
<button  className="  bg-gray-600 text-white px-4 py-2 mt-3 rounded-md hover:bg-gray-400">See More</button>
</Link>
    </div>
  
                 
              
 
  );
};

export default BlogContent;