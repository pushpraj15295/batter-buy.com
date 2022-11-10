import { Link } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AllRoutes from './Router/AllRoutes';

function App() {
  return (
    <div className="App">
       {/* <div><Link to="/login">Login</Link>
       <Link to="/signup">signup</Link>
       <Link to="/forgetpassword">ForgetPassword</Link>
       <Link to="/resetPassword">ResetPassword</Link>
       </div>
         <AllRoutes/> */}
         <AllRoutes/>
    </div>
  );
}

export default App;
