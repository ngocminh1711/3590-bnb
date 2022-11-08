
import Header from "../header/Header";
import React from "react";
import TopHouseForRent from "../TopHouseForRent/TopHouseForRent";
import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";
import OptionsTabTop4 from "../../OptionTab/OptionTabTop4";


function TopHouse(props) {
    return (
        <>
            
            <OptionsTabTop4/>
            <TopHouseForRent/>
            <Footer />
        </>
    );
}

export default TopHouse;
