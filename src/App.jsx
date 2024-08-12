import React from "react";
import { BrowserRouter as Router, 
  Route, Routes } from "react-router-dom";
import Hero from "./Login/Hero";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;