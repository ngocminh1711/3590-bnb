import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/login/Register.js";
import Login from "./components/login/Login.js";
import Home from "./components/home/Index.js";
import ListHost from "./components/host/Dashboard.js";
import CreateHouseForRent from "./components/CreateHouseForRent/CreateHouseForRent";
import SearchedHouseList from "./components/searchHouses/SearchedHouseList";
import DetailHouseForRent from "./components/DetailHouseForRent/DetailHouseForRent";
import Footer from "./components/footer/Footer.js";
import ChangePassword from "./components/host/ChangePassword.js";
import Profile from "./components/Profile/Profile.js";
import Slide from "./components/Slide.js";
import styled, {ThemeProvider} from "styled-components";
import {useState} from "react";
import {darkTheme, lightTheme} from "./utils/Theme";
import Header from "./components/header/Header.js";
import Example from "./components/home/Example.js";
import ProfileExample from "./components/Profile/ProfileExample.js";
import EditProfile from "./components/Profile/EditProfile.js";
import DetailHouse from "./components/host/DetailHouse/DetailHouse";
import GetStarted from "./components/getStarted/GetStarted.js";
import DemoSlide from "./components/DemoSlide/DemoSlide";
import TopHouse from "./components/TopHouseForRent/TopHouse";
import VipHouse from "./components/VipHouse/VipHouse";
import NormalHouse from "./components/NormalHouse/NormalHouse";
import ShowOneBedRoom from "./components/BedRoom/ShowOneBedRoom";
import ShowMultipleBedRoom from "./components/BedRoom/ShowMultipleBedRoom";

import ShowLess500 from "./components/Price/ShowLess500";
import ShowThan500 from "./components/Price/ShowThan500";
import ShowThan1000 from "./components/Price/ShowThan1000";

import ScrollTop from "./components/iconSlide/iconScrollTop.js";


function App() {

    return (
        <>


            <Routes>
                <Route path="/" element={<GetStarted/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/dashboard" element={<ListHost/>}/>
                <Route path="/dashboard/detail/:id" element={<DetailHouse/>}/>
                <Route path="/admin/host-create" element={<CreateHouseForRent/>}/>
                <Route path="/detail-house" element={<DetailHouseForRent/>}/>
                <Route path="/change-password" element={<ChangePassword/>}/>
                <Route path="/searchList" element={<SearchedHouseList/>}/>
                <Route path="/profile/:id" element={<Profile/>}/>
                {/*<Route path="/profile2" element={<ProfileExample />} />*/}
                <Route path="/profile/edit/:id" element={<EditProfile/>}/>
                <Route path="/demo" element={<DemoSlide/>}/>
                <Route path="/get-started" element={<GetStarted/>}/>
                <Route path="/top4" element={<TopHouse/>}/>
                <Route path="/vip" element={<VipHouse/>}/>
                <Route path="/normal" element={<NormalHouse/>}/>
                <Route path="/onebedroom" element={<ShowOneBedRoom/>}/>
                <Route path="/multiplebedroom" element={<ShowMultipleBedRoom/>}/>
                <Route path="/less500" element={<ShowLess500/>}/>
                <Route path="/than500" element={<ShowThan500/>}/>
                <Route path="/than1000" element={<ShowThan1000/>}/>

            </Routes>
            <ScrollTop/>
        </>
    );
}

export default App;
