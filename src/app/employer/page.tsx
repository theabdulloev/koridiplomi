import { Button } from "@nextui-org/react";
import { Metadata } from "next";
import React from "react";
import LogoKor from "../components/Logo";
export const metadata: Metadata = {
  title: "BEKOR TJ - Работодателям",
  description: "Разместите вакансию на BEKOR TJ",
};
export default function Employer() {
  return (
    <main className="w-full h-full flex justify-center flex-col gap-5 items-center">
      <div className="text-5xl text-primary flex gap-3 flex-col text-center justify-center items-center">
        Разместите вакансию на{" "}
        <div className="text-black dark:text-white flex gap-2 justify-center items-center">
          <LogoKor /> BEKOR TJ
        </div>
      </div>
      <Button className="bg-black text-white" variant="shadow">
        Разместить ваканцию
      </Button>
      {/* <Card className="w-1/2 h-1/2">
        <CardHeader className="flex gap-3"></CardHeader>
        <Divider />
        <CardBody></CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card> */}
    </main>
  );
}
