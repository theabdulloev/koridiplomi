import NotificationCard from "@/components/NotificationCard";
import KORTJ from "@/components/comm";
import { CustomCard } from "@/components/loadingCard";
import { Skeleton, Spacer } from "@nextui-org/react";

export default function Favorite() {
    const data = [
        {
            username: "theabdulloev",
            vip: false,
            fullName: "Ismoiljon Abdulloev",
            description:
                "Агент барои иҷора, харид ва фурӯши биноҳои истиқоматӣ",
            watch: 3245,
            salary: 1700,
            contacts: "+992 97 809 23 23",
            email: "ismoiljon.abdulloev.ibt@gmail.com",
            location: "Хуҷанд",
            verification: true,
        },
    ];
    return (
        <div className="w-full p-4">
            <KORTJ data={data}></KORTJ>
        </div>
    );
}
