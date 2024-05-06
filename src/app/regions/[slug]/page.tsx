import Filter from "@/components/FilterCompanent";
import Categories from "@/components/categories";
import KORTJ from "@/components/comm";
import ToPop from "@/components/totop";
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
                    <Categories />
                    <KORTJ data={data}></KORTJ>
                    <ToPop></ToPop>
                </div>
            </div>
        </>
    );
}
