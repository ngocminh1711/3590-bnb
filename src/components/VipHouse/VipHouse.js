
import Header from "../header/Header";
import React from "react";

import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";
import VipHouseForRent from "./VipHouseForRent";
import OptionsTabVip from "../../OptionTab/OptionTabVip";


function TopHouse(props) {
    return (
        <>
           
            <OptionsTabVip/>
            {/* <Banner/> */}
            <VipHouseForRent/>
            <Footer />
        </>
    );
}

export default TopHouse;
