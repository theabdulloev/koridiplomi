"use client";
import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Image,
    Button,
    Chip,
    Avatar,
    Badge,
} from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import VerifyIcon from "./svg/verify";
import SalaryIcon from "./svg/salary";
import WorkIcon from "./svg/work";
import EmailIcon from "./svg/email";
import LocationIcon from "./svg/location";
import { NumberFormatter } from "@mantine/core";
import Link from "next/link";
import AccauntLogo from "./svg/accaunt";

export default function Kor({
    username,
    fullName,
    description,
    watch,
    salary,
    contacts,
    location,
    email,
    vip,
    verification,
}: any) {
    const [viewContact, setViewContact] = useState(true);
    return (
        <Card className="w-full min-h-60">
            <CardHeader className="flex flex-col items-start gap-3">
                <p className="text-2xl">{description}</p>
                <div className="text-primary gap-2 text-2xl flex items-center">
                    <NumberFormatter
                        suffix=" сомони / мох"
                        value={salary}
                        thousandSeparator
                    />
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <div className="w-full flex flex-col lg:justify-start gap-3 items-start">
                    <div className="flex gap-2 items-center">
                        <AccauntLogo />
                        <div className="flex items-center">
                            <Link href={`/profile/${username}`} color="primary">
                                {fullName}
                            </Link>
                            {verification ? (
                                <div className="text-primary">
                                    <VerifyIcon />
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-2 items-center ">
                        <WorkIcon />
                        Аз 1 сол то 3 сол
                    </div>

                    <div className="flex gap-2 items-center">
                        {" "}
                        <EmailIcon />
                        {email}
                    </div>

                    <div className="flex gap-2 items-center">
                        <LocationIcon />
                        {location}
                    </div>
                </div>

                <div className="py-3">
                    {viewContact ? (
                        ""
                    ) : (
                        <Button className="w-full" variant="bordered">
                            {" "}
                            {contacts}
                        </Button>
                    )}
                </div>
            </CardBody>
            <Divider />
            <CardFooter className="flex space-x-2 justify-between md:justify-start">
                <Button
                    onClick={() => setViewContact(false)}
                    className="w-full md:w-40"
                    variant="ghost"
                >
                    Раками телефон
                </Button>
                <Button color="primary" className="w-full text-white md:w-40">
                    Тафсилоти бештар
                </Button>
            </CardFooter>
        </Card>
    );
}
