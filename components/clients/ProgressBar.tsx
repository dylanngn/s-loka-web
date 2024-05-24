'use client';
import { AppProgressBar } from 'next-nprogress-bar';

export function ProgressBar() {
  return (
    <AppProgressBar
      height="4px"
      color="#f1aa04"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
