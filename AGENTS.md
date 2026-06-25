# Portfolio — CLAUDE.md

このプロジェクトのルール・構成・開発方針をまとめたファイルです。

---

## Git ルール（必須）

**必ずブランチを切ってから作業し、main/master へ直接プッシュしない。**

```bash
# 新機能・変更を始める前に必ずブランチを作成する
git checkout -b feat/<feature-name>   # 新機能
git checkout -b fix/<bug-name>        # バグ修正
git checkout -b chore/<task-name>     # 設定・雑務
```

- `main` / `master` への直接 push は禁止
- PR（プルリクエスト）経由でマージする

---

## プロジェクト概要

| 項目 | 内容 |
|------|------|
| フレームワーク | Astro 7 |
| スタイリング | Tailwind CSS v4 (`@tailwindcss/vite`) |
| CMS | microCMS（Works・Blog を管理） |
| 言語 | TypeScript |

---

## ディレクトリ構成

```
src/
├── config.ts          # ← 名前・Bio・SNSリンク・スキルを編集する場所
├── lib/
│   └── microcms.ts    # microCMS クライアント + 型定義 + fetch 関数
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── WorkCard.astro
│   └── BlogCard.astro
├── layouts/
│   └── Layout.astro   # 全ページ共通レイアウト
├── pages/
│   ├── index.astro    # ホーム（Hero / Works / Blog / About+Skills）
│   ├── works/
│   │   ├── index.astro   # Works 一覧
│   │   └── [id].astro    # Works 詳細（動的ルーティング）
│   └── blog/
│       ├── index.astro   # Blog 一覧
│       └── [id].astro    # Blog 詳細
└── styles/
    └── global.css     # Tailwind の @import
```

---

## 開発サーバー

バックグラウンドモードで起動すること：

```bash
npm run dev            # または
astro dev --background
```

管理コマンド：
```bash
astro dev stop    # 停止
astro dev status  # 状態確認
astro dev logs    # ログ確認
```

ポートは `http://localhost:4321`。

---

## 環境変数

`.env` ファイルを作成して以下を設定する（`.env.example` を参照）：

```
MICROCMS_SERVICE_DOMAIN=your-service-id
MICROCMS_API_KEY=your-api-key
```

`.env` は `.gitignore` 済みでコミットされない。

---

## microCMS スキーマ

### `works`（リスト形式）

| フィールド ID | 種類 | 備考 |
|---|---|---|
| `title` | テキスト | 必須 |
| `description` | テキストエリア | |
| `thumbnail` | 画像 | |
| `demo_url` | テキスト | デモサイト URL |
| `github_url` | テキスト | GitHub リポジトリ URL |
| `tech_stack` | テキスト | カンマ区切り（例: `React,TypeScript`） |
| `tags` | テキスト | カンマ区切り（例: `個人開発,Web`） |

### `blog`（リスト形式）

| フィールド ID | 種類 | 備考 |
|---|---|---|
| `title` | テキスト | 必須 |
| `content` | リッチエディタ | HTML で返ってくる |
| `thumbnail` | 画像 | |
| `category` | テキスト | |
| `tags` | テキスト | カンマ区切り |

---

## カスタマイズ

`src/config.ts` を編集するだけで以下が変わる：
- 名前（ヘッダー・Hero・フッター）
- タイトル・Bio
- GitHub / X / メールアドレス
- スキル一覧（カテゴリ付き）

---

## Astro vs Next.js 対応表（参考）

| Next.js | Astro |
|---|---|
| `app/page.tsx` | `src/pages/index.astro` |
| Server Component + fetch | `.astro` の `---` ブロック内で `await fetch` |
| `generateStaticParams` | `export async function getStaticPaths()` |
| `{children}` | `<slot />` |
| `dangerouslySetInnerHTML` | `set:html={...}` |
| `layout.tsx` | `src/layouts/Layout.astro` |

---

## Astro ドキュメント

- [ルーティング](https://docs.astro.build/en/guides/routing/)
- [Astro コンポーネント](https://docs.astro.build/en/basics/astro-components/)
- [フレームワークコンポーネント（React等）](https://docs.astro.build/en/guides/framework-components/)
- [コンテンツコレクション](https://docs.astro.build/en/guides/content-collections/)
- [スタイリング / Tailwind](https://docs.astro.build/en/guides/styling/)
- [国際化](https://docs.astro.build/en/guides/internationalization/)
