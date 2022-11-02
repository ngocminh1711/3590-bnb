import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/login/Register.js";
import Login from "./components/login/Login.js";
import Home from "./components/home/Index.js";
import ListHost from "./components/host/Dashboard.js";
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<ListHost/>}/>
      </Routes>
    </div>
  )
}
export default App;
