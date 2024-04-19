"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import LogoKor from "./Logo";
import Link from "next/link";

export default function EmployerCompanent() {
  return (
    <>
      <div className="text-5xl text-primary flex gap-3 flex-col text-center justify-center items-center">
        Разместите вакансию на{" "}
        <div className="text-black dark:text-white flex gap-2 justify-center items-center">
          <LogoKor /> BEKOR TJ
        </div>
      </div>
      <Button
        href="/employer/createvacancies"
        as={Link}
        color="primary"
        variant="solid"
      >
        Добавить ваканцию
      </Button>
    </>
  );
}
