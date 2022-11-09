
import Header from "../header/Header";
import React from "react";

import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";

import NormalHouseForRent from "./NormalHouseForRent";


function NormalHouse(props) {
    return (
        <>

            <OptionsTab/>
            {/* <Banner/> */}
            <NormalHouseForRent/>
            <Footer />
        </>
    );
}

export default NormalHouse;
