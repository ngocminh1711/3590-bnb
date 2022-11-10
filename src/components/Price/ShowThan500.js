import Header from "../header/Header";
import React from "react";

import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";


import PriceThan500 from "./PriceThan500";
import OptionsTabThan500 from "../../OptionTab/OptionTabThan500";


function ShowThan500(props) {
    return (
        <>
            <Header/>
            <OptionsTabThan500/>
            {/* <Banner/> */}
            <PriceThan500/>
            <Footer/>
        </>
    );
}

export default ShowThan500;
