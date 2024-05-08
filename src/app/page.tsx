import KORTJ from "@/components/comm";
import Filter from "../components/FilterCompanent";
import ToPop from "@/components/totop";
import Categories from "@/components/categories";

async function getData() {
    const res = await fetch("https://ruznomatj.vercel.app/products", {
        next: { revalidate: 180 },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {
    const data: [] = await getData();
    // const data = [
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
                    <Categories />
                    <KORTJ data={data}></KORTJ>
                    <ToPop></ToPop>
                </div>
            </div>
        </main>
    );
}
