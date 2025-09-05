// Footer.tsx
const Footer = () => {
  return (
    <footer
      className="border-t border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-sm supports-[backdrop-filter]:bg-[var(--card)]/70"
      style={{
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))",
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
      }}
    >
      {/* 上段 */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
              muuto
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
              東京で活動するDJサークル。初心者歓迎・オールジャンルOK・本格機材で練習。
            </p>

            {/* SNS：タップ領域40px・アイコン20pxで統一 */}
            <div className="mt-4 flex items-center gap-2.5">
              <a
                aria-label="Instagram"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-foreground/80 hover:text-[var(--primary)] hover:border-[var(--primary)]/40 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" />
                </svg>
              </a>
              <a
                aria-label="X"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-foreground/80 hover:text-[var(--primary)] hover:border-[var(--primary)]/40 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M14.7 4h3.1l-6.8 8.2L19 20h-3.1l-5.2-6.3L5.9 20H2.8l7.3-8.9L3 4h3.1l4.8 5.9L14.7 4z" />
                </svg>
              </a>
              <a
                aria-label="YouTube"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-foreground/80 hover:text-[var(--primary)] hover:border-[var(--primary)]/40 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M23 8.3a4 4 0 0 0-2.8-2.9C18.5 5 12 5 12 5s-6.5 0-8.2.4A4 4 0 0 0 1 8.3 41 41 0 0 0 1 12a41 41 0 0 0 .8 3.7 4 4 0 0 0 2.8 2.9C5.5 19 12 19 12 19s6.5 0 8.2-.4a4 4 0 0 0 2.8-2.9A41 41 0 0 0 23 12a41 41 0 0 0 0-3.7zM10 15V9l5 3-5 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <nav className="text-sm">
            <h4 className="font-medium text-foreground">サークル情報</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-[color:var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  muutoについて
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-[color:var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  イベント
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-[color:var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  よくある質問
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[color:var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* 下段 */}
      <div className="border-t border-[var(--border)]">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[color:var(--muted-foreground)]">
            © {new Date().getFullYear()} muuto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
