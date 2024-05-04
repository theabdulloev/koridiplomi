"use client";
import React, { useState } from "react";
import {
    Select,
    Input,
    SelectItem,
    Selection,
    Button,
    Textarea,
    Switch,
    RadioGroup,
    Radio,
} from "@nextui-org/react";
import { toast } from "sonner";
const regions = [
    { label: "Абдурахман Джами", value: "Abdurahman Jam" },
    { label: "Айни", value: "Ayni" },
    { label: "Ашт", value: "Asht" },
    { label: "Бабаджан Гафуров", value: "Babadjhan Gafurov" },
    { label: "Балджуван", value: "Baldjuvan" },
    { label: "Бохтар", value: "Bokhtar" },
    { label: "Бустон", value: "Buston" },
    { label: "Вандж", value: "Vandzh" },
    { label: "Варзоб", value: "Varzob" },
    { label: "Вахдат", value: "Vakhdat" },
    { label: "Вахш", value: "Vakhsh" },
    { label: "ВМКБ", value: "VMKB" },
    { label: "Восе", value: "Vose" },
    { label: "Гисар", value: "Gisar" },
    { label: "Горный-Матча", value: "Gorny-Matcha" },
    { label: "Гулистон", value: "Gulistoni" },
    { label: "Дангара", value: "Dangara" },
    { label: "Дарваз", value: "Darvaz" },
    { label: "Деваштич", value: "Devashich" },
    { label: "Джаббар-Расулов", value: "Jabbar-Rasulov" },
    { label: "Джайхун", value: "Jaihun" },
    { label: "Джалолиддин Балхи", value: "Jaloliddin Balkhi" },
    { label: "Дусти", value: "Dusti" },
    { label: "Душанбе", value: "Dushanbe" },
    { label: "Зафаробод", value: "Zafarabad" },
    { label: "И. Сомони", value: "I. Somoni" },
    { label: "Истаравшан", value: "Istaravshan" },
    { label: "Истиклол", value: "Istiklol" },
    { label: "Исфара", value: "Isfara" },
    { label: "Ишкошим", value: "Ishkoshim" },
    { label: "Канибадам", value: "Kanibadam" },
    { label: "Кубодиён", value: "Kubodiyon" },
    { label: "Кулоб", value: "Kulob" },
    { label: "Кушониён", value: "Kushoniyon" },
    { label: "Лахш", value: "Lakhsh" },
    { label: "Левакант", value: "Levokant" },
    { label: "Мастчоҳ", value: "Mastchoh" },
    { label: "Муминабад", value: "Muminabad" },
    { label: "Мургаб", value: "Murgab" },
    { label: "Норак", value: "Norak" },
    { label: "Носир Хусрав", value: "Nosir Khusrav" },
    { label: "Нурабад", value: "Nurabad" },
    { label: "Пенджикент", value: "Penjikent" },
    { label: "Пяндж", value: "Pyandzh" },
    { label: "Рашт", value: "Rasht" },
    { label: "Рогун", value: "Rogun" },
    { label: "Рошткала", value: "Roshtkala" },
    { label: "РРП", value: "RRP" },
    { label: "Рудаки", value: "Rudaki" },
    { label: "Рушан", value: "Rushan" },
    { label: "Сангвор", value: "Sangvor" },
    { label: "Сино", value: "Sino" },
    { label: "Согд", value: "Sogd" },
    { label: "Спитамен", value: "Spitamen" },
    { label: "Таджикабад", value: "Tajikabad" },
    { label: "Темурмалик", value: "Temurmalik" },
    { label: "Турсунзаде", value: "Tursunzade" },
    { label: "Файзабад", value: "Faizabad" },
    { label: "Фархор", value: "Farkhor" },
    { label: "Фирдавси", value: "Firdavsi" },
    { label: "Хамадони", value: "Khamadoni" },
    { label: "Хатлон", value: "Khatlon" },
    { label: "Ховалинг", value: "Khovaling" },
    { label: "Хорог", value: "Khorog" },
    { label: "Худжанд", value: "Khujand" },
    { label: "Хуросон", value: "Khurosan" },
    { label: "Шамсиддин Шохин", value: "Shamsiddin Shokhin" },
    { label: "Шахринав", value: "Shakhrinav" },
    { label: "Шахристан", value: "Shakhristan" },
    { label: "Шахритус", value: "Shakhrisabz" },
    { label: "Шохмансур", value: "Shokhmansur" },
    { label: "Шугнан", value: "Shugnan" },
    { label: "Яван", value: "Yavan" },
];
const categories = [
    { label: "Вазорат", value: "vazorat" },
    { label: "Кумита", value: "kumita" },
    { label: "Агентӣ", value: "agentii" },
    { label: "КВД", value: "kvd" },
    { label: "Мақомоти иҷроия", value: "maqomoti_ijroia" },
    {
        label: "Шуъбаҳои мақомоти давлатӣ дар маҳал",
        value: "shuubahoi_maqomoti_davlati_dar_mahal",
    },
    { label: "ҶДММ", value: "jdmm" },
    { label: "ҶСП", value: "jsp" },
    {
        label: "Раёсати мақомоти давлатӣ дар маҳал",
        value: "rayosati_maqomoti_davlati_dar_mahal",
    },
    { label: "Соҳибкори инфиродӣ СИ", value: "sohibkori_infirodii_si" },
    { label: "Ташкилотҳои ҷамъиятӣ ТҶ", value: "tashkilothoi_jamiyati_tj" },
    { label: "ҶСК", value: "jsk" },
];
export default function Create() {
    const [salary, setSalary] = useState("");
    const [desc, setDesc] = useState("");
    const [region, setRegion] = React.useState<Selection>(new Set([]));
    const [categoryValue, setCategoryValue] = React.useState<Selection>(
        new Set([])
    );
    const [salaryCheck, setSalaryCheck] = React.useState(false);
    const [controllSalary, setControllSalary] = React.useState(false);
    const [selectedR, setSelectedR] = useState("farq_nadorad");

    return (
        <div className="container flex flex-col items-center space-y-4 h-full p-4">
            <p className="py-4 text-center font-bold text-2xl">
                Кушодани ҷойҳои корӣ, ки тиҷорати шуморо пеш мебаранд.
            </p>
            <Textarea
                color="primary"
                variant="bordered"
                placeholder="Маълумот дар бораи кор"
                disableAnimation
                disableAutosize
                className="w-full"
                value={desc}
                onValueChange={setDesc}
                classNames={{
                    input: "resize-y min-h-[40px]",
                }}
            />
            <div className="w-full flex space-x-3">
                <Switch
                    isSelected={salaryCheck}
                    color="primary"
                    onValueChange={() => {
                        if (salaryCheck) {
                            console.log(salaryCheck, 1);
                            setSalaryCheck(false);
                            setControllSalary(false);
                        } else {
                            console.log(salaryCheck, 2);
                            setSalaryCheck(true);
                            setControllSalary(true);
                        }
                    }}
                >
                    Маош шартномавӣ
                </Switch>
                <Input
                    disabled={controllSalary}
                    color="primary"
                    label="Маоши корманд"
                    type="number"
                    value={salary}
                    onValueChange={setSalary}
                    errorMessage=""
                    className="w-full"
                />
            </div>
            <Select
                label="Минтақа"
                variant="bordered"
                placeholder="Минтақаро интихоб кунед"
                selectedKeys={region}
                className="w-full"
                color="primary"
                onSelectionChange={setRegion}
            >
                {regions.map((region) => (
                    <SelectItem key={region.value} value={region.value}>
                        {region.label}
                    </SelectItem>
                ))}
            </Select>
            <Select
                label="Категория"
                variant="bordered"
                placeholder="Категорияро интихоб кунед"
                color="primary"
                selectedKeys={categoryValue}
                className="w-full"
                onSelectionChange={setCategoryValue}
            >
                {categories.map((categorie) => (
                    <SelectItem key={categorie.value} value={categorie.value}>
                        {categorie.label}
                    </SelectItem>
                ))}
            </Select>
            <div className="w-full">
                <RadioGroup
                    orientation="horizontal"
                    label="Тачриба"
                    value={selectedR}
                    className="flex"
                    onValueChange={setSelectedR}
                >
                    <Radio value="farq_nadorad">Фарқ надорад</Radio>
                    <Radio value="az_1_to_3">Аз 1 сол то 3 сол</Radio>
                    <Radio value="az_3_to_6">Аз 3 то 6 сол</Radio>
                    <Radio value="ziyoda_az_6">Зиёда аз 6 сол</Radio>
                </RadioGroup>
            </div>

            <Button
                disabled={salary == "" || desc == "" ? true : false}
                color={salary == "" || desc == "" ? "default" : "primary"}
                fullWidth
                onClick={async () => {
                    const newdata = {
                        salary,
                        desc,
                        region,
                        categoryValue,
                    };
                    toast.success("Success");
                    console.log(newdata);
                    return newdata;
                }}
                type="submit"
            >
                Сохтани вакансия
            </Button>
        </div>
    );
}
