"use client";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Tab,
  Tabs,
} from "@nextui-org/react";
import * as route from "next/navigation";
import { useState } from "react";

export default function Footer() {
  const pathname = route.usePathname();
  const para = route.useSearchParams()
  console.log(para);
  const [selected, setSelected] = useState("main");
  console.log(pathname);
  return (
    <main className="sm:hidden">
      <Tabs fullWidth className="fixed bottom-0" selectedKey={pathname}>
        <Tab key="/" title="Асоси" href="/"></Tab>
        <Tab key="/employer" title="Корфармо" href="/employer"></Tab>
        <Tab key="/profile" title="Профил" href="/profile"></Tab>
      </Tabs>
    </main>
  );
}
