import KORTJ from "@/components/comm";
import Filter from "../components/FilterCompanent";
import SearcCompanent from "@/components/Search";
import { GetData } from "@/libs/utlits";
import ToPop from "@/components/totop";

export default async function Home() {
  const data: [] = await GetData();

  return (
    <main>
      <div className="p-5 text-center uppercase text-2xl">
        <span className="text-primary mr-2">ИМРУЗ</span>
        КОРИ ДУСТДОШТААШОНРО ёбед!
      </div>
      <div className="container mx-auto grid md:grid-cols-[minmax(200px,_400px)_1fr]">
        <div>
          <div className="hidden p-4 md:block">
            <Filter />
          </div>
        </div>
        <div className="w-full h-full p-4 space-y-3 overflow-hidden ">
          {/* {arr.map(i => <Kor />)} */}

          <KORTJ data={data}></KORTJ>
          <ToPop></ToPop>
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
