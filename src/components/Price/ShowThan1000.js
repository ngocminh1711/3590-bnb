
import Header from "../header/Header";
import React from "react";

import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";



import PriceThan1000 from "./Pricethan1000";


function ShowLess1000(props) {
    return (
        <>
            <Header/>
            <OptionsTab/>
            {/* <Banner/> */}
            <PriceThan1000/>
            <Footer />
        </>
    );
}

export default ShowLess1000;
