import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Textbox2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        maxW={"6xl"}
        justify="space-between"
        wrap="wrap"
        m="auto"
        marginBottom="50px"
      >
        <Box w={"1xl"}>
          <Text
            fontSize="32px"
            fontWeight="600"
            lineHeight="48px"
            textAlign="left"
          >
            Benefits Of Shopping
          </Text>

          <Text display="block" fontSize="16px" lineHeight="35px" color="gray">
            {" "}
            User-Friendly
          </Text>
          <Text fontSize="16px" lineHeight="35px" color="gray">
            Safe & Secure Shopping
          </Text>
          <Text fontSize="16px" lineHeight="35px" color="gray">
            Check Out Closely
          </Text>
          <Text fontSize="16px" lineHeight="35px" color="gray">
            Multiple Payment Options
          </Text>
          <Text fontSize="16px" lineHeight="35px" color="gray">
            Order History
          </Text>
          <Button
            color="white"
            bg="black"
            p="12px 24px"
            fontSize="13px"
            borderRadius="3px"
            marginTop="20px"
            onClick={() => navigate("/allProducts")}
          >
            SHOP NOW
          </Button>
        </Box>
        <Box w={"1xl"}>
          {" "}
          <Image src="https://www.uboric.com/wp-content/uploads/2022/08/61OR0aPLJAL._SL1500_-670x575.jpg" />
        </Box>
      </Flex>
    </>
  );
};

export default Textbox2;
