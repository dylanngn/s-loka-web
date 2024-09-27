"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import { Pagination } from "./Pagination";
import { PostSnippet } from "@/components/PostSnippet";
import { Locale } from "@/i18n-config";

type Topics = Record<string, string>;
type Props = {
  leading: string;
  topics: Topics;
  lang: Locale;
  readTimeText: string
};

export function PostTabs({ leading, topics, readTimeText }: Props) {
  return (
    <TabGroup>
      <div className="flex flex-wrap gap-y-5 mb-16 md:px-6">
        <p className="mr-11 text-xl font-bold">{leading}</p>
        <TabList className="flex gap-x-14 flex-wrap">
          {Object.entries(topics).map(([key, value]) => (
            <Tab key={key} as={Fragment}>
              {({ selected }) => (
                <button
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_) => (
              <PostSnippet
                key={_}
                title="Bạn có đang xây dựng lối sống lành mạnh?"
                topic="Cuộc sống"
                readTime={`10 ${readTimeText}`}
                path="bai-doc/10-to-chat-cua-mot-thong-dich-vien-tuong-lai"
              />
            ))}
          </div>
          <Pagination />
        </TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
