import React from "react";
import '../home/Index.css'
import Footer from "../footer/Footer";
import OptionsTab from "../iconSlide/optionsTab";
import MultipleBathRoom from "./MultipleBathRoom";
import OptionsTabMutiBath from "../../OptionTab/OptionTabMutiBath";
import Header from "../header/Header";

function ShowMultipleBathRoom(props) {
    return (
        <>
            <Header/>
            <OptionsTabMutiBath/>
            {/* <Banner/> */}
            <MultipleBathRoom/>
            <Footer/>
        </>
    );
}

export default ShowMultipleBathRoom;