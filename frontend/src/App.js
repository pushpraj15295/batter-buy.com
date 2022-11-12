import { Center } from "@chakra-ui/react";
import "./App.css";
import Bottombar from "./components/Bottombar";
import Footer from "./components/Footer";
import Navebar from "./components/Navbar";
import AllRoutes from "./Router/AllRoutes";

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
