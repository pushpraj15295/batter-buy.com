import { Center } from "@chakra-ui/react";
import React from "react";
import Add from "../components/Add";
import Add2 from "../components/Add2";
import Add3 from "../components/Add3";
import Carousel from "../components/Carousel";
import Discount from "../components/Discount";
import Main from "../components/Main";
import Textbox from "../components/Textbox";
import Textbox2 from "../components/Textbox2";

const Home = () => {
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
