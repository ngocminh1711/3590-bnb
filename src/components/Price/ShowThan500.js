
import Header from "../header/Header";
import React from "react";

import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";


import PriceThan500 from "./PriceThan500";


function ShowLess500(props) {
    return (
        <>
            <Header/>
            <OptionsTab/>
            {/* <Banner/> */}
            <PriceThan500/>
            <Footer />
        </>
    );
}

export default ShowLess500;
