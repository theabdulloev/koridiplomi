"use client";
import { Input } from "@nextui-org/react";
import { useState } from "react";

export default function SearcCompanent() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container mx-auto mt-0">
      <Input
        label="Ҷустуҷу"
        value={inputValue}
        onValueChange={setInputValue}
        description="Номи вакансияро ворид намоед. Масалан: Муалими забони англисӣ"
        errorMessage=""
        className="w-full"
      />
    </div>
  );
}
