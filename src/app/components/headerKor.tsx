"use client";

import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  Avatar,
  DropdownItem,
} from "@nextui-org/react";
import Logo from "./logo";
export default function HeaderKor() {
  const pathname = usePathname();
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold flex space-x-2 text-inherit">
          <Logo />
          <Link color="foreground" href="/">
            KOR TJ
          </Link>
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname == "/"}>
          <Link
            className={pathname == "/" ? "text-primary" : "text-foreground"}
            href="/"
          >
            Соискателям
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == "/employer"}>
          <Link
            className={
              pathname == "/employer" ? "text-primary" : "text-foreground"
            }
            href="/employer"
            aria-current="page"
          >
            Работодателям
          </Link>
        </NavbarItem>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[15rem] h-8",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Поиск..."
          size="sm"
          type="search"
        />
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              name="Jason Hughes"
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Войти</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Зарегистрироваться
          </Button>
        </NavbarItem>
      </NavbarContent>*/}
    </Navbar>
  );
}
