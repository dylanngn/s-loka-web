"use client"
import { useState } from "react";
import { Pagination } from "./Pagination";
import { PostSnippet } from "./PostSnippet";
import { calculateReadTime } from "@/server/get-all-post";

type Prop = {
  heading: string
  minReadText: string
  relatedPosts: any
  topics: Record<string, string>
}
export default function RelatedPosts({heading, minReadText, relatedPosts, topics}: Prop) {
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ postsPerPage, setPostsPerPage ] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = relatedPosts.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="mb-14">
      <h2 className="mb-14 text-center text-3xl font-bold">
        {heading}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-14 gap-5 lg:gap-14">
        {currentPosts.map((post: any, index: number) => (
          <PostSnippet
            key={index}
            path={post.url}
            readTime={`${calculateReadTime(post.content_text)} ${minReadText}`}
            title={post.title}
            topic={topics[post.category.toLowerCase()]}
          />
        ))}
      </div>
      <div className="mx-auto md:w-fit">
        <Pagination
          totalPosts={relatedPosts.length}
          postsPerPage={8}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
