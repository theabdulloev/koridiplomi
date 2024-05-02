import { Button } from "@nextui-org/react";
import { Metadata } from "next";
import React from "react";
import LogoKor from "../../components/svg/Logo";
import EmployerCompanent from "../../components/EmployerCompananent";
export const metadata: Metadata = {
  title: "BEKOR TJ - Работодателям",
  description: "Разместите вакансию на BEKOR TJ",
};
export default function Employer() {
  return (
    <main className="w-full dark:bg-black">
      <EmployerCompanent></EmployerCompanent>
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
