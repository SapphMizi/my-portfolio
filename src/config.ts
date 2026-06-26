export const siteConfig = {
  name: 'Sapph',
  title: 'Developer & DJ',
  bio: '大阪大学基礎工学部システム科学科知能システム学コース第3学年在学中。高校在学中よりプログラミングを始め，競技プログラミングや Web 開発などを中心に開発を行っている。学部2年の後半からは，自身の経験を活かし RA として研究業務に携わっている。\nまた，大学入学と同時に音楽活動を始め，ジャズ研と DJ という全く真逆のジャンルで活動している。',
  email: 'srs.tigers.03@gmail.com',          // ★ 変更してください
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
