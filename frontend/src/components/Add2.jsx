import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Add2 = () => {
  return (
    <Flex justify="center">
      <Flex direction="column">
        <Image
          w="100%"
          src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/887c81fe-4fce-457e-bd2a-2e2376585052.jpg"
        />
        <Flex fontSize="5ppx" color="gray" justify="flex-end">
          Sponsored !
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Add2;
