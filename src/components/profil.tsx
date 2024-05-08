"use client";
import {
    Avatar,
    BreadcrumbItem,
    Breadcrumbs,
    Card,
    CardBody,
    Chip,
    Tab,
    Tabs,
} from "@nextui-org/react";
import Kor from "./CardKor";

export default function ProfileCompanent({ data, profile }: any) {
    return (
        <>
            <div className="w-full h-full">
                <div className="w-full relative bg-indigo-50 dark:bg-gray-600 h-24 flex justify-center items-end">
                    <div className="w-20 h-20 absolute bg-white rounded-full -mb-9">
                        <Avatar className="w-full h-full" alt="ne"></Avatar>
                    </div>
                </div>
                <div className="w-full container h-full space-y-2 mx-auto p-4">
                <Breadcrumbs>
                        <BreadcrumbItem href="/">
                            Асосӣ
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            {profile.username}
                        </BreadcrumbItem>
                    </Breadcrumbs>
                    <p>{profile.fullname}</p>
                    <p className="text-gray-500">@{profile.username}</p>
                    <div className="space-x-2 space-y-2">
                        {profile.spets.map((i: any) => {
                            return <Chip key={i}>{i}</Chip>;
                        })}
                    </div>
                    <p>{profile.info}</p>
                    <div className="flex w-full flex-col">
                        <Tabs fullWidth aria-label="Options">
                            <Tab key="vacancies" title="Вакансии">
                                <div>
                                    <Kor {...data}></Kor>
                                </div>
                            </Tab>
                            <Tab key="social" title="Информация">
                                <Card>
                                    <CardBody>
                                        Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
}
