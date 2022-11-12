import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Textbox2 = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* <Box maxW={"6xl"} textAlign="justify" m="50px">
        <Text
          textAlign="center"
          fontSize="32px"
          fontWeight="600"
          lineHeight="48px"
          margin="30px"
        >
          The Ultimate Domestic Online Shopping Experience Platform in India
        </Text>
        <Text fontSize="16px" lineHeight="35px" color="gray">
          Online shopping with Uboric is quick, convenient and trouble-free. You
          can shop for the desired product right from the comfort of your home
          and get them delivered straight to your doorstep. Uboric offers you
          the chance to choose top branded products sitting in the comfort of
          your homes and just clicking on your requirements to get it delivered
          at your doorstep. Your search for the latest trending variety of
          unique products ends right here. A wide range of international
          products from global brands are available at your fingertips. We
          provide you with a world-class online shopping experience, along with
          superior service, to suit all your specific requirements. Our products
          are very reasonably priced and are not easily available elsewhere. Our
          high-end technology-based systems, combined with a human approach,
          ensure that you have an amazing and blissful online shopping
          experience with us. Our emphasis on customer delight drives every
          activity we undertake to provide you an ultimate, hassle-free and
          pleasant shopping experience. Our diverse categories of products
          comprise of fashion & jewellery, mobiles and tablets, home and
          furniture, electronics, health care and supplements, sports and
          fitness, beauty and perfumes. We offer almost every variety of product
          that your heart desires. Just Go Ahead and Explore the magical world
          of online shopping with Uboric! 24×7 Customer Care: For all your
          queries and concerns regarding your shopping orders.
        </Text>
      </Box> */}
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
            onClick={()=>navigate("/allProducts")}
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
