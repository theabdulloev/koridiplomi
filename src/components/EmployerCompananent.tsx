"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import LogoKor from "./Logo";
import Link from "next/link";
import Typewriter from "typewriter-effect";
export default function EmployerCompanent() {
  return (
    <>
      <div className="text-5xl flex gap-3 flex-col items-center">
        <div className="text-black w-full px-5 flex gap-2">
          <Typewriter
            options={{
              strings: [
                "• Кушодани ҷойҳои корӣ, ки тиҷорати шуморо пеш мебаранд.",
                "• Шарики боэътимоди шумо дар ҷустуҷӯи кадр.",
                "• Пайвастани истеъдодҳо бо имконот.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
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
