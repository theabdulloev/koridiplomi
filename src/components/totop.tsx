"use client";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Text, Transition, rem } from "@mantine/core";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ToPop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      {/* <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text> */}
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
              <Icon fontSize={25} icon="solar:arrow-to-top-right-linear" />
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
