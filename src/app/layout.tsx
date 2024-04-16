import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import HeaderKor from "./components/HeaderKor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
export const metadata: Metadata = {
  title: "BEKOR TJ - Портали ҷойҳои кории холӣ",
  description:
    "Кори дипломии Абдуллоев Исмоилчон Комилчонович 2020-2024, Донишгохи Давлатии Хучанд ба номи академик Бобочон Гафуров",
  authors: [{ name: "Ismoiljon Abdulloev", url: "instagram.com/theabdulloev" }],
  appleWebApp: {
    capable: true,
    title: "BEKOR TJ",
    statusBarStyle: "black-translucent",
  },
  category: "Vacancies Web-App",
  applicationName: "BEKOR TJ ваканция",
  openGraph: {
    type: "website",
    url: "https://bekor.vercel.app",
    title: "BEKOR TJ - Портали ҷойҳои кории холӣ",
    description: "BEKOR TJ - Портали ҷойҳои кории холӣ",
    siteName: "BEKOR TJ - Портали ҷойҳои кории холӣ",
    images: [
      {
        url: "https://bekor.vercel.app/favicon.ico",
      },
    ],
  },
  keywords: ["vacancies", "ваканция", "вакансия", "кор"],
};

import { Providers } from "./providers";
import { StoreProvider } from "@/store/StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <meta
            name="google-adsense-account"
            content="ca-pub-9758420922937149"
          ></meta>
          <ColorSchemeScript />
        </head>
        <body className="w-screen h-screen flex flex-col overflow-x-hidden">
          <SpeedInsights />
          <Analytics />
          <HeaderKor />
          <MantineProvider>
            <Providers>{children}</Providers>
          </MantineProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
