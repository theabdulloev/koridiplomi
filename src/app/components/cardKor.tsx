// import { useState } from "react";

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Avatar,
//   Button,
// } from "@nextui-org/react";

// export default function Kor(props: any) {
//   const [isFollowed, setIsFollowed] = useState(false);

//   return (
//     <Card className="w-[340px] h-[200px]">
//       <CardHeader className="justify-between">
//         <div className="flex gap-5">
//           <Avatar
//             isBordered
//             radius="full"
//             size="md"
//           />
//           <div className="flex flex-col gap-1 items-start justify-center">
//             <h4 className="text-small font-semibold leading-none text-default-600">
//               {props.fullName}
//             </h4>
//             <h5 className="text-small tracking-tight text-default-400">
//               @{props.userName}
//             </h5>
//           </div>
//         </div>
//         <Button
//           className={
//             isFollowed
//               ? "bg-transparent text-foreground border-default-200"
//               : "bg-black text-white"
//           }
//           radius="full"
//           size="sm"
//           variant={isFollowed ? "bordered" : "solid"}
//           onPress={() => setIsFollowed(!isFollowed)}
//         >
//           {isFollowed ? "Вы подписаны" : "Подписаться"}
//         </Button>
//       </CardHeader>
//       <CardBody className="px-3 py-0 text-small text-default-400">
//         <p>{props.description}</p>
//         <span className="pt-2">
//           #FrontendWithZoey
//           <span className="py-2" aria-label="computer" role="img">
//             💻
//           </span>
//         </span>
//       </CardBody>
//       <CardFooter className="gap-3">
//         <div className="flex gap-1">
//           <p className="font-semibold text-default-400 text-small">
//             {props.watch}
//           </p>
//           <p className="text-default-400 text-small">Просмотров</p>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Chip,
} from "@nextui-org/react";

export default function Kor() {
  return (
    <Card className="w-full min-h-60">
      <CardHeader className="flex gap-3">
        <div className="w-10 h-10 rounded-sm bg-gray-400">
        <Image alt="nextui logo" height={40} radius="sm" width={40} />
        </div>
        <div className="flex flex-col">
          <p className="text-md"> Name Company</p>
          <p className="text-small text-default-500">companyname.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="space-x-3">
          <span>2 000c - 2 500c </span>
          <Chip radius="sm" variant="bordered">
            Можно удалёно
          </Chip>
          <Chip radius="sm" variant="bordered">
            Опыт более 6 лет
          </Chip>
        </div>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          placeat dicta earum. Error unde, numquam, sed maiores rem rerum sit
          nihil doloribus maxime accusantium nam aperiam reprehenderit labore
          nisi magni!
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="flex space-x-2 justify-between md:justify-start">
        <Button className="w-full md:w-40" variant="ghost">
          Контакты
        </Button>
        <Button className="w-full md:w-40" color="primary">
          Откликнуться
        </Button>
      </CardFooter>
    </Card>
  );
}
