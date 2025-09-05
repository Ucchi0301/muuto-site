"use client";

import React, { use, useRef } from "react";

type EventItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string; // 任意（ない場合はプレースホルダ装飾）
};

type Props = { events: EventItem[] };

const PastEventsCarousel: React.FC<Props> = ({ events }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLDivElement>('[data-card="true"]');
    const delta = (card?.offsetWidth ?? 320) + 16; // 1カード分 + gap
    track.scrollBy({
      left: dir === "left" ? -delta : delta,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full">
      {/* セクションヘッダ */}
      <div className="flex items-end justify-between mb-3 px-2 sm:px-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          過去イベント
        </h2>
        <div className="flex items-center gap-2">
          <button
            aria-label="scroll left"
            onClick={() => scrollByCards("left")}
            className="h-9 w-9 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="scroll right"
            onClick={() => scrollByCards("right")}
            className="h-9 w-9 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      {/* フェードエッジ */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"></div>

      {/* トラック */}
      <div
        ref={trackRef}
        className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none px-2 sm:px-4 py-2"
      >
        {events.map((ev) => (
          <article
            key={ev.id}
            data-card="true"
            className=" shrink-0 w-[70vw] sm:w-[260px] md:w-[300px] lg:w-[320px] rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            {/* ヒーロー領域（画像 or プレースホルダ） */}
            <div className="relative h-40 rounded-t-2xl overflow-hidden">
              {ev.imageUrl ? (
                // 画像ある場合
                <img
                  src={ev.imageUrl}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                // 画像ない場合：primaryグラデ + パターン
                <div className="h-full w-full bg-primary" />
              )}
              {/* 角丸ラベル */}
              <span className="absolute top-3 left-3 text-xs font-semibold text-primary-foreground bg-primary/90 backdrop-blur rounded-full px-2 py-1">
                PAST
              </span>
            </div>

            {/* 本文 */}
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-primary/30 text-primary text-[11px] font-medium px-2 py-0.5">
                  {ev.date}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
                {ev.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {ev.description}
              </p>

              <div className="mt-4">
                <button className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-primary text-primary bg-white hover:bg-primary hover:text-white transition-colors">
                  詳細を見る
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PastEventsCarousel;
