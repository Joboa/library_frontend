import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <Router >
      <div className="bg-blue-100 w-full h-screen">
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/users/dashboard' element={<UserDashboard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
