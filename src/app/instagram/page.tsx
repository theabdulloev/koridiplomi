"use server";
import publicInstagram from "@/libs/instagram";
import { Button } from "@nextui-org/react";

export default async function Instagram() {
  const get = async () => {
    console.log("...start public");
    const data = await publicInstagram();
    console.log(data);
  };
  return (
    <>
      <Button onClick={async () => await get()}>+</Button>
    </>
  );
}
