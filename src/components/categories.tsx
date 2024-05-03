"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  ScrollShadow,
  Image,
} from "@nextui-org/react";
import WorksIcon from "./svg/wordss";
// Вакансии дня

// Компании дня
// 1011 вакансий
//
// 86355 вакансий
// Подработка
// до 260 000 ₽
// 9387 вакансий
// Курьер
// 5 000 – 240 000 ₽
// 3014 вакансий
// Водитель
// до 260 000 ₽
//
//
// до 145 000 ₽
// 8114 вакансий
//
// до 110 000 ₽
// 5548 вакансий
export default function Categories() {
  const list = [
    {
      title: "Все вакансии",
      img: "/images/fruit-4.jpeg",
      price: "251 вакансии",
    },
    {
      title: "Вакансии дня",
      img: "/images/fruit-5.jpeg",
      price: "27 вакансии",
    },
    {
      title: "Работа из дома",
      img: "/images/fruit-6.jpeg",
      price: "102 вакансии",
    },
    {
      title: "Продавец",
      img: "/images/fruit-7.jpeg",
      price: "44 вакансии",
    },
    {
      title: "Кассир",
      img: "/images/fruit-8.jpeg",
      price: "78 вакансии",
    },
  ];
  return (
    <>
      <ScrollShadow
        orientation="horizontal"
        hideScrollBar
        className="max-h-[300px]"
      >
        <div className="space-x-5 flex py-6 px-1">
          {list.map((item, index) => (
            <Card
              className="min-w-36"
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0 flex items-center flex-col justify-end bg-primary">
                {/* <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  src="/logoAbdulloev.jpg"
                  className="w-36 object-cover h-[140px]"
                /> */}
                <WorksIcon />
              </CardBody>
              <CardFooter className="text-small flex flex-col justify-between">
                <b>{item.title}</b>
                <p className="text-primary">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollShadow>
    </>
  );
}