import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Bottombar = () => {
  return (
    <Flex gap="20px" padding="20px" wrap="wrap" justify="space-between">
      <Flex gap="20px">
        <Image src="https://demo4.drfuri.com/media/razzi/truck3.svg" />
        <Box padding="20px">
          <Text color="black">FREE SHIPPING</Text>
          <Text color="gray">From all orders over Rs 500</Text>
        </Box>
      </Flex>
      <Flex gap="20px">
        <Image src="https://demo4.drfuri.com/media/razzi/money.svg" />
        <Box padding="20px">
          <Text color="black">Free Returns</Text>
          <Text color="gray">Return money within 30 days</Text>
        </Box>
      </Flex>
      <Flex gap="20px">
        <Image src="https://demo4.drfuri.com/media/razzi/box.svg" />
        <Box padding="20px">
          <Text color="black">SECURE SHOPPING</Text>
          <Text color="gray">You're in safe hands</Text>
        </Box>
      </Flex>
      <Flex gap="20px">
        <Image src="https://demo4.drfuri.com/media/razzi/like.svg" />
        <Box padding="20px">
          <Text color="black">OVER 10,000 STYLES</Text>
          <Text color="gray">We have everything you need</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Bottombar;
