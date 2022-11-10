import { Box, Center, Flex, Image, Square, Text } from "@chakra-ui/react";
import React from "react";

const Main = () => {
  return (
    // <div style={{ display: "flex", justifyContent: "center" }}>

    // </div>
    <Flex color="white" justify="space-between" p="1%">
      <Center w="32%" bg="green.500">
        <Image
          w="100%"
          objectFit="fill"
          src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/02/09082940/cover-2.jpg"
          alt="Dan Abramov"
        />
      </Center>
      <Center w="32%" bg="green.500">
        <Image
          w="100%"
          objectFit="fill"
          src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/02/09082940/cover-2.jpg"
          alt="Dan Abramov"
        />
      </Center>
      <Center w="32%" bg="green.500">
        <Image
          w="100%"
          objectFit="fill"
          src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/02/09082940/cover-2.jpg"
          alt="Dan Abramov"
        />
      </Center>
    </Flex>
  );
};

export default Main;
