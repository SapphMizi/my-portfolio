export const siteConfig = {
  name: 'Sapph',
  title: 'Developer & DJ',
  bio: 'C++ / Web 開発でアプリを作りつつ、ジャズギターと DJ もやっています。',
  email: 'your@email.com',          // ★ 変更してください
  github: 'https://github.com/SapphMizi',
  twitter: 'https://x.com/Sapph_cpp',
};

export const skills = [
  // Languages
  { name: 'C++',        category: 'Language' },
  { name: 'Python',     category: 'Language' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'PHP',        category: 'Language' },
  // Frontend
  { name: 'HTML / CSS', category: 'Frontend' },
  { name: 'React',      category: 'Frontend' },
  { name: 'Next.js',    category: 'Frontend' },
  { name: 'Astro',      category: 'Frontend' },
  // Backend / Lib
  { name: 'Flask',      category: 'Backend' },
  { name: 'LINE Bot',   category: 'Backend' },
  { name: 'Siv3D',      category: 'Library' },
] satisfies { name: string; category: string }[];

export const musicActivities = [
  {
    name: 'Jazz Guitar',
    description: 'ジャズギター',
    genres: [] as string[],
  },
  {
    name: 'DJ',
    description: 'DJ',
    genres: ['UK Hardcore', 'Trance', 'DnB', 'House'],
  },
] satisfies { name: string; description: string; genres: string[] }[];
