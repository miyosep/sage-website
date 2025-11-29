export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string; // Markdown content
  readTime: string;
  slug: string;
}

export interface SubstackPost {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
  label: string;
}