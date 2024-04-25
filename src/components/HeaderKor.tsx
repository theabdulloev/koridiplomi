"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import LogoKor from "./Logo";
import { usePathname } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { HeaderToggle } from "../app/store/atom/store";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { toast } from "sonner";
import { useViewportSize } from '@mantine/hooks';
setTimeout(() => {
  toast("My toast on a page load");
});

export default function App() {
  const pathname = usePathname();
  const menuItems = [
    { title: "Соискателям", hrefName: "/" },
    { title: "Работодателям", hrefName: "/employer" },
    { title: "Профиль", hrefName: "/profile" },
    { title: "Помощь", hrefName: "/help" },
    { title: "Настройки", hrefName: "/settings" },
    { title: "Выйти", hrefName: "/logout" },
  ];
  const toggle: boolean = useRecoilValue(HeaderToggle);
  const setToggleMenu = useSetRecoilState(HeaderToggle);
  const setIsMenuOpen = () => {
    setToggleMenu(() => !toggle);
  };
  return (
    <>
      <Navbar isBordered isMenuOpen={toggle} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={toggle ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="start">
          <NavbarBrand className="gap-3">
            <LogoKor />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand className="gap-3">
            <div className="flex items-center gap-3 px-2 rounded-lg">
              <LogoKor />
              <p className="font-bold text-black dark:text-white text-3xl text-inherit">
                BEKOR TJ
              </p>
            </div>
          </NavbarBrand>
          <NavbarItem isActive={pathname == "/"}>
            <Link
              className={pathname == "/" ? "text-primary" : "text-foreground"}
              color="foreground"
              href="/"
            >
              Корҷу
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
              Корфармо
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>
          <NavbarItem>
            <Link isBlock  href="/login" color="warning">
              Ворид шудан
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.hrefName}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
