"use client";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import * as route from "next/navigation";
import HomeIcon from "./svg/home";
import NotificationIcon from "./svg/notification";
import ProfileIcon from "./svg/profile";
import SearchIcon from "./svg/search";
export default function Footer() {
  const pathname = route.usePathname();
  return (
    <main className="sm:hidden  w-full fixed bottom-0 z-50 bg-white border-t-1 dark:border-t-gray-700 dark:bg-black dark:text-white">
      <ButtonGroup
        variant="light"
        className="text-primary"
        fullWidth
        radius="none"
      >
        <Button
          className={
            pathname == "/" ? "flex flex-col text-primary" : "flex flex-col"
          }
          href="/"
          as={Link}
          color={pathname == "/" ? "danger" : "default"}
        >
          <HomeIcon />
        </Button>
        <Button
          href="/search"
          as={Link}
          className={
            pathname == "/search"
              ? "flex flex-col text-primary"
              : "flex flex-col"
          }
        >
          <SearchIcon />
        </Button>
        <Button
          href="/notification"
          as={Link}
          className={
            pathname == "/notification"
              ? "flex flex-col text-primary"
              : "flex flex-col"
          }
        >
          <NotificationIcon />
        </Button>
        <Button
          href="/profile"
          as={Link}
          className={
            pathname == "/profile"
              ? "flex flex-col text-primary"
              : "flex flex-col"
          }
        >
          <ProfileIcon />
        </Button>
      </ButtonGroup>
    </main>
  );
}
