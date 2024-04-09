"use client";

// import { usePathname } from "next/navigation";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
//   Input,
//   Dropdown,
//   DropdownMenu,
//   DropdownTrigger,
//   Avatar,
//   DropdownItem,
// } from "@nextui-org/react";
// import LogoKor from "./Logo";

// export default function HeaderKor() {
//   const pathname = usePathname();
//   return (
//     <Navbar>
//       <NavbarBrand>
//         <p className="font-bold flex space-x-2 text-inherit">
//           <LogoKor />
//           <Link color="foreground" href="/">
//             KOR TJ
//           </Link>
//         </p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem isActive={pathname == "/"}>
//           <Link
//             className={pathname == "/" ? "text-primary" : "text-foreground"}
//             href="/"
//           >
//             Соискателям
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive={pathname == "/employer"}>
//           <Link
//             className={
//               pathname == "/employer" ? "text-primary" : "text-foreground"
//             }
//             href="/employer"
//             aria-current="page"
//           >
//             Работодателям
//           </Link>
//         </NavbarItem>
//         <Input
//           classNames={{
//             base: "max-w-full sm:max-w-[15rem] h-8",
//             mainWrapper: "h-full",
//             input: "text-small",
//             inputWrapper:
//               "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
//           }}
//           placeholder="Поиск..."
//           size="sm"
//           type="search"
//         />
//       </NavbarContent>
//       <NavbarContent as="div" className="items-center" justify="end">
//         <Dropdown placement="bottom-end">
//           <DropdownTrigger>
//             <Avatar
//               isBordered
//               as="button"
//               className="transition-transform"
//               name="USERNAME"
//               size="sm"
//             />
//           </DropdownTrigger>
//           <DropdownMenu aria-label="Profile Actions" variant="flat">
//             <DropdownItem key="profile" className="h-14 gap-2">
//               <p className="font-semibold">USERNAME</p>
//               <p className="font-semibold">example@example.com</p>
//             </DropdownItem>
//             <DropdownItem key="settings">Настройки</DropdownItem>
//             <DropdownItem key="team_settings">Статьи</DropdownItem>
//             <DropdownItem key="configurations">Конфигурация</DropdownItem>
//             <DropdownItem key="help_and_feedback">Помощь</DropdownItem>
//             <DropdownItem key="logout" color="danger">
//               Выйти
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </NavbarContent>

//       {/* <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Войти</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Зарегистрироваться
//           </Button>
//         </NavbarItem>
//       </NavbarContent>*/}
//     </Navbar>
//   );
// }

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
} from "@nextui-org/react";
import LogoKor from "./Logo";
import { usePathname } from "next/navigation";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const menuItems = [
    { title: "Соискателям", hrefName: "/" },
    { title: "Работодателям", hrefName: "/employer" },
    { title: "Профиль", hrefName: "/profile" },
    { title: "Помощь", hrefName: "/help" },
    { title: "Настройки", hrefName: "/settings" },
    { title: "Выйти", hrefName: "/logout" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand className="gap-3">
          <LogoKor />
          <p className="font-bold text-3xl text-inherit">KOR TJ</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="gap-3">
          <LogoKor />
          <p className="font-bold text-3xl text-inherit">KOR TJ</p>
        </NavbarBrand>
        <NavbarItem isActive={pathname == "/"}>
          <Link
            className={pathname == "/" ? "text-primary" : "text-foreground"}
            color="foreground"
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
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Войти
          </Button>
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
  );
}
