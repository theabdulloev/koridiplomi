import type { Metadata } from "next";
import React from "react";
// import { Inter } from "next/font/google";
import "./globals.css";
import HeaderKor from "./components/HeaderKor";
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
    <html lang="en">
      <body className="w-screen bg-white  h-screen flex flex-col overflow-x-hidden">
        <Analytics />
        <HeaderKor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
