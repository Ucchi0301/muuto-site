import { EventItem } from "@/types/events";
// 自動で開催済みとこれから開催が振り分けられるから上から追加していってOK


// 初心者向けDJ練習会の画像パス
const beginnerImagePath = "/images/events/practice-beginner-2.png";
const nightClubImagePath = "/images/events/nightclub.webp";
const recordShopImagePath = "/images/events/レコード.jpg";


export const events: EventItem[] = [
      {
    title: "サークル内飲み会🍻",
    date: "2025-11-29",
    description: "お酒を飲みながら好きな音楽について語り合います！",
    location: "サークルメンバー限定",
    imageUrl: recordShopImagePath,
  },
    {
    title: "【新宿】DJ体験で音楽を楽しもう！",
    date: "2025-10-14",
    description: "クラブ機材を使った初心者向けの体験会です。DJとはから操作方法までサポートします。",
    imageUrl: beginnerImagePath,
    location: "新宿",
    eventUrl: "https://tunagate.com/circle/98708/events/453240",
  },
    {
    title: "【新宿】DJ体験で音楽を楽しもう！",
    date: "2025-10-28",
    description: "クラブ機材を使った初心者向けの体験会です。DJとはから操作方法までサポートします。",
    imageUrl: beginnerImagePath,
    location: "新宿",
    eventUrl: "https://tunagate.com/circle/98708/events/453243",
  },
  {
    title: "【新宿】DJ体験で音楽を楽しもう！",
    date: "2025-09-16",
    description: "クラブ機材を使った初心者向けの体験会です。DJとはから操作方法までサポートします。",
    imageUrl: beginnerImagePath,
    location: "新宿",
    eventUrl: "https://tunagate.com/circle/98708/events/447468",
  },
  {
    title: "【新宿】DJ体験で音楽を楽しもう！",
    date: "2025-09-27",
    description: "クラブ機材を使った初心者向けの体験会です。DJとはから操作方法までサポートします。",
    imageUrl: beginnerImagePath,
    location: "新宿",
    eventUrl : "https://tunagate.com/circle/98708/events/448599",
  },
    {
    title: "クラブに行ってみよう",
    date: "2025-09-17",
    description: "主催の知り合いが出演するハウス・テクノ中心のパーティー、サークルメンバー限定",
    imageUrl: nightClubImagePath,
    location: "渋谷",
  },
    {
    title: "【新宿】DJ体験で音楽を楽しもう！",
    date: "2025-08-19",
    description: "クラブ機材を使った初心者向けの体験会です。DJとはから操作方法までサポートします。",
    imageUrl: beginnerImagePath,
    location: "新宿",
    eventUrl: "https://tunagate.com/circle/98708/events/441365",
  },
      {
    title: "【新宿】DJ体験で音楽を楽しもう！",
    date: "2025-08-30",
    description: "クラブ機材を使った初心者向けの体験会です。DJとはから操作方法までサポートします。",
    imageUrl: beginnerImagePath,
    location: "新宿",
    eventUrl: "https://tunagate.com/circle/98708/events/442524",
  },
        {
    title: "音楽好き集まれ！DJ体験で音楽を楽しもう🎶",
    date: "2025-06-14",
    description: "クラブ機材を使った初心者向けの体験会です。DJとはから操作方法までサポートします。",
    imageUrl: beginnerImagePath,
    location: "新宿",
    eventUrl: "https://tunagate.com/circle/98708/events/426373",
  },
          {
    title: "音楽好き集まれ！DJ体験で音楽を楽しもう🎶",
    date: "2025-05-17",
    description: "クラブ機材を使った初心者向けの体験会です。DJとはから操作方法までサポートします。",
    imageUrl: beginnerImagePath,
    location: "新宿",
    eventUrl: "https://tunagate.com/circle/98708/events/418087",
  },
            {
    title: "音楽好き集まれ！DJ体験で音楽を楽しもう🎶",
    date: "2025-04-11",
    description: "クラブ機材を使った初心者向けの体験会です。DJとはから操作方法までサポートします。",
    imageUrl: beginnerImagePath,
    location: "新宿",
    eventUrl: "https://tunagate.com/circle/98708/events/408345",
  },
             {
    title: "音楽好き集まれ！DJ体験で音楽を楽しもう🎶",
    date: "2025-02-16",
    description: "クラブ機材を使った初心者向けの体験会です。DJとはから操作方法までサポートします。",
    imageUrl: beginnerImagePath,
    location: "新宿",
    eventUrl: "https://tunagate.com/circle/98708/events/391891",
  }, 
               {
    title: "音楽好き集まれ！DJ体験で音楽を楽しもう🎶",
    date: "2025-01-26",
    description: "クラブ機材を使った初心者向けの体験会です。DJとはから操作方法までサポートします。",
    imageUrl: beginnerImagePath,
    location: "新宿",
    eventUrl: "https://tunagate.com/circle/98708/events/383581",
  }, 
];
