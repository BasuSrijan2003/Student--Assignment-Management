import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dasboard from "./pages/Dasboard";
import Error from "./pages/Error";


const App = () => {
  

  const [isLoggedIn, setIsLoggedIn] = useState(
  !!localStorage.getItem("token")
);
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar isLoggedin={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="*" element={<Error/>} />

      </Routes>
    </div>


  );
};

export default App;