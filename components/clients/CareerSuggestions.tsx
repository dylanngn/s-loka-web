'use client';
import { Container } from '@/components/Container';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

export function Suggestions({
  jobs,
  sections,
}: {
  jobs: any[];
  sections: any;
}) {
  const [tabs, setTabs] = useState(
    Object.entries(sections).map(([key, value]: [string, any]) => ({
      key,
      name: value?.title,
      current: key === 'fulltime',
    }))
  );

  const onChangeTab = (x: string) => {
    setTabs((tabs) => {
      return tabs.map((tab) => {
        tab.current = tab.key === x;
        return tab;
      });
    });
  };

  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500"
          defaultValue={tabs.find((tab) => tab.current)?.name}
          onChange={(e) => onChangeTab(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <Container className="hidden sm:block">
        <nav
          className="border flex 0 rounded-full isolate space-x-2 border-slate-400 overflow-hidden"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <button
              onClick={() => onChangeTab(tab.key)}
              key={tab.name}
              className={clsx(
                tab.current
                  ? 'border border-slate-400 bg-slate-200 font-medium'
                  : '',
                'group relative min-w-0 rounded-full flex-1 bg-white py-2 px-4 text-center text-sm'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={clsx(
                  tab.current ? 'bg-primary-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </button>
          ))}
        </nav>
      </Container>
      <Container className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 pb-16">
        {jobs.map((job) => {
          const parts = job.content_text.split('\n');
          return (
            <div key={job.id} className="text-left">
              <Link
                href={`/career/${job.url}`}
                className="text-md text-blue-700 font-medium mb-2"
              >
                {job.title}
              </Link>
              <p className="mt-3 text-sm text-gray-600">
                {parts[0].split(':')[1]}
              </p>
              <p className="mt-3 text-sm text-gray-600">{parts[11]}</p>
            </div>
          );
        })}
      </Container>
    </>
  );
}
