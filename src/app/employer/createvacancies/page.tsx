import Create from "@/components/create";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "BEKOR TJ - Работодателям",
  description: "Разместите вакансию на BEKOR TJ",
};
export default function Employer() {
  return (
    <main className="w-full h-screen flex justify-center flex-col gap-5 items-center">
     <Create></Create>
    </main>
  );
}
