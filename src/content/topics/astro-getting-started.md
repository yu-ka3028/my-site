---
title: Astro を初めて使ってみた感想
slug: astro-getting-started
date: 2026-02-21
status: practicing
category: web
tags: [astro]
related: [claude-code-auto-mode]
portfolio: false
niche: false
---

## Before → After

個人サイトを構築するにあたって Astro を選びました。

ブログ + プロフィールというシンプルな構成なら、Astro が最もフィットすると感じました。

- Markdown をそのまま扱える
- JavaScript を最小限に抑えられる
- ビルドが速い

## なぜこの技術が生まれたか

（未執筆）

## 今の環境でどう使えているか

### Content Collections

`src/content/` にMarkdownを置くだけで型安全なブログ管理ができます。

```ts
const posts = await getCollection('blog')
```

### ゼロJS

デフォルトでJavaScriptを一切送信しません。パフォーマンスが自然と良くなります。

## 実践ログ（時系列、更新履歴を兼ねる）

### 2026-02-21

静的コンテンツ中心のサイトでMarkdownで書くなら、とても手軽でした。
