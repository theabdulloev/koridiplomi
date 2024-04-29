"use client";
import {
  Tab,
  Tabs,
} from "@nextui-org/react";
import * as route from "next/navigation";
export default function Footer() {
  const pathname = route.usePathname();
<<<<<<< HEAD
=======
  const [selected, setSelected] = useState("main");
>>>>>>> a0bc1f29556537ef1eb353925080d02ccfa8dd0d
  console.log(pathname);
  return (
    <main className="sm:hidden">
      <Tabs
        size="lg"
        fullWidth
        className="fixed bottom-0"
        selectedKey={pathname}
      >
        <Tab key="/" title="Асоси" href="/"></Tab>
        <Tab key="/employer" title="Корфармо" href="/employer"></Tab>
        <Tab key="/profile" title="Профил" href="/profile"></Tab>
      </Tabs>
    </main>
  );
}
