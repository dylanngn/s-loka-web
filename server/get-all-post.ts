export type PostCategory = 'job' | 'culture' | 'news' | 'life';

const CategoryMapping = {
  job: 'job',
  culture: 'culture',
  news: 'news',
  life: 'life',
} as const;

export async function getCategorizedPosts() {
  const res = await fetch('https://cms.s-loka.com/json/');

  if (!res.ok) throw new Error('Failed to fetch data');

  try {
    const data = (await res.json()) as any;
    if (!data.items) throw new Error('No post found');

    const posts = data?.items?.filter((item: any) =>
      item?.title?.trim()?.startsWith('Post #')
    );

    const categorizedPosts = posts.reduce((acc: any, post: any) => {
      const title = post.title.trim();
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
            ...post,
            title: title.split('#')[2].trim(),
          },
        ],
      };
    }, {});

    return categorizedPosts;
  } catch (error) {
    throw new Error('No job found');
  }
}

export async function getPostDetail(path: string) {
  const res = await fetch(`https://cms.s-loka.com/json/`);

  if (!res.ok) throw new Error('Failed to fetch data');

  try {
    const data = (await res.json()) as any;
    if (!data.items) throw new Error('No post found');
    const post = data.items.find((item: any) => item.url === path);

    if (!post) throw new Error('No post found');

    return { ...post, title: post.title.split('#')[2].trim() };
  } catch (error) {
    throw new Error('No Post found');
  }
}
