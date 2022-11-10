import { Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/home/Footer";
import Navebar from "./components/home/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AllRoutes from "./Router/AllRoutes";

function App() {
  return (
    <div className="App">
      <Center>
        <Navebar />
      </Center>
      {/* <div><Link to="/login">Login</Link>
       <Link to="/signup">signup</Link>
       </div>
         <AllRoutes/> */}
      {/* <Home /> */}
      <Contact />
      <Center bg="#1f1f1f" color="white">
        <Footer bg="#1f1f1f" />
      </Center>
    </div>
  );
}

export default App;
