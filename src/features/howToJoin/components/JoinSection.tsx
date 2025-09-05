// features/joinSection/components/JoinSection.tsx
"use client";

import React from "react";

/**
 * 画像のような4分割カード構成へ刷新
 * - 左上に番号バッジ（オレンジ系）。
 * - タイトル + 小説明 + シンプル線画アイコン。
 * - スマホ1列 → sm:2列グリッド。
 * - 既存の雰囲気（丸み・リング・変数カラー）を維持。
 */

const accent = "[color:var(--accent,#ff6a3d)]"; // アクセント（なければオレンジ）

const Card = ({
  num,
  title,
  desc,
  icon,
}: {
  num: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) => (
  <div
    className="relative rounded-xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-sm p-4 sm:p-5 shadow-sm hover:shadow transition-shadow"
    role="group"
  >
    {/* 番号バッジ */}
    <div
      className={`absolute -top-2 -left-2 grid h-8 w-8 place-items-center bg-primary rounded-md bg-${accent} text-white text-[15px] font-bold tracking-tight shadow-sm`}
      aria-hidden
    >
      {num}
    </div>

    {/* アイコン + タイトル */}
    <div className="flex items-start gap-3">
      <div className="flex-none grid h-10 w-10 place-items-center rounded-lg bg-[var(--muted)] text-[var(--muted-foreground)] ring-1 ring-[var(--border)]">
        <span className="h-5 w-5 text-current" aria-hidden>
          {icon}
        </span>
      </div>
      <div className="min-w-0">
        <h3 className="text-[15px] sm:text-base font-bold text-foreground leading-tight">
          {title}
        </h3>
        <p className="mt-1 text-[13px] sm:text-[13.5px] text-muted-foreground leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  </div>
);

const JoinSection = () => {
  return (
    <section
      id="howtojoin"
      aria-labelledby="join-title"
      className="relative mx-auto max-w-6xl pb-7 pt-5"
      style={{
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))",
      }}
    >
      {/* ヘッダー */}
      <header className="mb-5 sm:mb-6">
        <span className="inline-flex items-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] ring-1 ring-[var(--primary)]/15 px-2.5 py-1 text-xs font-medium">
          イベント参加方法
        </span>
        <h2
          id="join-title"
          className="mt-2 font-heading text-lg sm:text-xl font-bold text-foreground tracking-tight"
        >
          かんたん3ステップ
        </h2>
      </header>

      {/* 4カード グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {/* 1. 開催イベントを探す */}
        <Card
          num={1}
          title="開催予定イベントを一覧から探す"
          desc="気になる回を見つけたら「参加する」ボタンを押して「つなげーと」へ移動。"
          icon={
            // カレンダー+検索
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 3v3M17 3v3M4 9h16" />
              <rect x="4" y="7" width="16" height="13" rx="2" ry="2" />
              <circle cx="16" cy="16" r="2.2" />
              <path d="M17.6 17.6l1.6 1.6" />
            </svg>
          }
        />
        {/* 3. つなげーとで参加登録 */}
        <Card
          num={2}
          title="『つなげーと』で参加登録"
          desc="決済や申込み項目を入力して参加登録。必要事項を確認して参加を確定します。"
          icon={
            // チケット + チェック
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9a2 2 0 0 1 2-2h9l3 3v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9z" />
              <path d="M9 13l2 2 3.5-3.5" />
            </svg>
          }
        />

        {/* 4. 当日参加する */}
        <Card
          num={3}
          title="当日一緒に楽しむ！"
          desc="開催場所に着いたらつなげーとで登録した名前を主催者に伝える！"
          icon={
            // 箱(到着)→ 音符スマイルよりユースケースに寄せる
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-4 9 4-9 4-9-4z" />
              <path d="M21 9v6l-9 4-9-4V9" />
              <path d="M8.5 15.5c.5 1.3 1.7 2.2 3.5 2.2s3-.9 3.5-2.2" />
              <circle cx="10.5" cy="13.2" r=".7" fill="currentColor" />
              <circle cx="14.5" cy="13.2" r=".7" fill="currentColor" />
            </svg>
          }
        />
      </div>

      {/* フッターの補助文（任意） */}
      <p className="mt-4 text-[13px] text-muted-foreground">
        ※ 料金はイベントごとに異なる場合があります。各ページの案内をご確認ください。
      </p>
    </section>
  );
};

export default JoinSection;
