// SafetySection.tsx
// Modern Impact：赤系を上品に、情報設計はシンプル＆読みやすく

const RuleItem = ({ children }: { children: React.ReactNode }) => (
  <li
    className="
      flex items-center gap-3 rounded-xl
      border border-[var(--destructive)]/30
      bg-[var(--destructive)]/5
      px-4 py-3 font-semibold
      text-[var(--destructive)]
    "
  >
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 8.5l7 7" strokeLinecap="round" />
    </svg>
    <p className="flex-1 min-w-0">{children}</p>
  </li>
);

const SafetySection = () => {
  return (
    <section
      id="safety"
      aria-labelledby="safety-title"
      className="relative isolate"
    >
      {/* やさしい赤の環境光（うっすら） */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 600px at 50% -10%, oklch(0.577 0.245 27.325 / .06), transparent 70%)",
        }}
      />

      <div
        className="mx-auto max-w-6xl py-8 sm:py-12"
        style={{
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        {/* ヘッダ */}
        <header className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--destructive)]/20 bg-[var(--destructive)]/8 px-3 py-1">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--destructive)]/20 text-[var(--destructive)]">
              {/* シールド風アイコン */}
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden
              >
                <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
                <path d="M9 12l3 3 4-6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-xs font-semibold text-[var(--destructive)]">
              安心な環境づくり
            </span>
          </div>

          <h2
            id="safety-title"
            className="mt-3 font-heading font-bold tracking-tight text-foreground text-[clamp(20px,4.6vw,28px)]"
          >
            音楽を本気で楽しむサークル！
          </h2>
          <p className="mt-1.5 text-[15px] text-[color:var(--muted-foreground)]">
            muutoは純粋に音楽を楽しむことを目的としたサークルです。<br />
            以下の行為は固くお断りします。
            <br />
            発見した場合は
            <strong className="text-[var(--destructive)]">
              {" "}
              即時出禁
            </strong>
            とします。
          </p>
        </header>

        {/* ルールボード：グラス感 + 左アクセント */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-md p-4 sm:p-6 shadow-sm">
          <ul className="grid gap-3.5 sm:gap-4">
            <RuleItem>マルチ勧誘一切お断り</RuleItem>
            <RuleItem>ナンパ一切お断り</RuleItem>
            <RuleItem>その他勧誘一切お断り</RuleItem>
          </ul>

          {/* フッターバー：静かな強調（赤ベタは使わない） */}
          <div className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[var(--destructive)]/10 px-4 py-3">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-[var(--destructive)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 9v4m0 4h.01" strokeLinecap="round" />
              <path d="M12 3l9 16H3L12 3z" />
            </svg>
            <p className="text-sm sm:text-base font-semibold text-[var(--destructive)]">
              発見次第、即時出禁とします
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
