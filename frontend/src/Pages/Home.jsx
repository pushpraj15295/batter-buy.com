import { Box, Center, Grid, Text } from "@chakra-ui/react";
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
  const [datas2, setdata2] = useState([]);
  const [datas3, setdata3] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/allProducts")
      .then((data) => setdata(data.data.products))
      .catch((e) => console.log(e));
    /////////
    axios
      .get("http://localhost:8080/kids")
      .then((data) => setdata2(data.data.products))
      .catch((e) => console.log(e));
    //////
    axios
      .get("http://localhost:8080/women")
      .then((data) => setdata3(data.data.products))
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

      <Add3 />
      {/*  */}
      <Box minH={"800px"}>
        <Text
          textAlign="center"
          fontSize="32px"
          fontWeight="600"
          lineHeight="48px"
          margin="30px"
        >
          Best Selling Footwear
        </Text>
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
            if (index <= 2) {
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
      {/*  */}
      <Add />
      {/*  */}
      <Box minH={"800px"}>
        <Text
          textAlign="center"
          fontSize="32px"
          fontWeight="600"
          lineHeight="48px"
          margin="30px"
        >
          Best Selling Kids Products
        </Text>
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
          {datas2?.map((product, index) => {
            if (index <= 2) {
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
      {/*  */}
      <Box minH={"800px"}>
        <Text
          textAlign="center"
          fontSize="32px"
          fontWeight="600"
          lineHeight="48px"
          margin="30px"
        >
          Best Selling Women Products
        </Text>
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
          {datas3?.map((product, index) => {
            if (index <= 2) {
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
      {/*  */}
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
