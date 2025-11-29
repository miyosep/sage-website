import { BlogPost } from './types';

export const post: BlogPost = {
  id: '3',
  slug: 'randomness-and-entropy',
  title: 'Reflections on Entropy',
  date: 'August 05, 2023',
  excerpt: 'True randomness is harder to find than you think.',
  readTime: '4 min read',
  content: `
# Reflections on Entropy

We often take \`Math.random()\` for granted. But in a deterministic universe (or at least a deterministic computer), generating true unpredictability is a profound challenge.

From lava lamps at Cloudflare to atmospheric noise, our quest for entropy is a quest to capture chaos in a bottle. Without high-quality entropy, our keys are predictable, and our castles are built on sand.
  `
};