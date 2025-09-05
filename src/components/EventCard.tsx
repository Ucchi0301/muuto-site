"use client";

import { EventItem } from "@/types/events";
import React from "react";

type Status = "upcoming" | "past";

function toStatus(dateStr: string): Status {
  const d = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    0,
    0,
    0,
    0
  );
  return target < today ? "past" : "upcoming";
}

export default function EventCard({ item }: { item: EventItem }) {
  const status = toStatus(item.date);

  return (
    <article
      data-card="true"
      className="
         shrink-0 w-[70vw] sm:w-[260px] md:w-[300px] lg:w-[320px]
        rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition
        flex flex-col overflow-hidden
      "
    >
      {/* 画像 */}
      <div className="relative h-40">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-primary" />
        )}
        <span className="absolute top-3 left-3 text-xs font-semibold text-primary-foreground bg-primary/90 backdrop-blur rounded-full px-2 py-1">
          {status === "past" ? "PAST" : "UPCOMING"}
        </span>
      </div>

      {/* 本文 */}
      <div className="p-4 flex flex-col flex-1">
        <div>
          {/* 日付と場所を横並びに */}
          <div className="mb-2 flex items-center gap-1 flex-wrap">
            <span className="inline-flex items-center rounded-full border border-primary/30 text-primary text-[11px] font-medium px-2 py-0.5">
              {item.date}
            </span>
            {item.location && (
              <span className="inline-flex items-center rounded-full border border-primary/30 text-primary text-[11px] font-medium px-2 py-0.5">
                {item.location}
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {item.description}
          </p>
        </div>

        {/* 下固定ボタン */}
        <div className="mt-auto pt-4">
          {status === "upcoming" ? (
            item.eventUrl ? (
              // 未来 & URLあり → 参加する
              <a
                href={item.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-primary text-primary bg-white hover:bg-primary hover:text-white transition-colors"
              >
                参加する
              </a>
            ) : (
              // 未来 & URLなし → Coming Soon
              <span className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-gray-300 text-gray-400 bg-white cursor-not-allowed">
                Info Coming Soon
              </span>
            )
          ) : (
            // 過去イベント
            item.eventUrl && (
              <a
                href={item.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-primary text-primary bg-white hover:bg-primary hover:text-white transition-colors"
              >
                詳細を見る
              </a>
            )
          )}
        </div>
      </div>
    </article>
  );
}
