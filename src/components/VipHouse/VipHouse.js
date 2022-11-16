import React from "react";
import '../home/Index.css'
import Footer from "../footer/Footer";
import VipHouseForRent from "./VipHouseForRent";
import Header from "../header/Header";
import OptionsTabVip from "../../OptionTab/OptionTabVip";


function VipHouse() {
    return (
        <>
            <Header />
            <OptionsTabVip/>
            <VipHouseForRent/>
            <Footer />
        </>
    );
}

export default VipHouse;
