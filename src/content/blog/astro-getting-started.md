---
title: Astro を初めて使ってみた感想
description: 個人サイト構築に Astro を選んだ理由と使ってみた感想。
pubDate: 2026-02-21
category: tech
subcategory: astro
---

個人サイトを構築するにあたって Astro を選びました。

## なぜ Astro を選んだか

ブログ + プロフィールというシンプルな構成なら、Astro が最もフィットすると感じました。

- Markdown をそのまま扱える
- JavaScript を最小限に抑えられる
- ビルドが速い

## 気に入った点

### Content Collections

`src/content/` にMarkdownを置くだけで型安全なブログ管理ができます。

```ts
const posts = await getCollection('blog')
```

### ゼロJS

デフォルトでJavaScriptを一切送信しません。パフォーマンスが自然と良くなります。

## まとめ

静的コンテンツ中心のサイトでMarkdownで書くなら、とても手軽でした。。
