
import Header from "../header/Header";
import React from "react";
import TopHouseForRent from "../TopHouseForRent/TopHouseForRent";
import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";



function TopHouse(props) {
    return (
        <>
            <Header/>
            <OptionsTab/>
            {/* <Banner/> */}
            <TopHouseForRent/>
            <Footer />
        </>
    );
}

export default TopHouse;
