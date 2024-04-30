"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import * as route from "next/navigation";
export default function Footer() {
  const pathname = route.usePathname();
  return (
    <main className="sm:hidden  w-full fixed bottom-0 z-50 bg-white dark:bg-black dark:text-white">
      <ButtonGroup
        variant="light"
        className="text-teal-500"
        fullWidth
        radius="none"
      >
        <Button
          className={
            pathname == "/" ? "flex flex-col text-teal-500" : "flex flex-col"
          }
          href="/"
          as={Link}
          color={pathname == "/" ? "danger" : "default"}
        >
          <Icon fontSize={25} icon="iconoir:home" />
          Асосӣ
        </Button>
        <Button
          href="/employer"
          as={Link}
          className={
            pathname == "/employer" || pathname == "/employer/createvacancies"
              ? "flex flex-col text-teal-500"
              : "flex flex-col"
          }
        >
          <Icon fontSize={25} icon="iconoir:add-circle" />
          Корфармо
        </Button>
        <Button
          href="/notification"
          as={Link}
          className={
            pathname == "/notification"
              ? "flex flex-col text-teal-500"
              : "flex flex-col"
          }
        >
          <Icon fontSize={25} icon="iconoir:bell-notification" />
          Огоҳинома
        </Button>
        <Button
          href="/profile"
          as={Link}
          className={
            pathname == "/profile"
              ? "flex flex-col text-teal-500"
              : "flex flex-col"
          }
        >
          <Icon fontSize={25} icon="iconamoon:profile" />
          Профил
        </Button>
      </ButtonGroup>
    </main>
  );
}
