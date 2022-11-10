import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Spacer,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { LeftSideFilter } from "./LeftSideFilter";
import Products from "./product";
 
function Allproducts() {
  return (
    <>
      <Grid
        gap={["20px", "20px", "2%", "2%", "2%"]}
        templateColumns={"20% 70%"}
        justifyContent={"center"}
      >
        <Box
          minH={["120px", "120px", "600px", "600px", "600px"]}
          position={["none", "none", "sticky", "sticky", "sticky"]}
          top={["0px", "70px"]}
          overflowY={"scroll"}
          className="scroll"
          zIndex={0}
          mt={["10px", "10px", "20px", "20px", "20px"]}
        >
          <LeftSideFilter />
        </Box>

        <Box minH={"800px"}>
          <Grid
            gap={[2, 4]}
            p={["10px", "10px", "20px", "20px", "20px"]}
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            textAlign={"center"}
          >
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
export default Allproducts;
