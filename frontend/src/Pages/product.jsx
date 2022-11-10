import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

function Products() {
  return (
    <div>
      <>
        <Flex
          border={"1px solid"}
          flexDirection={"column"}
          cursor="pointer"
          mb={"10px"}
          width={"max-content"}
        >
          <Box overflow={"hidden"}>
            <Image
              width={"250px"}
              src={
                "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/29954374-a879-4f9a-a1f1-56262ed614a4/jordan-dri-fit-sport-t-shirt-n3lwwm.png"
              }
            />
          </Box>
          <Box>
            <Text
              fontSize={["13px", "15px", "17px", "17px", "18px"]}
              fontWeight={600}
            >
              Jordan Dri-FIT Sport
            </Text>
            <Text
              fontSize={["12px", "12px", "13px", "16px", "17px"]}
              color={"gray"}
            >
              Men's T-Shirt
            </Text>
            <Text
              fontSize={["15px", "20px", "17px", "20px", "20px"]}
              fontWeight={600}
              my={"6px"}
            >
              ₹ 3,859
            </Text>
            <Button>Add to Bag</Button>
            <Button>Favourite</Button>
          </Box>
        </Flex>
      </>
    </div>
  );
}
export default Products;
