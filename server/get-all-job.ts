export type JobCategory = 'fulltime' | 'parttime' | 'internship' | 'contractor';

const CategoryMapping = {
  intern: 'internship',
  collaborator: 'contractor',
  fulltime: 'fulltime',
  parttime: 'parttime',
} as const;

export async function getCategorizedJob() {
  const res = await fetch('https://cms.s-loka.com/json/');

  if (!res.ok) throw new Error('Failed to fetch data');

  try {
    const data = (await res.json()) as any;
    if (!data.items) throw new Error('No job found');

    const jobs = data?.items?.filter((item: any) =>
      item?.title?.trim()?.startsWith('Job #')
    );

    const categorizedJobs = jobs.reduce((acc: any, job: any) => {
      const title = job.title.trim();
      const category =
        CategoryMapping[
          title
            .split('#')[1]
            .trim()
            .toLowerCase() as keyof typeof CategoryMapping
        ];
      if (!category) return acc;
      return {
        ...acc,
        [category]: [
          ...(acc[category] || []),
          {
            ...job,
            title: title.split('#')[2].trim(),
          },
        ],
      };
    }, {});

    return categorizedJobs;
  } catch (error) {
    throw new Error('No job found');
  }
}

export async function getJobDetail(path: string) {
  const res = await fetch(`https://cms.s-loka.com/json/`);

  if (!res.ok) throw new Error('Failed to fetch data');

  try {
    const data = (await res.json()) as any;
    if (!data.items) throw new Error('No job found');

    const job = data.items.find((item: any) => item.url === path);

    if (!job) throw new Error('No job found');

    return { ...job, title: job.title.split('#')[2].trim() };
  } catch (error) {
    throw new Error('No job found');
  }
}
