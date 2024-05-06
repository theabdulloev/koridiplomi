"use client";
import { Card, Image, CardFooter, Button } from "@nextui-org/react";
import Link from "next/link";
const regions = [
    { label: "Абдурахман Джами", value: "abdurahmanjami" },
    { label: "Айни", value: "ayni" },
    { label: "Ашт", value: "asht" },
    { label: "Бабаджан Гафуров", value: "babadjhangafurov" },
    { label: "Балджуван", value: "baldjuvan" },
    { label: "Бохтар", value: "bokhtar" },
    { label: "Бустон", value: "buston" },
    { label: "Вандж", value: "vandzh" },
    { label: "Варзоб", value: "varzob" },
    { label: "Вахдат", value: "vakhdat" },
    { label: "Вахш", value: "vakhsh" },
    { label: "ВМКБ", value: "vmkb" },
    { label: "Восе", value: "vose" },
    { label: "Гисар", value: "gisar" },
    { label: "Гулистон", value: "gulistoni" },
    { label: "Дангара", value: "dangara" },
    { label: "Дарваз", value: "darvaz" },
    { label: "Деваштич", value: "devashich" },
    { label: "Джаббар-Расулов", value: "jabbarrasulov" },
    { label: "Джайхун", value: "Jaihun" },
    { label: "Джалолиддин Балхи", value: "jloliddinbalkhi" },
    { label: "Дусти", value: "dusti" },
    { label: "Душанбе", value: "dushanbe" },
    { label: "Зафаробод", value: "zafarabad" },
    { label: "Истаравшан", value: "istaravshan" },
    { label: "Истиклол", value: "istiklol" },
    { label: "Исфара", value: "isfara" },
    { label: "Ишкошим", value: "ishkoshim" },
    { label: "Канибадам", value: "kanibadam" },
    { label: "Кубодиён", value: "kubodiyon" },
    { label: "Кулоб", value: "kulob" },
    { label: "Кушониён", value: "kushoniyon" },
    { label: "Лахш", value: "lakhsh" },
    { label: "Левакант", value: "levokant" },
    { label: "Мастчоҳ", value: "mastchoh" },
    { label: "Муминабад", value: "muminabad" },
    { label: "Мургаб", value: "murgab" },
    { label: "Норак", value: "norak" },
    { label: "Носир Хусрав", value: "nosirkhusrav" },
    { label: "Нурабад", value: "nurabad" },
    { label: "Пенджикент", value: "penjikent" },
    { label: "Пяндж", value: "pyandzh" },
    { label: "Рашт", value: "rasht" },
    { label: "Рогун", value: "rogun" },
    { label: "Рошткала", value: "roshtkala" },
    { label: "Рудаки", value: "rudaki" },
    { label: "Рушан", value: "rushan" },
    { label: "Сангвор", value: "sangvor" },
    { label: "Сино", value: "sino" },
    { label: "Согд", value: "sogd" },
    { label: "Спитамен", value: "spitamen" },
    { label: "Таджикабад", value: "tajikabad" },
    { label: "Темурмалик", value: "temurmalik" },
    { label: "Турсунзаде", value: "tursunzade" },
    { label: "Файзабад", value: "faizabad" },
    { label: "Фархор", value: "farkhor" },
    { label: "Фирдавси", value: "firdavsi" },
    { label: "Хамадони", value: "khamadoni" },
    { label: "Хатлон", value: "khatlon" },
    { label: "Ховалинг", value: "khovaling" },
    { label: "Хорог", value: "khorog" },
    { label: "Худжанд", value: "khujand" },
    { label: "Хуросон", value: "khurosan" },
    { label: "Шамсиддин Шохин", value: "shamsiddinshokhin" },
    { label: "Шахринав", value: "shakhrinav" },
    { label: "Шахристан", value: "shakhristan" },
    { label: "Шахритус", value: "shakhrisabz" },
    { label: "Шохмансур", value: "shokhmansur" },
    { label: "Шугнан", value: "shugnan" },
    { label: "Яван", value: "yavan" },
];
export default function RegionCompanent() {
    return (
        <main className="w-full">
            <h1 className="text-primary text-2xl p-3 text-center font-bold">
                Кор дар минтакахои гуногун
            </h1>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-5 p-4">
                {regions.map((item, index) => (
                    <Card
                        key={item.value}
                        isFooterBlurred
                        radius="lg"
                        className="border-none"
                    >
                        <Image
                            alt="Woman listing to music"
                            className="object-cover"
                            src="/tajikistan.jpg"
                        />
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-lg text-white/80">
                                {item.label}
                            </p>
                            <Button
                                className="text-tiny text-white bg-black/20"
                                href={"/regions/" + item.value}
                                as={Link}
                                variant="flat"
                                color="default"
                                radius="lg"
                                size="sm"
                            >
                                Дидан
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}
