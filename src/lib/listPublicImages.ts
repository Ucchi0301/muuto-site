// lib/listPublicImages.ts
import fs from "fs";
import path from "path";

/** 対象拡張子 */
const IMAGE_RE = /\.(png|jpe?g|webp|gif|svg)$/i;

/**
 * public/ 以下の相対パスを受け取り、その直下（または再帰的）にある画像パスを
 * Webパス（/images/...）の配列で返す。
 */
export function listPublicImages(relDir: string, opts?: { recursive?: boolean; sort?: "asc" | "desc"; }) {
  const { recursive = false, sort = "asc" } = opts ?? {};
  const baseAbs = path.join(process.cwd(), "public", relDir);

  const results: string[] = [];

  function walk(dirAbs: string, dirRel: string) {
    const entries = fs.readdirSync(dirAbs, { withFileTypes: true });
    for (const e of entries) {
      const abs = path.join(dirAbs, e.name);
      const rel = path.posix.join(dirRel, e.name); // Webパス用は posix で

      if (e.isDirectory()) {
        if (recursive) walk(abs, rel);
        continue;
      }
      if (IMAGE_RE.test(e.name)) {
        results.push("/" + rel); // 先頭スラッシュでWebパスに
      }
    }
  }

  walk(baseAbs, relDir.replace(/^\/+/, "")); // 余分な / を除去

  // ファイル名で軽くソート（数字混じりも自然順で行きたければ独自実装に差し替え）
  results.sort((a, b) => (sort === "asc" ? a.localeCompare(b) : b.localeCompare(a)));
  return results;
}
