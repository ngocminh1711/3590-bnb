import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/login/Register.js";
import Login from "./components/login/Login.js";
import Home from "./components/home/Index.js";
import ListHost from "./components/host/Dashboard.js";
import CreateHouseForRent from "./components/CreateHouseForRent/CreateHouseForRent";
import SearchedHouseList from "./components/searchHouses/SearchedHouseList";
import DetailHouseForRent from "./components/DetailHouseForRent/DetailHouseForRent";
import Footer from "./components/footer/Footer.js";
import ChangePassword from "./components/host/ChangePassword.js";
// import Profile from "./components/Profile/RawInformation.js";
import Profile from "./components/Profile/Profile.js";
import Slide from "./components/Slide.js";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Theme";
import Header from "./components/header/Header.js";
import Example from "./components/home/Example.js";
import ProfileExample from "./components/Profile/ProfileExample.js";
import EditProfile from "./components/Profile/EditProfile.js";
import DemoSlide from "./components/DemoSlide/DemoSlide";
import GetStarted from "./components/getStarted/GetStarted.js";
const Container = styled.div`
flex`
const Main = styled.div`

  background-color: ${({ theme }) => theme.bg};

`;
function App() {
  const [lightMode, setLightMode] = useState(true);
  return (

    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Container>
        <Header lightMode={lightMode} setLightMode={setLightMode}/>
        <Main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ListHost />} />
          <Route path="/admin/host-create" element={<CreateHouseForRent />} />
          <Route path="/detail-house" element={<DetailHouseForRent />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/searchList" element={<SearchedHouseList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/slide" element={<Slide />} />
          <Route path ="/example" element={<Example />} />
          <Route path="/profile/:id" element={<Profile />} />
        {/*<Route path="/profile2" element={<ProfileExample />} />*/}
        <Route path="/profile/edit/:id" element={<EditProfile />} />
        <Route path="/demo" element={<DemoSlide/>}/>
        <Route path="/get-started" element={<GetStarted/>}/>
        </Routes>
        <Footer />
        </Main>
        </Container>
     </ThemeProvider>
  );
}
export default App;
