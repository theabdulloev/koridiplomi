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
import LogoKor from "./Logo";

export default function HeaderKor() {
  const pathname = usePathname();
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold flex space-x-2 text-inherit">
          <LogoKor />
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
              name="USERNAME"
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">USERNAME</p>
              <p className="font-semibold">example@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Настройки</DropdownItem>
            <DropdownItem key="team_settings">Статьи</DropdownItem>
            <DropdownItem key="configurations">Конфигурация</DropdownItem>
            <DropdownItem key="help_and_feedback">Помощь</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Выйти
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
