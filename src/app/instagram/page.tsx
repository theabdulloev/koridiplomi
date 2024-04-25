"use server";
import publicInstagram from "@/libs/instagram";
import { Button } from "@nextui-org/react";

export default async function Instagram() {
  return (
    <>
      <Button
        onClick={async () => {
          console.log("...start public");
          const data = await publicInstagram();
          console.log(data);
        }}
      >
        +
      </Button>
    </>
  );
}
