import Header from "../header/Header";
import React from "react";
import '../home/Index.css'
import Footer from "../footer/Footer";
import NormalHouseForRent from "./NormalHouseForRent";
import OptionsTabNormal from "../../OptionTab/OptionTabNormal";


function NormalHouse(props) {
    return (
        <>
            <Header/>
            <OptionsTabNormal/>
            <NormalHouseForRent/>
            <Footer/>
        </>
    );
}

export default NormalHouse;
