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
import DetailHouse from "./components/host/DetailHouse/DetailHouse";




function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ListHost />} />
        <Route path="/dashboard/detail/:idProduct" element={<DetailHouse />}/>
        <Route path="/admin/host-create" element={<CreateHouseForRent />} />
        <Route path="/detail-house" element={<DetailHouseForRent />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/searchList" element={<SearchedHouseList />} />
        <Route path="/profile/:id" element={<Profile />} />
        {/*<Route path="/profile2" element={<ProfileExample />} />*/}
        <Route path="/profile/edit/:id" element={<EditProfile />} />
        <Route path="/demo" element={<DemoSlide/>}/>
      </Routes>
      {/*<Footer />*/}
    </>
  );
}
export default App;
