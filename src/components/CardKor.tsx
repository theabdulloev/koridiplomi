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
  console.log(salary);
  return (
    <Card className="w-full min-h-60">
      <CardHeader className="flex gap-3">
        <div className="w-10 h-10">
          {vip ? (
            <Badge
              content="VIP"
              color="warning"
              shape="circle"
              placement="top-right"
            >
              <Avatar radius="full" color="warning" />
            </Badge>
          ) : (
            <Avatar radius="full" />
          )}
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-between">
            <p className="text-md">{fullName}</p>
          </div>
          <div className="flex items-center">
            <p className="text-small text-default-500">{username}</p>
            {verification ? (
              <div className="text-primary">
                <Icon fontSize={25} icon="bitcoin-icons:verify-filled" />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-2xl">{description}</p>
        <br />
        <div className="w-full flex flex-col lg:justify-start lg:flex-row gap-3 items-start justify-center lg:items-center">
          <div className="text-primary flex gap-1">
            <Icon fontSize={25} icon="healthicons:money-bag-outline" />
            <span>{salary}</span> сомони / мох.
          </div>

          <div className="flex gap-1 ">
            <Icon fontSize={25} icon="material-symbols:work-outline" />
            Аз 1 сол то 3 сол
          </div>

          <div className="flex gap-1">
            {" "}
            <Icon fontSize={25} icon="ic:outline-email" />
            {email}
          </div>

          <div className="flex gap-1">
            <Icon fontSize={25} icon="humbleicons:location" />
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
