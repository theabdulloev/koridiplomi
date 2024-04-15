"use server";
import Kor from "./components/CardKor";
import Filter from "./components/FilterCompanent";
export default async function Home() {
  const data = [
    {
      userName: "user5481",
      vip: true,
      fullName: "John Doe",
      description:
        "Backend developer and data science enthusiast. Let's explore the world of algorithms together!",
      watch: "1025",
      salary: "5 000",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Khujand",
    },
    {
      userName: "user9023",
      vip: true,
      fullName: "Alice Smith",
      description:
        "Mobile app developer and technology geek. Join me in the world of mobile innovation!",
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
      description:
        "Game developer and virtual reality explorer. Embark on an epic gaming journey with me!",
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
      description:
        "Game developer and virtual reality explorer. Embark on an epic gaming journey with me!",
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
      description:
        "Game developer and virtual reality explorer. Embark on an epic gaming journey with me!",
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
