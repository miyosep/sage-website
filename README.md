# sage's website
teehee webdev

## 프로젝트 구조

```
sage_website/
├── public/           # 정적 파일 (이미지 등)
│   └── image/
├── src/              # 앱 소스 코드
│   ├── main.tsx      # 진입점
│   ├── App.tsx
│   ├── index.css
│   ├── types.ts
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── content/
│       └── posts/    # 블로그 .md 글
├── scripts/          # 빌드 스크립트 (블로그 목록 생성 등)
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

- **루트**: 설정 파일과 진입 HTML만 두고, 소스는 전부 `src/` 아래에 정리했습니다.
- **블로그**: `src/content/posts/`에 `.md` 파일만 추가하면 `npm run dev` / `npm run build` 시 자동으로 목록에 반영됩니다.
