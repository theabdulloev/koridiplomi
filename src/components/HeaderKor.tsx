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
  ModalFooter,
  Checkbox,
  Tabs,
  Input,
  CardBody,
  ModalBody,
  ModalHeader,
  Modal,
  ModalContent,
  useDisclosure,
  Tab,
  Card,
} from "@nextui-org/react";
import LogoKor from "./Logo";
import { usePathname } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { HeaderToggle } from "../app/store/atom/store";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { toast } from "sonner";
setTimeout(() => {
  toast("My toast on a page load");
});

export default function App() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
  const [selected, setSelected] = React.useState<string | number>("login");
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
            <Button onPress={onOpen} color="warning" variant="flat">
              Ворид шудан
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-center dark:text-white gap-1">
                BEKOR TJ
              </ModalHeader>
              <ModalBody>
                {/* <Input
                  label="Email"
                  placeholder="Почтаи электронии худро ворид кунед"
                  variant="bordered"
                />
                <Input
                  label="Рамз"
                  placeholder="Рамзи худро ворид кунед"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Маро дар ёд дор
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Калидвожа фаромӯш шуд?
                  </Link>
                </div> */}
                <div className="flex flex-col w-full">
                  <Tabs
                    fullWidth
                    size="md"
                    aria-label="Tabs form"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                  >
                    <Tab key="login" title="Ворид шудан">
                      <form className="flex flex-col gap-4">
                        <Input
                          isRequired
                          label="Email"
                          placeholder="Почтаи электронии худро ворид кунед"
                          type="email"
                        />
                        <Input
                          isRequired
                          label="Password"
                          placeholder="Рамзи худро ворид кунед"
                          type="password"
                        />
                        {/* <p className="text-center text-small">
                          Need to create an account?{" "}
                          <Link
                            size="sm"
                            onPress={() => setSelected("sign-up")}
                          >
                            Sign up
                          </Link>
                        </p> */}
                        <div className="flex gap-2 justify-end">
                          <Button fullWidth color="primary">
                            Ворид шудан
                          </Button>
                        </div>
                      </form>
                    </Tab>
                    <Tab key="sign-up" title="Аз қайд гузаштан">
                      <form className="flex flex-col gap-4 h-[300px]">
                        <Input
                          isRequired
                          label="Ном"
                          placeholder="Номи худро ворид кунед"
                          type="password"
                        />
                        <Input
                          isRequired
                          label="Email"
                          placeholder="Почтаи электронии худро ворид кунед"
                          type="email"
                        />
                        <Input
                          isRequired
                          label="Password"
                          placeholder="Рамзи худро ворид кунед"
                          type="password"
                        />
                        {/* <p className="text-center text-small">
                          Already have an account?{" "}
                          <Link size="sm" onPress={() => setSelected("login")}>
                            Ворид шудан
                          </Link>
                        </p> */}
                        <div className="flex gap-2 justify-end">
                          <Button fullWidth color="primary">
                            Аз қайд гузаштан
                          </Button>
                        </div>
                      </form>
                    </Tab>
                  </Tabs>
                </div>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Ворид шудан
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
