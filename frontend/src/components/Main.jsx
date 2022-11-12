import { Box, Center, Flex, Image, Square, Text } from "@chakra-ui/react";
import React from "react";
import one from "../Pictures/1.JPG";
import two from "../Pictures/2.JPG";
import three from "../Pictures/3.JPG";

const Main = () => {
  return (
    // <div style={{ display: "flex", justifyContent: "center" }}>

    // </div>
    <Flex color="white" justify="space-between" p="1%">
      <Center w="32%">
        <Image
          w="100%"
          objectFit="fill"
          src={one}
          _hover={{ transform: "scale(1.1)" }}
          alt="Dan Abramov"
        />
      </Center>
      <Center w="32%">
        <Image
          w="100%"
          objectFit="fill"
          src={two}
          _hover={{ transform: "scale(1.1)" }}
          alt="Dan Abramov"
        />
      </Center>
      <Center w="32%">
        <Image
          w="100%"
          objectFit="fill"
          src={three}
          alt="Dan Abramov"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Center>
    </Flex>
  );
};

export default Main;
