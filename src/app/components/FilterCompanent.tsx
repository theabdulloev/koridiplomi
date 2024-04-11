"use client";
import { Badge } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Slider,
  SliderValue,
} from "@nextui-org/react";
import { useState } from "react";

export default function Filter() {
  const [selected, setSelected] = useState(["buenos-aires", "sydney"]);
  const [selectedR, setSelectedR] = useState("london");
  const [valueR, setValueR] = useState<SliderValue>([500, 30000]);
  const colorScheme = useColorScheme();
  return (
    <div className="space-y-4">
      {/* <div>
        <p className="text-default-500 text-small">
          Selected: {selected.join(", ")}
        </p>
        <p className="text-default-500 text-small">Selected: {selectedR}</p>
        <p className="text-default-500 font-medium text-small">
          Selected budget:{" "}
          {Array.isArray(valueR) && valueR.map((b) => `$${b}`).join(" – ")}
        </p>
      </div> */}
      <div className="border-b">
        <CheckboxGroup
          label="Подработка"
          value={selected}
          onValueChange={setSelected}
          defaultValue={["buenos-aires", "london"]}
        >
          <Checkbox value="buenos-aires">Неполный день</Checkbox>
          <Checkbox value="sydney">От 4 часов в день</Checkbox>
          <Checkbox value="san-francisco">По вечерам</Checkbox>
          <Checkbox value="london">Разовое задание</Checkbox>
          <Checkbox value="tokyo">По выходным</Checkbox>
        </CheckboxGroup>
      </div>
      <div className="border-b">
        <RadioGroup
          label="Опыт работы"
          value={selectedR}
          onValueChange={setSelectedR}
        >
          <Radio value="buenos-aires">Не имеет значения</Radio>
          <Radio value="sydney">От 1 года до 3 лет</Radio>
          <Radio value="san-francisco">От 3 до 6 лет</Radio>
          <Radio value="london">Нет опыта</Radio>
          <Radio value="tokyo">Более 6 лет</Radio>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
        <Slider
          label="Уровень дохода"
          formatOptions={{ style: "currency", currency: "SMN" }}
          step={100}
          maxValue={50000}
          minValue={0}
          value={valueR}
          onChange={setValueR}
          className="max-w-md"
        />
      </div>
      <Badge color={colorScheme === "dark" ? "blue" : "teal"} variant="filled">
        Your system color scheme is {colorScheme}
      </Badge>
    </div>
  );
}
