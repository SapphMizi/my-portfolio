// ★ ここに自分の情報を入力してください
export const siteConfig = {
  name: 'Your Name',
  title: 'Full-stack Developer',
  bio: 'TypeScript / React / Next.js / Astro でWebアプリを作っています。',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  twitter: 'https://x.com/yourusername',
};

// ★ スキルリストを自由に編集してください
export const skills = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Astro', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Git', category: 'Tool' },
] satisfies { name: string; category: string }[];
