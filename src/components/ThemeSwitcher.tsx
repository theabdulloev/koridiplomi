// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import ThemeIcon from "./svg/theme";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    if (theme == "light") setTheme("dark");
    else setTheme("light");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-3">
      <Button variant="light" className="w-full" onClick={() => changeTheme()}>
        <ThemeIcon />
      </Button>
    </div>
  );
}
