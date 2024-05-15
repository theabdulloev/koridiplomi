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
            title: "Ҳамаи вакансияҳо",
            img: "/images/fruit-4.jpeg",
            price: "251 вакансии",
        },
        {
            title: "Вакансияи руз",
            img: "/images/fruit-5.jpeg",
            price: "27 вакансии",
        },
        {
            title: "Кор аз хона",
            img: "/images/fruit-6.jpeg",
            price: "102 вакансии",
        },
        {
            title: "Фурушанда",
            img: "/images/fruit-7.jpeg",
            price: "44 вакансии",
        },
        {
            title: "ИТ",
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
                <div className="space-x-5 flex py-[2px]">
                    {list.map((item, index) => (
                        <Card
                            className="min-w-36"
                            shadow="sm"
                            key={index}
                            isPressable
                            onPress={() => console.log("item pressed")}
                        >
                            <CardBody className="overflow-visible p-0 flex items-center flex-col justify-end bg-primary">
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
