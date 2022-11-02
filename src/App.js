
import React from "react";
import "./App.css";
// import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Index.js";
import CreateHouseForRent from "./components/CreateHouseForRent/CreateHouseForRent";
import SearchedHouseList from "./components/searchHouses/SearchedHouseList";

function App() {
    return (
        <>
            
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/admin/host-create' element={<CreateHouseForRent/>}/>
                <Route path='/searchList' element={<SearchedHouseList/>}/>
        </Routes>
        </>
    );

}

export default App;