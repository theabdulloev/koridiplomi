import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import HeaderKor from "../components/HeaderKor";
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
    description:
      "BEKOR TJ - Кори дипломии Абдуллоев Исмоилчон Комилчонович 2020-2024 - Донишгоҳи давлатии Хуҷанд ба номи академик Бобоҷон Ғафуров",
    siteName: "BEKOR TJ - Портали ҷойҳои кории холӣ",
    countryName: "TAJIKISTAN DUSHANBE",
    images: [
      {
        url: "https://bekor.vercel.app/logoAbdulloev.jpg",
      },
    ],
    alternateLocale: "TAJIKISTAN KHUJAND",
    emails: "ismoiljon.abdulloev.ibt@gmail.com",
    determiner: "the",
  },
  keywords: ["vacancies", "ваканция", "вакансия", "кор"],
};

import { Providers } from "./providers";
import Back from "@/components/back";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-9758420922937149"
        ></meta>
          <meta name="yandex-verification" content="1ede586f398d904e" />
        <meta
          name="google-site-verification"
          content="TY52qt7axMYAHDvC9xNbeZvTQlngPkvE6wWR5uzdtqk"
        />
        <Script type="application/ld+json" id="tag-manager">
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Как я могу разместить вакансию или создать резюме на вашем сайте?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Вы можете разместить вакансии и создать резюме бесплатно и без ограничений."
    }
  },{
    "@type": "Question",
    "name": "Нужно ли платить за размещение вакансий на вашем сайте?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Нет, размещение вакансий на нашем сайте бесплатно. Однако вы можете платить за продвижение ваших вакансий, чтобы они отображались в верхней части результатов поиска."
    }
  }]
}
          `}
        </Script>
      </head>
      <body className="w-screen  flex flex-col overflow-x-hidden">
        <SpeedInsights />
        <Analytics />
        <MantineProvider>
          <Providers>
            {/* <Back></Back> */}
            <HeaderKor />
            {children}
          </Providers>
        </MantineProvider>
      </body>
    </html>
  );
}
