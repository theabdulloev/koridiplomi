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
const save = async () => {
  const data = {
    username: "test",
    vip: true,
    fullName: "Ismoiljon Abdulloev",
    description:
      "Мутахассис оид ба тасдиқи амалиёти бонкӣ, филиал дар ш.Хуҷанд",
    watch: 189,
    salary: 12000,
    contacts: "+992 97 809 23 23",
    email: "ismoiljon.abdulloev.ibt@gmail.com",
    location: "Хуҷанд",
    verification: true,
  };
  try {
    const res = await fetch("https://ruznomatj.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    return Response.json(result);
  } catch (error) {
    console.log(error);
  }
};
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
      ></Button>
    </main>
  );
}
