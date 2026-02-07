export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  readTime: string;
  slug: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
  label: string;
}
