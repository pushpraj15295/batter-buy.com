import { Center } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import Navebar from "./components/Navbar";
import Home from "./Pages/Home";
import AllRoutes from "./Router/AllRoutes";



function App() {
  return (
    <div className="App">
      <Center>
        <Navebar />
      </Center>
      <Home />

      <Center bg="#1f1f1f" color="white">
        <Footer bg="#1f1f1f" />
      </Center>
      <AllRoutes />
    </div>
  );
}

export default App;
