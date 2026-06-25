# my-portfolio

Astro + microCMS で構築したポートフォリオサイトです。

## 技術スタック

| 役割 | 技術 |
|------|------|
| フレームワーク | [Astro](https://astro.build) v7 |
| スタイリング | [Tailwind CSS](https://tailwindcss.com) v4 |
| CMS | [microCMS](https://microcms.io) |
| 言語 | TypeScript |

## ページ構成

| URL | 内容 |
|-----|------|
| `/` | ホーム（Hero / Works / Blog / About + Skills） |
| `/works` | 制作物一覧 |
| `/works/[id]` | 制作物詳細 |
| `/blog` | ブログ一覧 |
| `/blog/[id]` | ブログ記事 |

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

```bash
cp .env.example .env
```

`.env` を開いて以下を入力：

```
MICROCMS_SERVICE_DOMAIN=your-service-id
MICROCMS_API_KEY=your-api-key
```

microCMS の管理画面（https://app.microcms.io）でサービスを作成後、API キーを取得してください。

### 3. 開発サーバーの起動

```bash
npm run dev
# → http://localhost:4321
```

## コマンド一覧

| コマンド | 動作 |
|---------|------|
| `npm run dev` | 開発サーバー起動（localhost:4321） |
| `npm run build` | 本番ビルド（`./dist/` に出力） |
| `npm run preview` | ビルド結果のプレビュー |

## カスタマイズ

`src/config.ts` を編集するだけで名前・Bio・SNS リンク・スキル一覧が変わります。

## microCMS スキーマ

詳細は [CLAUDE.md](./CLAUDE.md) を参照してください。
