
import Header from "../header/Header";
import React from "react";

import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";
import VipHouseForRent from "./VipHouseForRent";


function TopHouse(props) {
    return (
        <>
            <Header/>
            <OptionsTab/>
            {/* <Banner/> */}
            <VipHouseForRent/>
            <Footer />
        </>
    );
}

export default TopHouse;
