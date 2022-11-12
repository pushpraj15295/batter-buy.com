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
import Checkout from "./Pages/Checkout";

function App() {
  return (
       <Checkout/>
    // <div className="App">
    //   <Center>
    //     <Navebar />
    //   </Center>
    //   {/* <div><Link to="/login">Login</Link>
    //    <Link to="/signup">signup</Link>
    //    <Link to="/forgetpassword">ForgetPassword</Link>
    //    <Link to="/resetPassword">ResetPassword</Link>
    //    </div> */}
    //      <AllRoutes/>
    //   <Home />
    //   {/* <Contact /> */}
    //   {/* <About /> */}

    //   <AllRoutes />
    //   <Center>
    //     <Bottombar />
    //   </Center>
    //   <Center bg="#1f1f1f" color="white">
    //     <Footer bg="#1f1f1f" />
    //   </Center>
    // </div>
  );
}

export default App;
