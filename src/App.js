import React from "react";
import { Route, Routes } from "react-router-dom";
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
import ProfileExample from "./components/Profile/ProfileExample.js";
import EditProfile from "./components/Profile/EditProfile.js";
import DemoSlide from "./components/DemoSlide/DemoSlide";
import GetStarted from "./components/getStarted/GetStarted.js";
import OptionsTab from "./components/iconSlide/optionsTab";
import TopHouse from "./components/TopHouseForRent/TopHouse";
import VipHouse from "./components/VipHouse/VipHouse";
import NormalHouse from "./components/NormalHouse/NormalHouse";
import ShowOneBedRoom from "./components/BedRoom/ShowOneBedRoom";
import ShowMultipleBedRoom from "./components/BedRoom/ShowMultipleBedRoom";
import ScrollTop from "./components/iconSlide/iconScrollTop.js";




function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ListHost />} />
        <Route path="/admin/host-create" element={<CreateHouseForRent />} />
        <Route path="/detail-house" element={<DetailHouseForRent />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/searchList" element={<SearchedHouseList />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/edit/:id" element={<EditProfile />} />
        <Route path="/demo" element={<DemoSlide/>}/>
        <Route path="/get-started" element={<GetStarted/>}/>
        <Route path="/top4" element={<TopHouse/>}/>
        <Route path="/vip" element={<VipHouse/>}/>
        <Route path="/normal" element={<NormalHouse/>}/>
        <Route path="/onebedroom" element={<ShowOneBedRoom/>}/>
        <Route path="/multiplebedroom" element={<ShowMultipleBedRoom/>}/>
      </Routes>
      <ScrollTop/>
    </>
  );
}
export default App;
