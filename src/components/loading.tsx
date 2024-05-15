import { ScrollShadow, Skeleton, Spacer } from "@nextui-org/react";
import { CustomCard } from "./loadingCard";

export default function LoadingCompanent() {
    return (
        <div className="flex container p-4 items-center mx-auto flex-col">
            <Skeleton className="h-14 w-full rounded-lg m-3" />

            <div className="w-full grid md:grid-cols-[minmax(200px,_400px)_1fr]">
                <div className="p-0 md:p-4 space-y-4">
                    <Skeleton className="h-10 w-full rounded-lg" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                </div>

                <div className="w-full h-full py-4 px-1 space-y-3 overflow-hidden ">
                    <ScrollShadow
                        orientation="horizontal"
                        hideScrollBar
                        className="w-full  max-h-[300px]"
                    >
                        <div className="space-x-2 flex w-full">
                            <Skeleton className="w-[150px] h-[180px] rounded-lg" />
                            <Skeleton className="w-[150px] h-[180px] rounded-lg" />
                            <Skeleton className="w-[150px] h-[180px] rounded-lg" />
                        </div>
                    </ScrollShadow>
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
