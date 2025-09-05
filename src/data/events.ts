import { EventItem } from "@/types/events";
// 自動で開催済みとこれから開催が振り分けられるから上から追加していってOK


// 初心者向けDJ練習会の画像パス
const beginnerImagePath = "/images/events/practice-beginner.png";
const nightClubImagePath = "/images/events/nightclub.jpg";
const recordShopImagePath = "/images/events/レコード.jpg";


export const events: EventItem[] = [
  // DJ練習会
  {
    title: "DJ練習会",
    date: "2025-09-10",
    description: "クラブ標準機材を使った初心者向け練習会。操作の基礎から一緒に学べます。",
    imageUrl: beginnerImagePath,
    location: "渋谷",
    eventUrl: "https://tunagate.com/circle/98708/events/447468",
  },
  {
    title: "DJ練習会",
    date: "2025-09-10",
    description: "クラブ標準機材を使った初心者向け練習会。操作の基礎から一緒に学べます。",
    imageUrl: beginnerImagePath,
    location: "新宿",
  },

  // レコード屋巡り
  {
    title: "渋谷レコード探訪",
    date: "2024-07-20",
    description: "渋谷の老舗レコード店を巡り、掘り出し物を探す1日。",
    imageUrl: recordShopImagePath,
    location: "渋谷",
  },
  {
    title: "下北沢ヴィンテージレコードツアー",
    date: "2024-05-18",
    description: "下北沢の小さなショップを巡り、アナログの世界に浸ります。",
    imageUrl: recordShopImagePath,
    location: "下北沢",
  },
  {
    title: "新宿ジャズレコード探索",
    date: "2024-03-12",
    description: "ジャズ専門店を中心に、個性的なアナログ盤を発掘するツアー。",
    imageUrl: recordShopImagePath,
    location: "新宿",
  },

  // クラブに行ってみよう
  {
    title: "クラブ初体験ナイト",
    date: "2025-11-02",
    description: "クラブに行ったことがない人のための安心ガイド付き体験イベント。",
    imageUrl: nightClubImagePath,
    location: "渋谷",
  },
  {
    title: "ハウスミュージック体感",
    date: "2024-08-15",
    description: "本場のハウスを体験。リズムの一体感を感じる夜。",
    imageUrl: nightClubImagePath,
    location: "恵比寿",
  },
  {
    title: "テクノナイト＠六本木",
    date: "2024-06-08",
    description: "国内外のテクノアーティストを迎えた特別企画。",
    imageUrl: nightClubImagePath,
    location: "六本木",
  },
];
