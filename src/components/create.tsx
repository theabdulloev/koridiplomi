"use client";
import React, { useState } from "react";
import { Select, Input, SelectItem, Selection } from "@nextui-org/react";
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
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = React.useState<Selection>(new Set([]));
  const [valueCat, setValueCat] = React.useState<Selection>(new Set([]));
  return (
    <div className="container flex flex-col items-center space-y-2 h-full p-4">
      <Input
        label="Компания"
        value={inputValue}
        onValueChange={setInputValue}
        description="We'll never share your email with anyone else."
        errorMessage=""
        className="w-full"
      />
      <Select
        label="Регион"
        variant="bordered"
        placeholder="Выберите регион"
        selectedKeys={value}
        className="w-full"
        onSelectionChange={setValue}
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
        placeholder="Выберите категорие"
        selectedKeys={valueCat}
        className="w-full"
        onSelectionChange={setValueCat}
      >
        {categories.map((categorie) => (
          <SelectItem key={categorie.value} value={categorie.value}>
            {categorie.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
