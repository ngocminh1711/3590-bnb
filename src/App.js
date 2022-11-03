
import React from "react";
import "./App.css";
// import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Index.js";
import CreateHouseForRent from "./components/CreateHouseForRent/CreateHouseForRent";
import DetailHouseForRent from "./components/DetailHouseForRent/DetailHouseForRent";

function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/admin/host-create' element={<CreateHouseForRent/>}/>
                <Route path='/detail-house' element={<DetailHouseForRent/>}/>
        </Routes>
        </>
    );

}

export default App;