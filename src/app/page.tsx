"use server";
import Kor from "../components/CardKor";
import Filter from "../components/FilterCompanent";

export default async function Home() {
  const data = [
    {
      userName: "user5481",
      vip: true,
      fullName: "John Doe",
      description: "Бонкдор - коршиноси қарз дар шаҳри Хуҷанд",
      watch: "1025",
      salary: "5 000",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Худжанд",
    },
    {
      userName: "user9023",
      vip: true,
      fullName: "Alice Smith",
      description:
        "Мутахассис оид ба тасдиқи амалиёти бонкӣ, филиал дар ш.Хуҷанд",
      watch: "1897",
      salary: "12 000",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Худжанд",
    },
    {
      userName: "user17653",
      vip: false,
      fullName: "Emma Johnson",
      description:
        "Мутахассиси технологияҳои иттилоотӣ",
      watch: "3245",
      salary: "2 700",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Худжанд",
    },
    {
      userName: "user17652",
      vip: false,
      fullName: "Emma Johnson",
      description:
        "Мушовири онлайн дар вакти бегоҳӣ",
      watch: "3245",
      salary: "42 700",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Худжанд",
    },
    {
      userName: "user17651",
      vip: false,
      fullName: "Emma Johnson",
      description:
        "Агент барои иҷора, харид ва фурӯши биноҳои истиқоматӣ",
      watch: "3245",
      salary: "1 700",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Худжанд",
    },
    // Добавьте остальные объекты аналогичным образом
  ];

  return (
    <main>
      <div className="p-5 text-center uppercase text-2xl">
        <span className="text-primary mr-2">ИМРУЗ</span>
        КОРИ ДУСТДОШТААШОНРО ёбед!
      </div>
      <div className="container mx-auto border grid md:grid-cols-[minmax(200px,_400px)_1fr]">
        <div className="border-r p-4">
          <Filter />
        </div>
        <div className="w-full h-full p-4 space-y-3 overflow-hidden ">
          {/* {arr.map(i => <Kor />)} */}
          {data.map((i: any) => (
            <Kor {...i} key={i.userName} />
          ))}
          {/* <Kor
          userName="username"
          fullName="Tom Bom"
          description="Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure!"
          watch="2340"
        /> */}
        </div>
      </div>
    </main>
  );
}
