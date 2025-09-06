// components/GallerySection.tsx
"use client";

import React, { useMemo, useRef } from "react";

type Props = {
  /** 画像URLの配列（奇数個でもOK）。altは省略したいので必要なら captions で補う */
  images: string[];
  /** 各画像に対応するキャプション（任意） */
  captions?: (string | undefined)[];
  title?: string;
};

function toPairs<T>(arr: T[]) {
  const pairs: [T, T | null][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push([arr[i], arr[i + 1] ?? null]);
  }
  return pairs;
}

const GallerySection: React.FC<Props> = ({
  images,
  captions = [],
  title = "サークルの様子",
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const pairs = useMemo(() => toPairs(images), [images]);

  const scrollByCols = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const col = track.querySelector<HTMLDivElement>('[data-col="true"]');
    const delta = (col?.offsetWidth ?? 260) + 16; // 1カラム + gap
    track.scrollBy({
      left: dir === "left" ? -delta : delta,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full">
      {/* ヘッダ */}
      <div className="flex items-end justify-between mb-3 px-2 sm:px-4">
        <h2 className="text-lg sm:text-xl font-semibold text-foreground">
          {title}
        </h2>
        <div className="hidden md:flex items-center gap-2">
          <button
            aria-label="scroll left"
            onClick={() => scrollByCols("left")}
            className="h-9 w-9 rounded-full border border-[var(--primary)]/30 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="scroll right"
            onClick={() => scrollByCols("right")}
            className="h-9 w-9 rounded-full border border-[var(--primary)]/30 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      {/* フェードエッジ（背景に馴染む） */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[var(--background)] to-transparent" />

      {/* トラック */}
      <div
        ref={trackRef}
        className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none px-2 sm:px-4 py-2"
        style={{ WebkitOverflowScrolling: "touch" }}
        role="list"
      >
        {pairs.map(([top, bottom], i) => (
          <div
            key={`col-${i}`}
            data-col="true"
            className="
               shrink-0
              w-[70vw] sm:w-[240px] md:w-[280px] lg:w-[320px]
              flex flex-col gap-4
            "
            role="listitem"
          >
            {/* Top image */}
            <figure
              className="
                group relative overflow-hidden rounded-xl
                border border-[var(--border)] bg-[var(--card)]
                shadow-sm
              "
            >
              <div className="aspect-video">
                {top ? (
                  <img
                    src={top}
                    alt={captions[i * 2] ?? ""}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    draggable={false}
                  />
                ) : (
                  <div className="h-full w-full bg-[var(--muted)]" />
                )}
              </div>
              {captions[i * 2] && (
                <figcaption className="absolute bottom-2 left-2 rounded-full bg-[var(--background)]/70 backdrop-blur px-2 py-0.5 text-[10px] text-[color:var(--muted-foreground)] ring-1 ring-[var(--border)]/60">
                  {captions[i * 2]}
                </figcaption>
              )}
            </figure>

            {/* Bottom image */}
            <figure
              className="
                group relative overflow-hidden rounded-xl
                border border-[var(--border)] bg-[var(--card)]
                shadow-sm
              "
            >
              <div className="aspect-video">
                {bottom ? (
                  <img
                    src={bottom}
                    alt={captions[i * 2 + 1] ?? ""}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    draggable={false}
                  />
                ) : (
                  <div className="h-full w-full bg-[var(--muted)]" />
                )}
              </div>
              {captions[i * 2 + 1] && (
                <figcaption className="absolute bottom-2 left-2 rounded-full bg-[var(--background)]/70 backdrop-blur px-2 py-0.5 text-[10px] text-[color:var(--muted-foreground)] ring-1 ring-[var(--border)]/60">
                  {captions[i * 2 + 1]}
                </figcaption>
              )}
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
