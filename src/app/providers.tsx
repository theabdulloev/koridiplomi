// app/providers.tsx
"use client";
import React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider className="w-full h-full" navigate={router.push}>
      {children}
      <div className="w-full dark:bg-black flex justify-center items-center h-14 text-center sm:h-8">
        Кори дипломии Абдуллоев Исмоилчон Комилчонович 2020-2024
      </div>
    </NextUIProvider>
  );
}
