import { EventItem } from "@/types/events";

// 1) JSTのYYYY-MM-DDに正規化
const YMD_FMT = { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" } as const;
function toYmdJst(input: string | number | Date): string {
  const d = new Date(input);
  const parts = new Intl.DateTimeFormat("en-CA", YMD_FMT).formatToParts(d);
  const y = parts.find(p => p.type === "year")!.value;
  const m = parts.find(p => p.type === "month")!.value;
  const day = parts.find(p => p.type === "day")!.value;
  return `${y}-${m}-${day}`;
}
function todayJst(): string { return toYmdJst(new Date()); }

// 2) 日単位の過去判定（JST基準）
export function isPastJst(dateStr: string): boolean {
  // 入力が "YYYY-MM-DD" でも ISO でもOK。常にJSTで日付切り。
  return toYmdJst(dateStr) < todayJst();
}

// 3) これで全部置き換え
export function partitionByStatus(all: EventItem[]) {
  const upcoming = all.filter(e => !isPastJst(e.date));
  const past     = all.filter(e =>  isPastJst(e.date));
  return { upcoming, past };
}
export function sortUpcomingAsc(list: EventItem[]) {
  return [...list].sort((a,b) => toYmdJst(a.date).localeCompare(toYmdJst(b.date)));
}
export function sortPastDesc(list: EventItem[]) {
  return [...list].sort((a,b) => toYmdJst(b.date).localeCompare(toYmdJst(a.date)));
}
