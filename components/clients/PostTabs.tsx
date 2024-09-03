"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import { PostArrow } from "../icons/PostArrow";
import { Pagination } from "./Pagination";

type Topics = Record<string, string>;

export function PostTabs({ leading, topics }: { leading: string, topics: Topics,  }) {
  return (
    <TabGroup>
      <div className="flex flex-wrap gap-y-5 mb-16 md:px-6">
        <p className="mr-11 text-xl font-bold">
          {leading}
        </p>
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
              <div
                key={_}
                className="group border rounded-xl p-5 text-center  hover:border-primary hover:text-[#0052B4]"
              >
                <p className="border-b border-gray-400 h-auto sm:h-[177px] text-xl">
                  Bạn có đang xây dựng lối sống lành mạnh?
                </p>
                <small className="flex justify-center items-center mx-auto mb-4 h-14 w-fit bg-gradient-radial from-yellow-50 to-white text-[10px]">
                  Cuộc sống
                </small>
                <div className="flex justify-between items-end">
                  <small className="text-gray-500 group-hover:text-[#0052B4] text-[10px]">10 phút đọc</small>
                  <span className="font-sm flex gap-2 flex-col sm:flex-row items-center font-light text-center mt-2">
                    <PostArrow className="w-6 inline-block" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Pagination/>
        </TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
