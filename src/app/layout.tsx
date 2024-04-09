import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import HeaderKor from "./components/HeaderKor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  title: "KOR TJ - Портали ҷойҳои корӣ",
  description: "Кори дипломии Абдуллоев Исмоилчон Комилчонович 2020-2024",
  authors: [{ name: "Ismoiljon Abdulloev", url: "instagram.com/theabdulloev" }],
  appleWebApp: {
    capable: true,
    title: "KOR TJ",
    statusBarStyle: "black-translucent",
  },
  category: "Vacancies Web-App",
  applicationName: "KOR TJ ваканция",
  keywords: ["vacancies", "ваканция", "вакансия", "кор"],
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9758420922937149"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-9758420922937149"></meta>
      </head>
      <body className="w-screen bg-white  h-screen flex flex-col overflow-x-hidden">
        <SpeedInsights />
        <Analytics />
        <HeaderKor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
