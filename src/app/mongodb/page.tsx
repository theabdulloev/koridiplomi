"use server"
import save from "@/libs/save";
import { Button } from "@nextui-org/react";

async function getData() {
  const res = await fetch("https://ruznomatj.vercel.app/products", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Mongo() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <span>Hello mongo db</span>
      {data.map((i: any) => (
        <span key={i._id}>{i.description}</span>
      ))}
      <Button
        onClick={async () => {
          const res = await save();
          console.log(res);
        }}
      >save</Button>
    </main>
  );
}
