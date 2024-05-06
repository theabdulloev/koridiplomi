"use client";
import {
    Button,
    Tabs,
    Tab,
    Input,
    CardBody,
    Card,
    CardHeader,
    CardFooter,
} from "@nextui-org/react";
import React from "react";
import { toast } from "sonner";
import GoogleIcon from "./svg/google";
export default function LoginPage() {
    const [selected, setSelected] = React.useState<string | number>("login");

    return (
        <div
            className="flex flex-col p-4 justify-center items-center mx-auto space-y-2 h-[calc(100vh_-_60px)]
    "
        >
            <Card className="max-w-[540px] w-full h-full max-h-[700px]">
                <CardHeader className="text-center bg-primary text-white flex justify-center w-full">
                    <p>Хуш омадед</p>
                </CardHeader>
                <CardBody className="overflow-hidden h-full">
                    <div className="py-4">
                        <Button
                            fullWidth
                            onClick={() => toast("Временно не работает")}
                            color="default"
                            className="text-primary font-bold"
                        >
                            <GoogleIcon />
                            Google
                        </Button>
                    </div>
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab
                            key="login"
                            className=" h-full"
                            title="Ворид шудан"
                        >
                            <form className="flex h-full justify-between flex-col gap-4">
                                <div className="space-y-2">
                                    <Input
                                        isRequired
                                        label="Email"
                                        placeholder="Почтаи электронии худро ворид кунед"
                                        type="email"
                                    />
                                    <Input
                                        isRequired
                                        label="Password"
                                        placeholder="Рамзи худро ворид кунед"
                                        type="password"
                                    />
                                </div>
                                <div className="flex gap-2 items-end">
                                    <Button fullWidth color="primary">
                                        Ворид шудан
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                        <Tab
                            key="sign-up"
                            className=" h-full"
                            title="Аз қайд гузаштан"
                        >
                            <form className="flex flex-col h-full justify-between  gap-4">
                                <div className="space-y-2">
                                    <Input
                                        isRequired
                                        label="Ном"
                                        placeholder="Номи худро ворид кунед"
                                        type="password"
                                    />
                                    <Input
                                        isRequired
                                        label="Email"
                                        placeholder="Почтаи электронии худро ворид кунед"
                                        type="email"
                                    />
                                    <Input
                                        isRequired
                                        label="Password"
                                        placeholder="Рамзи худро ворид кунед"
                                        type="password"
                                    />
                                </div>
                                {/* <p className="text-center text-small">
                          Already have an account?{" "}
                          <Link size="sm" onPress={() => setSelected("login")}>
                            Ворид шудан
                          </Link>
                        </p> */}
                                <div className="flex gap-2 flex-col justify-end">
                                    <Button fullWidth color="primary">
                                        Аз қайд гузаштан
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}
