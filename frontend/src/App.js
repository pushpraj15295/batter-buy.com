import { Link } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AllRoutes from './Router/AllRoutes';

function App() {
  return (
    <div className="App">
         <AllRoutes/>
    </div>
  );
}

export default App;
