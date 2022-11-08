import Header from "../header/Header";
import React from "react";

import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";
import MultipleBedRoom from "./MultipleBedRoom";




function ShowMultipleBedRoom(props) {
    return (
        <>
            <Header/>
            <OptionsTab/>
            {/* <Banner/> */}
            <MultipleBedRoom />
            <Footer />
        </>
    );
}

export default ShowMultipleBedRoom;