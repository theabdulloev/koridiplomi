import { CustomCard } from "@/components/loadingCard";
import { Skeleton, Spacer } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex container p-4 items-center mx-auto flex-col">
      <Skeleton className="h-8 w-full max-w-[500px] rounded-lg m-3" />
      <Skeleton className="h-14 w-full rounded-lg m-3" />
      <div className="w-full border grid md:grid-cols-[minmax(200px,_400px)_1fr]">
        <div className="border-r p-4">
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
        <div className="w-full h-full p-4 space-y-3 overflow-hidden ">
          <CustomCard />
          <Spacer x={4} />
          <CustomCard />
          <Spacer x={4} />
          <CustomCard />
        </div>
      </div>
    </div>
  );
}
