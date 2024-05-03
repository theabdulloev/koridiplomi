"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
export default function EmployerCompanent() {
  return (
    <>
      <div className="text-5xl flex gap-3 flex-col items-center justify-center min-h-96 container mx-auto">
        <div className="text-black w-full px-5 flex flex-col gap-2 dark:text-white">
          <p>• Кушодани ҷойҳои корӣ, ки тиҷорати шуморо пеш мебаранд.</p>
          <p>• Шарики боэътимоди шумо дар ҷустуҷӯи кадр.</p>
          <p>• Пайвастани истеъдодҳо бо имконот.</p>
        </div>
        <Button
          href="/employer/createvacancies"
          as={Link}
          color="primary"
          variant="solid"
        >
          Илова кардани ҷои корӣ
        </Button>
      </div>
    </>
  );
}
