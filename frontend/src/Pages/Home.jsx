import { Box, Center, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Add from "../components/Add";
import Add2 from "../components/Add2";
import Add3 from "../components/Add3";
import Carousel from "../components/Carousel";
import Discount from "../components/Discount";
// import Carousel from "../components/Carousel";
// import Footer2 from "../components/Footer2";
import Main from "../components/Main";
import Textbox from "../components/Textbox";
import Textbox2 from "../components/Textbox2";
import Products from "./../components/product/Products";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [datas, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/allProducts")
      .then((data) => setdata(data.data.products))
      .catch((e) => console.log(e));
  }, []);
  console.log(datas);
  return (
    <div style={{ width: "100%" }}>
      <Discount />
      {/* <Center>
        <Navebar />
      </Center> */}
      {/* <Center>
        <Carousel />
      </Center> */}
      <Carousel />
      <Main />

      <Add />
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
          {datas?.map((product, index) => {
            if (index <= 3) {
              return (
                <Products
                  {...product}
                  key={index}
                  onClick={() => {
                    navigate("/allProducts");
                  }}
                />
              );
            }
          })}
        </Grid>
      </Box>
      <Add3 />
      <Center>
        <Textbox />
      </Center>
      {/* <Center> */}
      <Textbox2 />
      {/* </Center> */}
      <Add2 />

      {/* <Footer2 /> */}

      {/* <Center bg="#1f1f1f" color="white">
        <Footer bg="#1f1f1f" />
      </Center> */}
    </div>
  );
};

export default Home;
