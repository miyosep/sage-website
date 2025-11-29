import { BlogPost } from './types';

export const post: BlogPost = {
  id: '2',
  slug: 'why-rust-for-cryptography',
  title: 'Why Rust is Eating Cryptography',
  date: 'September 12, 2023',
  excerpt: 'Memory safety is not optional when securing digital assets.',
  readTime: '5 min read',
  content: `
# Why Rust is Eating Cryptography

I spent years writing C++. I loved the control, but I feared the segfaults. In cryptography, a buffer overflow isn't just a crash; it's a potential key leakage.

## The Borrow Checker as a Safety Net

Rust offers memory safety without a garbage collector. This is critical for cryptographic primitives where constant-time execution is required to prevent timing attacks.

\`\`\`rust
// A simple example of affine point addition on an elliptic curve
fn add(p: Point, q: Point) -> Point {
    if p.is_infinity() { return q; }
    if q.is_infinity() { return p; }
    // ... implementation details
}
\`\`\`

The compiler prevents entire classes of vulnerabilities before the code even runs.
  `
};