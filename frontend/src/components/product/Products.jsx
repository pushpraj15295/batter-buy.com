import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";

function Products({
  title,
  description,
  color,
  rating,
  price,
  size,
  gender,
  img,
  onClick,
}) {
  return (
    <>
      <Flex
        onClick={onClick}
        flexDirection={"column"}
        cursor="pointer"
        mb={"10px"}
      >
        <Box overflow={"hidden"}>
          <Image className="imgAnimation" src={img[0]} />
        </Box>
        <Box>
          <Flex justifyItems={"center"} mt={"10px"}>
            <Text
              fontSize={["13px", "15px", "17px", "17px", "18px"]}
              fontWeight={600}
            >
              {title}
            </Text>
            <Spacer />
            <Box
              fontSize={["13px", "15px", "17px", "17px", "18px"]}
              mr={"3px"}
              mt={"4px"}
            >
              <AiOutlineStar />
            </Box>
            <Text fontSize={["13px", "15px", "17px", "17px", "18px"]}>
              {rating}
            </Text>
          </Flex>
          <Text
            fontSize={["12px", "12px", "13px", "16px", "17px"]}
            color={"gray"}
          >
            {description}
          </Text>
          <Text
            fontSize={["12px", "12px", "13px", "16px", "17px"]}
            color={"gray"}
          >
            {size}
          </Text>
          <Text
            fontSize={["13px", "15px", "17px", "17px", "18px"]}
            fontWeight={600}
          >
            {gender}, {color} Colour
          </Text>
          <Text
            fontSize={["15px", "20px", "17px", "20px", "20px"]}
            fontWeight={600}
            my={"6px"}
          >
            ₹{price}
          </Text>
        </Box>
      </Flex>
    </>
  );
}
export default Products;
