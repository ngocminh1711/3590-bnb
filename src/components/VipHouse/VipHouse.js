import React from "react";
import '../home/Index.css'
import OptionsTab from "../iconSlide/optionsTab";
import Footer from "../footer/Footer";
import VipHouseForRent from "./VipHouseForRent";


function VipHouse(props) {
    return (
        <>
            <OptionsTab/>
            {/* <Banner/> */}
            <VipHouseForRent/>
            <Footer />
        </>
    );
}

export default VipHouse;
