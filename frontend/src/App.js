import { Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navebar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AllRoutes from "./Router/AllRoutes";
import About from "./Pages/About";
import Bottombar from "./components/Bottombar";

function App() {
  return (
    <div className="App">
      <Center>
        <Navebar />
      </Center>
      <AllRoutes />
      <Center>
        <Bottombar />
      </Center>
      <Center bg="#1f1f1f" color="white">
        <Footer bg="#1f1f1f" />
      </Center>
    </div>
  );
}

export default App;
