"use client";
import { Avatar, Card, CardBody, Chip, Tab, Tabs } from "@nextui-org/react";
import Kor from "./CardKor";

export default function ProfileCompanent() {
  const data = {
    userName: "theabdulloev",
    vip: true,
    fullName: "Ismoiljon Abdulloev",
    description: "Бонкдор - коршиноси қарз дар шаҳри Хуҷанд",
    watch: "1025",
    salary: "5 000",
    contacts: "+992 92 999 99 99",
    email: "email@email.com",
    location: "Худжанд",
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full relative bg-indigo-50 dark:bg-gray-600 h-24 flex justify-center items-end">
          <div className="w-20 h-20 absolute bg-white rounded-full -mb-9">
            <Avatar className="w-full h-full" alt="ne"></Avatar>
          </div>
        </div>
        <div className="w-full container h-full space-y-2 mx-auto p-4">
          <p>Ismoiljon Abdulloev</p>
          <p className="text-gray-500">@theabdulloev</p>
          <div className="space-x-2 space-y-2">
            <Chip>Front-end developer</Chip>
            <Chip>Back-end developer</Chip>
            <Chip>UX - UI designer</Chip>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum,
            laborum natus error beatae quaerat omnis autem sit, doloremque, sed
            voluptates sapiente blanditiis iste inventore explicabo quam ab enim
            eaque similique earum esse nemo? Reprehenderit rem aut iusto, saepe
            neque molestias fugiat a rerum nesciunt nostrum nobis nihil
            perferendis tempore temporibus sit earum molestiae architecto harum
            officiis vel recusandae fugit repellendus provident. Dolores facere
            explicabo provident consequuntur blanditiis natus laudantium.
          </p>
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
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
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
