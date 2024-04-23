// app/providers.tsx
"use client";
import React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { RecoilRoot } from "recoil";
import { Toaster } from "sonner";
export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <RecoilRoot>
      <NextUIProvider
        className="w-full text-foreground bg-background"
        navigate={router.push}
      >
        <NextThemesProvider attribute="class" defaultTheme="light">
          {children}
          <Toaster closeButton />
        </NextThemesProvider>
        <div className="w-full flex dark:bg-black justify-center items-center h-14 text-center sm:h-8">
          Кори дипломии Абдуллоев Исмоилчон Комилчонович 2020-2024
        </div>
      </NextUIProvider>
    </RecoilRoot>
  );
}
