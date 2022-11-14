import Header from "../header/Header";
import React from "react";
import '../home/Index.css'
import OptionsTab from "../iconSlide/optionsTab";
import Footer from "../footer/Footer";
import PriceThan1000 from "./Pricethan1000";
import OptionsTabThan1000 from "../../OptionTab/OptionTabThan1000";


function ShowThan1000(props) {
    return (
        <>
            <Header />
            <OptionsTabThan1000/>
            {/* <Banner/> */}
            <PriceThan1000/>
            <Footer />
        </>
    );
}

export default ShowThan1000;
