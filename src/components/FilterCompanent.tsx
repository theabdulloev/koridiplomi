"use client";
import {
    Button,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Slider,
    SliderValue,
} from "@nextui-org/react";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { HiddenFilter } from "../app/store/atom/store";
import { useViewportSize } from "@mantine/hooks";

export default function Filter() {
    const [selected, setSelected] = useState(["buenos-aires", "sydney"]);
    const [selectedR, setSelectedR] = useState("london");
    const [valueR, setValueR] = useState<SliderValue>([500, 30000]);
    const toggle: boolean = useRecoilValue(HiddenFilter);
    const setToggle = useSetRecoilState(HiddenFilter);
    const changeHidden = () => {
        setToggle(() => !toggle);
    };

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
            {toggle ? (
                <Button
                    className="w-full"
                    variant="bordered"
                    onClick={changeHidden}
                >
                    Филтрҳоро нишон диҳед{" "}
                </Button>
            ) : (
                <div className="space-y-4">
                    <div className="mb-2">
                        <CheckboxGroup
                            label="Кори нимавақт"
                            value={selected}
                            onValueChange={setSelected}
                            defaultValue={["buenos-aires", "london"]}
                        >
                            <Checkbox value="buenos-aires">
                                Рӯзи қисман
                            </Checkbox>
                            <Checkbox value="sydney">
                                Аз 4 соат дар як рӯз
                            </Checkbox>
                            <Checkbox value="san-francisco">
                                Дар бегохй
                            </Checkbox>
                            <Checkbox value="london">
                                Вазифаи якдафъаина
                            </Checkbox>
                            <Checkbox value="tokyo">
                                Дар рӯзҳои истироҳат
                            </Checkbox>
                        </CheckboxGroup>
                    </div>
                    <div className="mb-2">
                        <RadioGroup
                            label="Тачриба"
                            value={selectedR}
                            onValueChange={setSelectedR}
                        >
                            <Radio value="farq_nadorad">Фарқ надорад</Radio>
                            <Radio value="az_1_to_3">Аз 1 сол то 3 сол</Radio>
                            <Radio value="az_3_to_6">Аз 3 то 6 сол</Radio>
                            <Radio value="ziyoda_az_6">Зиёда аз 6 сол</Radio>
                        </RadioGroup>
                    </div>

                    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
                        <Slider
                            label="Сатҳи даромад"
                            formatOptions={{
                                style: "currency",
                                currency: "SMN",
                            }}
                            step={100}
                            maxValue={50000}
                            minValue={0}
                            value={valueR}
                            onChange={setValueR}
                            className="max-w-md"
                        />
                        <Button
                            className="w-full"
                            variant="bordered"
                            onClick={changeHidden}
                        >
                            Филтрҳоро пинҳон кунед{" "}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
