import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    // <div style={{ margin: "auto" }}>
    <Box
      maxW={"6xl"}
      justify="space-between"
      wrap="wrap"
      m="auto"
      marginBottom="50px"
      marginTop="50px"
    >
      <Box w={"1xl"}>
        <Center>
          <Text fontSize="32px" fontWeight="500" lineHeight="48px" color="gray">
            Thank You For Shopping.
          </Text>
        </Center>
        <Center>
          <Image
            maxW="600px"
            src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif"
          />
        </Center>

        <Center>
          <Text fontSize="32px" fontWeight="500" lineHeight="48px" color="gray">
            Your Order Has Been Placed.
          </Text>
        </Center>
        <Center>
          {" "}
          <Button
            color="white"
            bg="black"
            p="12px 24px"
            fontSize="13px"
            borderRadius="3px"
            marginTop="20px"
            // onClick={() => {
            //   setTimeout(() => navigate("/"), 4000);
            // }}

            onClick={() => navigate("/")}
          >
            Go To Home
          </Button>
        </Center>
      </Box>
    </Box>
    // </div>
  );
};

export default Success;
