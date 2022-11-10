import Header from "../header/Header";
import React from "react";

import '../home/Index.css'

import OptionsTab from "../iconSlide/optionsTab";

import Footer from "../footer/Footer";

import PriceLess500 from "./PriceLess500";
import OptionsTabLess500 from "../../OptionTab/OptionTabLess500";


function ShowLess500(props) {
    return (
        <>
            <Header/>
            <OptionsTabLess500/>
            {/* <Banner/> */}
            <PriceLess500/>
            <Footer/>
        </>
    );
}

export default ShowLess500;
