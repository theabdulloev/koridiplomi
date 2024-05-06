import Filter from "@/components/FilterCompanent";
import KORTJ from "@/components/comm";
import ToPop from "@/components/totop";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};
const getNameForMata = (slug: any) => {
    const region = regions.find((r) => r.value === slug);
    return region ? `Кор дар шахр/нохияи ${region.label}` : "";
};
const getNameForMataDesk = (slug: any) => {
    const region = regions.find((r) => r.value === slug);
    return region ? `ИМРУЗ КОРИ ДУСТДОШТААШОНРО ДАР ${region.label} ЕБЕД` : "";
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug;
    return {
        title: getNameForMata(slug),
        description: getNameForMataDesk(slug),
    };
}
async function getData() {
    const res = await fetch("https://ruznomatj.vercel.app/products", {
        next: { revalidate: 180 },
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
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
const getName = (regionValue: any) => {
    const region = regions.find((r) => r.value === regionValue);
    return region ? (
        <span className="text-primary">{region.label}</span>
    ) : (
        <span>test</span>
    );
};
export default async function Page({ params }: { params: { slug: string } }) {
    const data: [] = await getData();
    // const data = [
    //     {
    //         username: "theabdulloev",
    //         vip: true,
    //         fullName: "Ismoiljon Abdulloev",
    //         description:
    //             "Мутахассис оид ба тасдиқи амалиёти бонкӣ, филиал дар ш.Хуҷанд",
    //         watch: 189,
    //         salary: 1000,
    //         contacts: "+992 97 809 23 23",
    //         email: "ismoiljon.abdulloev.ibt@gmail.com",
    //         location: "Хуҷанд",
    //         verification: true,
    //     },
    //     {
    //         username: "theabdulloev",
    //         vip: true,
    //         fullName: "Ismoiljon Abdulloev",
    //         description: "Бонкдор - коршиноси қарз дар шаҳри Хуҷанд",
    //         watch: 1025,
    //         salary: 5000,
    //         contacts: "+992 97 809 23 23",
    //         email: "ismoiljon.abdulloev.ibt@gmail.com",
    //         location: "Хуҷанд",
    //         verification: true,
    //     },

    //     {
    //         username: "theabdulloev",
    //         vip: false,
    //         fullName: "Ismoiljon Abdulloev",
    //         description: "Мутахассиси технологияҳои иттилоотӣ",
    //         watch: 3245,
    //         salary: 2700,
    //         contacts: "+992 97 809 23 23",
    //         email: "ismoiljon.abdulloev.ibt@gmail.com",
    //         location: "Хуҷанд",
    //         verification: true,
    //     },
    //     {
    //         username: "theabdulloev",
    //         vip: false,
    //         fullName: "Ismoiljon Abdulloev",
    //         description: "Мушовири онлайн дар вакти бегоҳӣ",
    //         watch: 3245,
    //         salary: 2700,
    //         contacts: "+992 97 809 23 23",
    //         email: "ismoiljon.abdulloev.ibt@gmail.com",
    //         location: "Хуҷанд",
    //         verification: true,
    //     },
    //     {
    //         username: "theabdulloev",
    //         vip: false,
    //         fullName: "Ismoiljon Abdulloev",
    //         description:
    //             "Агент барои иҷора, харид ва фурӯши биноҳои истиқоматӣ",
    //         watch: 3245,
    //         salary: 1700,
    //         contacts: "+992 97 809 23 23",
    //         email: "ismoiljon.abdulloev.ibt@gmail.com",
    //         location: "Хуҷанд",
    //         verification: true,
    //     },
    // ];

    return (
        <>
            <div className="p-5 text-center uppercase text-2xl">
                ИМРУЗ КОРИ ДУСТДОШТААШОНРО ДАР {getName(params.slug)} ёбед!
            </div>
            <div className="container mx-auto grid md:grid-cols-[minmax(200px,_400px)_1fr]">
                <div>
                    <div className="hidden p-4 md:block">
                        <Filter />
                    </div>
                </div>
                <div className="w-full h-full p-4 space-y-3 overflow-hidden ">
                    <KORTJ data={data}></KORTJ>
                    <ToPop></ToPop>
                </div>
            </div>
        </>
    );
}
