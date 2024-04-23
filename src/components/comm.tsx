"use client";
import Kor from "./CardKor";

function KORTJ({ data }: any) {
    console.log(data)
  return (
    <>
      {data?.map((i: any) => (
        <Kor {...i} key={i.userName} />
      ))}
    </>
  );
}
export default KORTJ;
