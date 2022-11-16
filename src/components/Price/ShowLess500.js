import Header from "../header/Header";
import React from "react";
import '../home/Index.css'
import Footer from "../footer/Footer";
import PriceLess500 from "./PriceLess500";
import OptionsTabLess500 from "../../OptionTab/OptionTabLess500";


function ShowLess500() {
    return (
        <>
            <Header/>
            <OptionsTabLess500/>
            <PriceLess500/>
            <Footer/>
        </>
    );
}

export default ShowLess500;
