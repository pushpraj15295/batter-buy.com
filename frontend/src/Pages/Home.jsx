import { Center } from "@chakra-ui/react";
import React from "react";
// import Carousel from "../components/home/Carousel";
import Footer from "../components/home/Footer";
// import Footer2 from "../components/Footer2";
import Main from "../components/home/Main";
import Navebar from "../components/home/Navbar";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Center>
        <Navebar />
      </Center>
      {/* <Center>
        <Carousel />
      </Center> */}

      <Main />

      {/* <Footer2 /> */}

      <Center bg="#1f1f1f" color="white">
        <Footer bg="#1f1f1f" />
      </Center>
    </div>
  );
};

export default Home;
