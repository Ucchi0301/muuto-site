"use client";

import { EventItem } from "@/types/events";
import React, { useRef } from "react";
import EventCard from "./EventCard";

type Props = {
  title?: string;
  events: EventItem[];
  /** セクション背景色などを変えたい場合 */
  headerClassName?: string;
};

const EventCarousel: React.FC<Props> = ({
  title = "イベント",
  events,
  headerClassName = "",
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLDivElement>('[data-card="true"]');
    const delta = (card?.offsetWidth ?? 320) + 16; // 1カード + gap
    track.scrollBy({
      left: dir === "left" ? -delta : delta,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full">
      {/* ヘッダ */}
      <div
        className={`flex items-end justify-between mb-3 px-2 sm:px-4 ${headerClassName}`}
      >
        <h2 className="text-lg sm:text-xl font-semibold text-foreground">
          {title}
        </h2>
        <div className="hidden md:flex items-center gap-2">
          <button
            aria-label="scroll left"
            onClick={() => scrollByCards("left")}
            className="h-9 w-9 rounded-full border border-[var(--primary)]/30 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="scroll right"
            onClick={() => scrollByCards("right")}
            className="h-9 w-9 rounded-full border border-[var(--primary)]/30 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      {/* フェードエッジ（背景に合わせて白→透明。必要なら変えてOK） */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[var(--background)] to-transparent" />

      {/* トラック */}
      <div
        ref={trackRef}
        className="
relative flex gap-4 overflow-x-auto scroll-smooth scrollbar-none
    px-2 sm:px-4 py-2
    scroll-pl-8 sm:scroll-pl-10
    scroll-pr-4 sm:scroll-pr-6
  "
        style={{ WebkitOverflowScrolling: "touch" }}
        role="list"
      >
        {events.map((ev, idx) => (
          <EventCard key={`${ev.title}-${ev.date}-${idx}`} item={ev} />
        ))}
      </div>
    </section>
  );
};

export default EventCarousel;
