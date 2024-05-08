"use client";
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";
import LogoKor from "./svg/Logo";
import { usePathname } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { HeaderToggle } from "../app/store/atom/store";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { toast } from "sonner";
import { Icon } from "@iconify/react/dist/iconify.js";
import NotificationIcon from "./svg/notification";
setTimeout(() => {
    toast("My toast on a page load");
});

export default function App() {
    const pathname = usePathname();
    const toggle: boolean = useRecoilValue(HeaderToggle);
    const setToggleMenu = useSetRecoilState(HeaderToggle);
    const setIsMenuOpen = () => {
        setToggleMenu(() => !toggle);
    };
    return (
        <>
            <Navbar
                isBordered
                isMenuOpen={toggle}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent className="sm:hidden pr-3" justify="start">
                    <NavbarBrand className="gap-3">
                        <LogoKor />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarBrand className="gap-3">
                        <div className="flex items-center gap-3 px-2 rounded-lg">
                            <LogoKor />
                        </div>
                    </NavbarBrand>
                    <NavbarItem isActive={pathname == "/"}>
                        <Link
                            className={
                                pathname == "/"
                                    ? "text-primary"
                                    : "text-foreground"
                            }
                            color="foreground"
                            href="/"
                        >
                            Корҷу
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={pathname == "/regions"}>
                        <Link
                            className={
                                pathname == "/regions"
                                    ? "text-primary"
                                    : "text-foreground"
                            }
                            color="foreground"
                            href="/regions"
                        >
                            Минтака
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive={pathname == "/employer"}>
                        <Link
                            className={
                                pathname == "/employer" ||
                                pathname == "/employer/createvacancies"
                                    ? "text-primary"
                                    : "text-foreground"
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
                        <Button
                            color={
                                pathname == "/notification"
                                    ? "primary"
                                    : "default"
                            }
                            variant="light"
                            href="/notification"
                            as={Link}
                        >
                            <NotificationIcon />
                        </Button>
                    </div>
                    <div className="hidden md:block">
                        <ThemeSwitcher />
                    </div>
                    <NavbarItem>
                        <Link isBlock href="/login" className="text-primary">
                            Ворид шудан
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
}
