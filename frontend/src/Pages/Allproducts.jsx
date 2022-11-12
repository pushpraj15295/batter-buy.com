import { Box, Grid, useToast } from "@chakra-ui/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LeftSideFilter } from "../components/product/LeftSideFilter";
import Products from "../components/product/Products";
import { getRequest } from "../redux/products/actions";
import { getItemSession, setItemSession } from "../utils/sessionStorage";


function Allproducts() {
  const { products } = useSelector((state) => state.prodReducer);
  const path = getItemSession("path");
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRequest(path));
  }, [path]);

  const handleSingleProduct = (data) => {
    setItemSession("singleProduct", data);
    navigate("/description");
  };

  return (
    <>
      <Grid
        gap={["20px", "20px", "2%", "2%", "2%"]}
        templateColumns={["100%", "100%", "32% 60%", "20% 70%", "20% 78%"]}
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
          >
            {products?.map((product, index) => (
              <Products
                {...product}
                key={index}
                onClick={() => {
                  handleSingleProduct(product);
                }}
              />
            ))}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
export default Allproducts;
