'use client';

import clsx from 'clsx';

export function SuggestionTabs({
  tabs,
  onChangeTab,
}: {
  tabs: { key: string; name: string; current: boolean }[];
  onChangeTab: (tab: string) => void;
}) {
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
      <div className="hidden sm:block">
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
      </div>
    </>
  );
}
