import React from "react";
import TopHouseForRent from "../TopHouseForRent/TopHouseForRent";
import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";



function TopHouse(props) {
    return (
        <>
            <OptionsTab/>
            <TopHouseForRent/>
            <Footer />
        </>
    );
}

export default TopHouse;
