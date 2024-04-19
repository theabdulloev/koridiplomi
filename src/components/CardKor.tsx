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
  userName,
  fullName,
  description,
  watch,
  salary,
  contacts,
  location,
  email,
  vip,
}: any) {
  const [viewContact, setViewContact] = useState(true);
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
            <p className="text-md"> {fullName}</p>
            <div className="flex gap-4">
              <Icon fontSize={25} icon="line-md:watch" /> {watch}
            </div>
          </div>
          <p className="text-small text-default-500">{userName}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-2xl">{description}</p>
        <br />
        <div className="w-full flex flex-col lg:justify-start lg:flex-row gap-3 items-start justify-center lg:items-center">
          <Button fullWidth color="success" variant="bordered">
            {salary} сомони / мох.
          </Button>
          <Button fullWidth variant="bordered">
            Аз 1 сол то 3 сол
          </Button>
          <Button fullWidth variant="bordered">
            {email}
          </Button>
          <Button fullWidth variant="bordered">
            {location}
          </Button>
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
        <Button className="w-full md:w-40" color="primary">
          Тафсилоти бештар
        </Button>
      </CardFooter>
    </Card>
  );
}
