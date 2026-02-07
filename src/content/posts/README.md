# 블로그 글 (Blog posts)

새 글을 추가하려면 **이 폴더에 `.md` 파일만 추가**하면 됩니다.

## 포맷

```markdown
---
title: "글 제목"
slug: url에-쓰일-주소
date: November 22, 2025
excerpt: "목록에 보일 한 줄 요약"
readTime: "1 min read"
---

본문은 마크다운으로 작성합니다.
```

`npm run dev` 또는 `npm run build` 시 `src/content/posts/*.md`가 자동으로 수집됩니다.
