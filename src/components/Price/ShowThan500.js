import Header from "../header/Header";
import React from "react";
import '../home/Index.css'
import Footer from "../footer/Footer";
import PriceThan500 from "./PriceThan500";
import OptionsTabThan500 from "../../OptionTab/OptionTabThan500";


function ShowThan500() {
    return (<>
            <Header/>
            <OptionsTabThan500/>
            <PriceThan500/>
            <Footer/>
        </>);
}

export default ShowThan500;
