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
      <div className="w-full flex justify-center items-center h-8 bg-gray-200 text-gray-500">
          Кори дипломии Абдуллоев Исмоилчон Комилчонович 2020-2024
        </div>
    </NextUIProvider>
  );
}
