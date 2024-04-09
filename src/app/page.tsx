"use server";
import Kor from "./components/CardKor";
import Filter from "./components/FilterCompanent";
async function getData() {
  const res = await fetch("https://kortj.vercel.app/api/", { method: "GET" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const data = await getData();
  return (
    <main>
      <div className="p-5 text-center text-2xl">
        Кори дустдоштаи худро <span className="text-primary">имруз</span> пайдо
        намо!
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
