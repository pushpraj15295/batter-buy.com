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

function App() {
  return (
    <div className="App">
      <Center>
        <Navebar />
      </Center>
      {/* <div><Link to="/login">Login</Link>
       <Link to="/signup">signup</Link>
       <Link to="/forgetpassword">ForgetPassword</Link>
       <Link to="/resetPassword">ResetPassword</Link>
       </div>
         <AllRoutes/> */}
<<<<<<< HEAD
      <Home />
      {/* <Contact /> */}
      {/* <About /> */}

      <Center bg="#1f1f1f" color="white">
        <Footer bg="#1f1f1f" />
      </Center>
=======
         <AllRoutes/>
>>>>>>> 9c677f642a56e7c26a57657e32ba127ee99b6a3e
    </div>
  );
}

export default App;
