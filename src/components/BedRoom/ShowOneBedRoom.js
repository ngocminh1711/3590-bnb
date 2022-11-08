import Header from "../header/Header";
import React from "react";

import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";

import OneBedRoom from "./OneBedRoom";


function ShowOneBedRoom(props) {
    return (
        <>
            <Header/>
            <OptionsTab/>
            {/* <Banner/> */}
            <OneBedRoom />
            <Footer />
        </>
    );
}

export default ShowOneBedRoom;