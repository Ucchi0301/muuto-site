import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 必要な太さを指定
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "東京のDJサークル - muuto",
  description:
    "東京で活動するDJサークルmuuto。初心者から経験者まで大歓迎！クラブ標準の機材で練習でき、ジャンルを問わず仲間とつながれる。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSans.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
