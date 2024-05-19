'use client';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export function BackButton({ label }: { label: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="self-start flex items-center gap-2 mt-4 border w-fit border-secondary rounded-lg py-1 px-3"
      onClick={() => router.back()}
    >
      <ChevronLeftIcon className="w-5" />
      {label}
    </button>
  );
}
