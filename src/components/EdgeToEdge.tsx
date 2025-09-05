// components/EdgeToEdge.tsx
"use client";

import React from "react";

/**
 * 中身だけを画面端まで（フルブリード）広げるラッパー。
 * 親側の pl/pr はそのまま活かせる。
 */
// components/EdgeToEdge.tsx
export default function EdgeToEdge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"
      style={{
        paddingLeft: "max(0px, env(safe-area-inset-left))",
        paddingRight: "max(0px, env(safe-area-inset-right))",
      }}
    >
      {children}
    </div>
  );
}
