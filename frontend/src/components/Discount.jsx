import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Discount = () => {
  return (
    <Flex bg="#000000" color="white" justify="center">
      <Text p="5px" fontSize="14px">
        FOR ONLINE PAYMENT EXTRA ₹5% DISCOUNT ON ORDERS ABOVE ₹500.
      </Text>
    </Flex>
  );
};

export default Discount;
