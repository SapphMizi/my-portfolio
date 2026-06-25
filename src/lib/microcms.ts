import { createClient } from 'microcms-js-sdk';

// モジュール読み込み時にクライアントを初期化する
// env が未設定でも throw しないよう IIFE で囲む
const _client = (() => {
  try {
    return createClient({
      serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN ?? '',
      apiKey: import.meta.env.MICROCMS_API_KEY ?? '',
    });
  } catch {
    return null; // .env 未設定時は null — 各 fetch 関数が空配列/null を返す
  }
})();

// ---- 型定義 ----

export type MicroCMSImage = {
  url: string;
  width: number;
  height: number;
};

// works API のコンテンツ型（microCMS のフィールド名と対応）
export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  thumbnail?: MicroCMSImage;
  demo_url?: string;
  github_url?: string;
  tech_stack?: string; // カンマ区切り例: "React,TypeScript"
  tags?: string;       // カンマ区切り例: "個人開発,Web"
};

// blog API のコンテンツ型
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  content: string; // リッチエディタ → HTML 文字列
  thumbnail?: MicroCMSImage;
  category?: string;
  tags?: string;
};

// カンマ区切り文字列 → 配列ユーティリティ
export function parseTags(value?: string): string[] {
  if (!value) return [];
  return value.split(',').map((s) => s.trim()).filter(Boolean);
}

// ---- データ取得関数 ----
// 各関数はクライアント未設定 or API エラー時に空配列/null を返す

export async function listWorks(limit = 100): Promise<Work[]> {
  if (!_client) return [];
  try {
    const res = await _client.getList<Work>({ endpoint: 'works', queries: { limit } });
    return res.contents;
  } catch {
    return [];
  }
}

export async function getWork(id: string): Promise<Work | null> {
  if (!_client) return null;
  try {
    return await _client.get<Work>({ endpoint: 'works', contentId: id });
  } catch {
    return null;
  }
}

export async function listBlogs(limit = 100): Promise<Blog[]> {
  if (!_client) return [];
  try {
    const res = await _client.getList<Blog>({ endpoint: 'blog', queries: { limit } });
    return res.contents;
  } catch {
    return [];
  }
}

export async function getBlog(id: string): Promise<Blog | null> {
  if (!_client) return null;
  try {
    return await _client.get<Blog>({ endpoint: 'blog', contentId: id });
  } catch {
    return null;
  }
}
