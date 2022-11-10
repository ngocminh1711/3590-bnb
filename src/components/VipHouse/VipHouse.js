import React from "react";
import '../home/Index.css'
import OptionsTab from "../iconSlide/optionsTab";
import Footer from "../footer/Footer";
import VipHouseForRent from "./VipHouseForRent";
import Header from "../header/Header";
import OptionsTabVip from "../../OptionTab/OptionTabVip";


function VipHouse(props) {
    return (
        <>
            <Header />
            <OptionsTabVip/>
            {/* <Banner/> */}
            <VipHouseForRent/>
            <Footer />
        </>
    );
}

export default VipHouse;
