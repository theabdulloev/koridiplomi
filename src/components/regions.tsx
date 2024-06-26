"use client";
import { Card, Image, CardFooter, Button } from "@nextui-org/react";
import Link from "next/link";
const regions = [
    { label: "Айнӣ", value: "ayni" },
    { label: "Ашт", value: "asht" },
    { label: "Балҷувон", value: "baljuvon" },
    { label: "Бобоҷон Ғафуров", value: "bobojonghafurov" },
    { label: "Бохтар", value: "bokhtar" },
    { label: "Бӯстон", value: "buston" },
    { label: "Ванҷ", value: "vanj" },
    { label: "Варзоб", value: "varzob" },
    { label: "Ваҳдат", value: "vahdat" },
    { label: "Вахш", value: "vakhsh" },
    { label: "ВМКБ", value: "vmkb" },
    { label: "Восеъ", value: "vose" },
    { label: "Гулистон", value: "guliston" },
    { label: "Данғара", value: "dangara" },
    { label: "Дарвоз", value: "darvoz" },
    { label: "Деваштич", value: "devashtich" },
    { label: "Дӯстӣ", value: "dustik" },
    { label: "Душанбе", value: "dushanbe" },
    { label: "Ёвон", value: "yovon" },
    { label: "Зафаробод", value: "zafarobod" },
    { label: "Исмоили Сомони", value: "isomoni" },
    { label: "Истаравшан", value: "istravshan" },
    { label: "Истиқлол", value: "istiklol" },
    { label: "Исфара", value: "isfara" },
    { label: "Ишкошим", value: "ishkoshim" },
    { label: "Кӯлоб", value: "kulyab" },
    { label: "Конибодом", value: "konibodom" },
    { label: "Қубодиён", value: "kubadiyon" },
    { label: "Кӯҳистони Мастчоҳ", value: "khistonimastchoh" },
    { label: "Кӯшониён", value: "kushoniyon" },
    { label: "Лахш", value: "lakhsh" },
    { label: "Левакант", value: "levakant" },
    { label: "Мастчоҳ", value: "mastchoh" },
    { label: "Мурғоб", value: "murghob" },
    { label: "Муъминобод", value: "muminobod" },
    { label: "Норак", value: "norak" },
    { label: "Носири Хусрав", value: "nosirihusrav" },
    { label: "НТҶ", value: "ntj" },
    { label: "Нуробод", value: "nurobod" },
    { label: "Панҷ", value: "panj" },
    { label: "Панҷакент", value: "panjakent" },
    { label: "Рашт", value: "rasht" },
    { label: "Рӯдакӣ", value: "rudaki" },
    { label: "Роғун", value: "roghun" },
    { label: "Роштқалъа", value: "roshtkala" },
    { label: "Рӯшон", value: "rushon" },
    { label: "Сангвор", value: "sangvor" },
    { label: "Сино", value: "sino" },
    { label: "Спитамен", value: "spitamen" },
    { label: "Суғд", value: "sughd" },
    { label: "Темурмалик", value: "temurmalik" },
    { label: "Тоҷикобод", value: "tojikobod" },
    { label: "Турсунзода", value: "tursunzoda" },
    { label: "Файзобод", value: "fayzobod" },
    { label: "Фархор", value: "farkhor" },
    { label: "Фирдавсӣ", value: "firдавs" },
    { label: "Ҳамадонӣ", value: "hamadoni" },
    { label: "Хатлон", value: "khatlon" },
    { label: "Ҳисор", value: "hisor" },
    { label: "Ховалинг", value: "khovaling" },
    { label: "Хоруғ", value: "khorugh" },
    { label: "Хуросон", value: "khurosn" },
    { label: "Хуҷанд", value: "khujand" },
    { label: "Ҷаббор Расулов", value: "jabborrasulov" },
    { label: "Ҷайҳун", value: "jayhun" },
    { label: "Ҷалолиддини Балхӣ", value: "jalaliddinibalkhi" },
    { label: "Чумхурии Туркия", value: "jumhuriytorkiyah" },
    { label: "Шамсиддини Шоҳин", value: "shamshddinishhin" },
    { label: "Шаҳринав", value: "shahrinav" },
    { label: "Шаҳристон", value: "shahiston" },
    { label: "Шаҳритус", value: "shahritus" },
    { label: "Шоҳмансур", value: "shahmansur" },
    { label: "Шуғнон", value: "shugnon" },
];
// sm	640px
// md	768px
// lg	1024px
// xl	1280px
// 2xl
export default function RegionCompanent() {
    return (
        <main className="w-full">
            <h1 className="text-primary text-2xl p-3 text-center font-bold">
                Кор дар минтакахои гуногун
            </h1>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4">
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
