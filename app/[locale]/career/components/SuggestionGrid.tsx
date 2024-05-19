import Link from 'next/link';

export async function SuggestionsGrid({ jobs }: { jobs: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job) => {
        const parts = job.content_text.split('\n');
        return (
          <div key={job.id} className="text-left">
            <Link
              href={`/career/${job.url}`}
              className="text-lg text-blue-700 font-medium mb-2"
            >
              {job.title}
            </Link>
            <p className="mt-3 text-gray-600">{parts[0].split(':')[1]}</p>
            <p className="mt-3 text-gray-600">{parts[11]}</p>
          </div>
        );
      })}
    </div>
  );
}
