import KORTJ from "@/components/comm";
import Kor from "../components/CardKor";
import Filter from "../components/FilterCompanent";
import SearcCompanent from "@/components/Search";
import { GetData } from "@/libs/utlits";
import ToPop from "@/components/totop";
const Instagram = require("instagram-web-api");
const username = "abdulloevcompany",
  password = "928663323taj";

const client = new Instagram({ username, password });

(async () => {
  await client.login();
  const profile = await client.getProfile();
    console.log('data from instagram')
  console.log(profile);
})();

export default async function Home() {
  const data: [] = await GetData();
  
  return (
    <main>
      <div className="p-5 text-center uppercase text-2xl">
        <span className="text-primary mr-2">ИМРУЗ</span>
        КОРИ ДУСТДОШТААШОНРО ёбед!
      </div>
      <SearcCompanent></SearcCompanent>
      <div className="container mx-auto border grid md:grid-cols-[minmax(200px,_400px)_1fr]">
        <div className="border-r p-4">
          <Filter />
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
