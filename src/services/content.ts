import type { BlogPost } from '../types';
import postsData from '../content/posts/index.generated.json';

export const BLOG_POSTS: BlogPost[] = postsData as BlogPost[];
