import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
} from "@nextui-org/react";

export const CustomCard = () => (
  <Card className="w-full min-h-60">
    <CardHeader className="flex gap-3">
      <Skeleton className="h-10 w-10 rounded-full m-3" />
      <div className="w-full space-y-2 flex flex-col">
        <div className="w-full flex justify-between">
          <Skeleton className="h-5 rounded-lg w-52"></Skeleton>
          <div className="flex gap-2">
            <Skeleton className="h-5 rounded-lg w-20"></Skeleton>
          </div>
        </div>
        <Skeleton className="h-5 rounded-lg w-20"></Skeleton>
      </div>
    </CardHeader>
    <Divider />
    <CardBody>
      <Skeleton className="h-7 w-96 rounded-lg"></Skeleton>
      <br />
      <div className="w-full flex flex-col lg:justify-start lg:flex-row gap-3 items-start justify-center lg:items-center">
        <Skeleton className="h-10 w-full rounded-lg"></Skeleton>
        <Skeleton className="h-10 w-full rounded-lg"></Skeleton>
        <Skeleton className="h-10 w-full rounded-lg"></Skeleton>
        <Skeleton className="h-10 w-full rounded-lg"></Skeleton>
      </div>
    </CardBody>
    <Divider />
    <CardFooter className="flex space-x-2 justify-between md:justify-start">
      <Skeleton className="w-full md:w-40 h-10 rounded-lg"></Skeleton>
      <Skeleton className="w-full md:w-40 h-10 rounded-lg"></Skeleton>
    </CardFooter>
  </Card>
);
