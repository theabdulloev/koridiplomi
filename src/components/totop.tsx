"use client";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Text, Transition, rem } from "@mantine/core";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ToTopIcon from "./svg/totop";

export default function ToPop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      {/* <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text> */}
      <Affix position={{ bottom: 50, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
              <ToTopIcon />
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
