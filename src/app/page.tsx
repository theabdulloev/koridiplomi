"use server";
import Kor from "./components/CardKor";
import Filter from "./components/FilterCompanent";
async function getData() {
  const res = await fetch("/api", { method: "GET" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  // const data = await getData();
  const data = [
    {
      userName: "user54381",
      vip: true,
      fullName: "John Doe",
      description:
        "Специалист Фирменного салона сотовой связи по Согдийской области",
      watch: "1025",
      salary: "5 000",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Khujand",
    },
    {
      userName: "user90243",
      vip: true,
      fullName: "Alice Smith",
      description: "Графический дизайнер",
      watch: "1897",
      salary: "12 000",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Khujand",
    },
    {
      userName: "user17653",
      vip: false,
      fullName: "Emma Johnson",
      description: "Middle PHP Laravel разработчик",
      watch: "3245",
      salary: "2 700",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Khujand",
    },
    {
      userName: "user17652",
      vip: false,
      fullName: "Emma Johnson",
      description: "Специалист по мониторингу и видеонаблюдению",
      watch: "3245",
      salary: "42 700",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Khujand",
    },
    {
      userName: "user17651",
      vip: false,
      fullName: "Emma Johnson",
      description: "Оператор колл-центра",
      watch: "3245",
      salary: "1 700",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Khujand",
    },
  ];
  return (
    <main>
      <div className="p-5 text-center uppercase text-2xl">
        Найдите свою любимую работу{" "}
        <span className="text-primary">сегодня!</span>
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
