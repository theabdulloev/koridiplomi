import type { Metadata } from "next";
import React from "react";
// import { Inter } from "next/font/google";
import "./globals.css";
import HeaderKor from "./components/headerKor";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "KOR TJ - Портали ҷойҳои корӣ",
  description: "Кори дипломии Абдуллоев Исмоилчон Комилчонович 2020-2024",
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="w-screen h-screen flex flex-col overflow-x-hidden">
        <HeaderKor />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
