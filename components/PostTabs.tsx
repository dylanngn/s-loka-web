"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { Pagination } from "./Pagination";
import { PostSnippet } from "@/components/PostSnippet";
import { Locale } from "@/i18n-config";
import { calculateReadTime } from "@/server/get-all-post";

type Topics = Record<string, string>;
type Props = {
  posts: any;
  leading: string;
  topics: Topics;
  lang: Locale;
  readTimeText: string;
};

export function PostTabs({ posts, leading, topics, readTimeText }: Props) {
  const allPosts = [
    ...posts.job,
    ...posts.culture,
    ...posts.news,
    ...posts.life,
  ];
  const [postData, setPostData] = useState(allPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postData.slice(firstPostIndex, lastPostIndex);

  return (
    <TabGroup>
      <div className="flex flex-wrap gap-y-5 mb-16 md:px-6">
        <p className="mr-11 text-xl font-bold">{leading}</p>
        <TabList className="flex gap-x-14 flex-wrap">
          {Object.entries(topics).map(([key, value]) => (
            <Tab key={key} as={Fragment}>
              {({ selected }) => (
                <button
                  onClick={() => key === 'all' ? setPostData(allPosts) : setPostData(posts[key])}
                  className={clsx(
                    "py-2 focus:outline-none",
                    selected && "underline"
                  )}
                >
                  {value}
                </button>
              )}
            </Tab>
          ))}
        </TabList>
      </div>

      <TabPanels>
        <TabPanel>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-14 mb-14">
            {currentPosts.map((p, i) => (
              <PostSnippet
                key={i}
                title={p.title}
                topic={topics[p.category.toLowerCase()]}
                readTime={`${calculateReadTime(
                  p.content_text
                )} ${readTimeText}`}
                path={`bai-doc/${p.url}`}
              />
            ))}
          </div>
          
        </TabPanel>
        {Object.keys(topics)
          .filter((key) => key !== "all")
          .map((key) => (
            <TabPanel key={key}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-14 mb-14">
                {posts[key].map((p: any, i: number) => (
                  <PostSnippet
                    key={i}
                    title={p.title}
                    topic={topics[p.category.toLowerCase()]}
                    readTime={`${calculateReadTime(
                      p.content_text
                    )} ${readTimeText}`}
                    path={`bai-doc/${p.url}`}
                  />
                ))}
              </div>
            </TabPanel>
          ))}
          <Pagination
            totalPosts={postData.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
      </TabPanels>
    </TabGroup>
  );
}
