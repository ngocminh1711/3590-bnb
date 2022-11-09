import Header from "../header/Header";
import React from "react";

import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";

import OneBedRoom from "./OneBedRoom";
import OptionsTabOneBed from "../iconSlide/optionsTab";


function ShowOneBedRoom(props) {
    return (
        <>
           
            <OptionsTabOneBed/>
            {/* <Banner/> */}
            <OneBedRoom />
            <Footer />
        </>
    );
}

export default ShowOneBedRoom;