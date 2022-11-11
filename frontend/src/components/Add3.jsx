import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Add3 = () => {
  return (
    <Flex justify="center">
      <Flex direction="column">
        <Image
          w="100%"
          src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/Topheaders/Eng/V1/Unrec_PC_English._CB605506831_.jpg"
        />
        <Flex fontSize="5px" color="gray" justify="flex-end">
          Sponsored !
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Add3;
