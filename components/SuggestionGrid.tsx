'use client';
import { SuggestionTabs } from './SuggestionTabs';
import { Container } from '@/components/Container';
import Link from 'next/link';
import { useState } from 'react';

export function SuggestionsGrid({
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
  return (
    <>
      <SuggestionTabs
        onChangeTab={(x: string) =>
          setTabs((tabs) => {
            return tabs.map((tab) => {
              tab.current = tab.key === x;
              return tab;
            });
          })
        }
        tabs={tabs}
      />
      <Container className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
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
