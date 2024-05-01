"use client";
import { Button, Tabs, Tab, Input, CardBody, Card, CardHeader } from "@nextui-org/react";
import React from "react";
export default function LoginPage() {
  const [selected, setSelected] = React.useState<string | number>("login");

  return (
    <div className="flex flex-col p-4 justify-center items-center mx-auto h-[80vh]">
      <Card className="max-w-[540px] w-full h-full max-h-[700px]">
        <CardHeader className="text-center w-full">
            <p>Ворид шудан</p>
        </CardHeader>
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Ворид шудан">
              <form className="flex flex-col gap-4">
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
                {/* <p className="text-center text-small">
                          Need to create an account?{" "}
                          <Link
                            size="sm"
                            onPress={() => setSelected("sign-up")}
                          >
                            Sign up
                          </Link>
                        </p> */}
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Ворид шудан
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Аз қайд гузаштан">
              <form className="flex flex-col gap-4 h-[300px]">
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
                {/* <p className="text-center text-small">
                          Already have an account?{" "}
                          <Link size="sm" onPress={() => setSelected("login")}>
                            Ворид шудан
                          </Link>
                        </p> */}
                <div className="flex gap-2 justify-end">
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
