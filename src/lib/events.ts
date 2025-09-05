import { EventItem } from "@/types/events";

/** 日単位での比較（ローカル日付ベース）。Asia/Tokyo想定ならSSR側のTZ設定も検討可。 */
export function isPast(dateStr: string): boolean {
  const d = new Date(dateStr);
  const target = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return target < today;
}

export function partitionByStatus(all: EventItem[]) {
  const upcoming = all.filter((e) => !isPast(e.date));
  const past = all.filter((e) => isPast(e.date));
  return { upcoming, past };
}

export function sortUpcomingAsc(list: EventItem[]) {
  return [...list].sort((a, b) => +new Date(a.date) - +new Date(b.date));
}

export function sortPastDesc(list: EventItem[]) {
  return [...list].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
