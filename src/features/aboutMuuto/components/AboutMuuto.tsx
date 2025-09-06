const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="group flex items-center rounded-xl border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-sm p-4 hover:bg-[var(--card)] transition-colors h-27  ">
    <div className="flex items-start gap-3">
      {/* ← アイコン枠は完全固定＆非伸縮 */}
      <div
        className="
          mt-1 flex-none h-9 w-9
          rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]
          ring-1 ring-[var(--primary)]/15
          grid place-items-center
        "
      >
        {/* 子SVGを強制フィット（幅・高さを必ず揃える） */}
        <span
          className="block h-5 w-5 text-inherit
                         [&>svg]:block [&>svg]:h-full [&>svg]:w-full
                         [&>svg]:stroke-current"
        >
          {icon}
        </span>
      </div>

      {/* ← テキストは伸縮担当 */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
          {desc}
        </p>
      </div>
    </div>
  </div>
);

const AboutMuuto = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative mx-auto max-w-6xl pb-10"
      style={{
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={
          {
            backgroundImage: `
      linear-gradient(to right,
        color-mix(in oklch, var(--foreground) 4%, transparent) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom,
        color-mix(in oklch, var(--foreground) 4%, transparent) 1px,
        transparent 1px
      )
    `,
            backgroundSize: "var(--grid-size,24px) var(--grid-size,24px)",
            backgroundPosition: "0 0, 0 0",
            maskImage:
              "linear-gradient(135deg, black 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(135deg, black 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "cover",
            WebkitMaskSize: "cover",
          } as React.CSSProperties
        }
      />
      {/* === /背景ここまで === */}

      {/* セクションヘッダ */}
      <header className="mb-6 sm:mb-8">
        <span className="inline-flex items-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] ring-1 ring-[var(--primary)]/15 px-2.5 py-1 text-xs font-medium">
          muutoについて
        </span>
        <h2
          id="about-title"
          className="mt-3 font-heading text-xl sm:text-2xl font-bold text-foreground tracking-tight"
        >
          音楽が好き、それだけでいい。
        </h2>
        <p className="mt-2 text-[15px] text-[color:var(--muted-foreground)] md:[&>br]:hidden">
          音楽が大好き、
          <br />
          だけど周りに語り合える友達がいない。
          <br />
          そんなあなたのためのDJサークルです。
          <br />
          2025年1月に設立されたばかりの新しいサークルです。
          <br />
          現在20名以上の方がメンバーとして参加しています。
        </p>
      </header>

      {/* キービジュアル（16:9固定）＋ テキスト。スマホは縦積み、md以上で左右レイアウト */}
      <div className="grid gap-4 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <div className="w-full aspect-video bg-[var(--muted)]">
              {/* 画像があれば差し替え */}
              <img
                src="/サークル完成.png"
                alt="サークルの雰囲気"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* 角丸ラベル */}
            <span className="absolute top-3 left-3 rounded-full bg-[var(--primary)]/90 text-[var(--primary-foreground)] text-[11px] font-semibold px-2 py-1">
              COMMUNITY
            </span>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <Feature
            icon={
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M12 3l1.5 3.8L17 8.5l-3.5 1.7L12 14l-1.5-3.8L7 8.5l3.5-1.7L12 3zM6 14l.9 2.3L9 17l-2.1 1L6 20l-.9-2L3 17l2.1-.7L6 14zm12-2l.9 2.3L21 15l-2.1 1L18 18l-.9-2L15 15l2.1-.7L18 12z" />
              </svg>
            }
            title="初心者大歓迎（未経験OK）"
            desc="参加者のほとんどの方がDJ未経験です！"
          />

          <Feature
            icon={
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M4 12v2M7 9v8M10 6v12M13 10v8M16 8v10M19 11v5" />
              </svg>
            }
            title="オールジャンルOK"
            desc="ハウス、EDM、テクノ、J-POP、Pops、ロック、R&B、disco、funkなどなど"
          />

          <Feature
            icon={
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M8 7v10M12 7v10M16 7v10M8 10h2M12 13h2M16 9h2" />
              </svg>
            }
            title="本格的な機材で練習"
            desc="クラブ標準に近い機材がある場所で練習をしています！"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMuuto;
