import { Flex, Image} from "@chakra-ui/react";
import React from "react";

const Add = () => {
  return (
    <Flex justify="center">
      <Flex direction="column">
        <Image src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" />
        <Flex fontSize="5ppx" color="gray" justify="flex-end">
          Sponsored !
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Add;
