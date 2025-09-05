"use client";

import { useState, useEffect, useRef } from "react";
import Button from "@/components/Button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);

  // Aboutセクションを監視してヘッダー表示切替
  useEffect(() => {
    const target = document.getElementById("hero");
    if (!target) return;

    const io = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];
        // About が見えているとき → ヘッダー非表示
        setVisible(ent.isIntersecting);
        if (ent.isIntersecting && open) setOpen(false);
      },
      { threshold: 0.1 }
    );

    io.observe(target);
    return () => io.disconnect();
  }, [open]);

  // メニュー外クリックで閉じる
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (open && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  // ESCで閉じる
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-border bg-card/50 backdrop-blur-sm supports-[backdrop-filter]:bg-card/60",
        "transition-transform duration-500 will-change-transform",
        visible ? "translate-y-0" : "-translate-y-full",
        "motion-reduce:transition-none motion-reduce:transform-none",
      ].join(" ")}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* 上段 */}
      <div
        className="mx-auto max-w-6xl"
        style={{
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        <div className="flex h-14 items-center justify-between">
          {/* 左：ハンバーガー */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-md text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="メニューを開く/閉じる"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <span className="sr-only">メニュー</span>
            </button>
          </div>

          {/* 中央：ロゴ/タイトル */}
          <div className="text-center md:text-left">
            <h1 className="font-heading font-bold text-lg sm:text-xl text-foreground leading-none">
              muuto
            </h1>
            <p className="text-[12px] sm:text-sm text-muted-foreground leading-tight">
              東京のDJサークル
            </p>
          </div>

          {/* 右：リンク/CTA */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#about"
                className="text-foreground/90 hover:text-primary transition-colors"
              >
                サークルについて
              </a>
              <a
                href="#safety"
                className="text-foreground/90 hover:text-primary transition-colors"
              >
                安心の取り組み
              </a>
              <a
                href="#howtojoin"
                className="text-foreground/90 hover:text-primary transition-colors"
              >
                参加方法
              </a>
            </div>
            <div className="hidden md:block">
              <Button href="#events">参加する</Button>
            </div>
            <div className="md:hidden">
              <a
                href="#events"
                className="inline-flex h-9 items-center rounded-xl border border-[var(--primary)] px-3 text-[13px] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors"
              >
                イベントを探す
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 下段：モバイルナビ */}
      <div
        id="mobile-nav"
        ref={panelRef}
        className={[
          "md:hidden border-t border-border",
          "bg-[var(--popover)]/85 backdrop-blur-sm supports-[backdrop-filter]:bg-[var(--popover)]/90",
          "transition-[max-height,opacity] duration-300 ease-out overflow-hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav
          className="flex flex-col"
          style={{
            paddingLeft: "max(1rem, env(safe-area-inset-left))",
            paddingRight: "max(1rem, env(safe-area-inset-right))",
          }}
        >
          <a
            href="#about"
            className="py-3 text-foreground/90 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            サークルについて
          </a>
          <a
            href="#safety"
            className="py-3 text-foreground/90 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            安心の取り組み
          </a>
          <a
            href="#howtojoin"
            className="py-3 text-foreground/90 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            参加方法
          </a>

          <div className="py-3">
            <Button href="#events">イベントを探す</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
