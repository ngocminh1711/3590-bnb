import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/login/Register.js";
import Login from "./components/login/Login.js";
import Home from "./components/home/Index.js";
import ListHost from "./components/host/Dashboard.js";
import CreateHouseForRent from "./components/CreateHouseForRent/CreateHouseForRent";
import SearchedHouseList from "./components/searchHouses/SearchedHouseList";

import DetailHouseForRent from "./components/DetailHouseForRent/DetailHouseForRent";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import ChangePassword from "./components/host/ChangePassword.js";
function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<ListHost/>}/>
        <Route path='/admin/host-create' element={<CreateHouseForRent/>}/>
        <Route path='/detail-house' element={<DetailHouseForRent/>}/>
        <Route path='/change-password' element={<ChangePassword/>}/>
        <Route path='/searchList' element={<SearchedHouseList/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}
export default App




            
  
