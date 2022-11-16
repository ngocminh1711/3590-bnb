import React from "react";
import '../home/Index.css'
import Footer from "../footer/Footer";
import MultipleBathRoom from "./MultipleBathRoom";
import OptionsTabMutiBath from "../../OptionTab/OptionTabMutiBath";
import Header from "../header/Header";

function ShowMultipleBathRoom() {
    return (
        <>
            <Header/>
            <OptionsTabMutiBath/>
            <MultipleBathRoom/>
            <Footer/>
        </>
    );
}

export default ShowMultipleBathRoom;