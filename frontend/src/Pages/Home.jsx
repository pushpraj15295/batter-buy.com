import { Center } from "@chakra-ui/react";
import React from "react";
// import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
// import Footer2 from "../components/Footer2";
import Main from "../components/Main";
import Navebar from "../components/Navbar";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* <Center>
        <Navebar />
      </Center> */}
      {/* <Center>
        <Carousel />
      </Center> */}

      <Main />

      {/* <Footer2 /> */}

      {/* <Center bg="#1f1f1f" color="white">
        <Footer bg="#1f1f1f" />
      </Center> */}
    </div>
  );
};

export default Home;
