import Header from "../header/Header";
import React from "react";
import '../home/Index.css'
import Footer from "../footer/Footer";
import MultipleBedRoom from "./MultipleBedRoom";
import OptionsTabMutiBed from "../../OptionTab/OptionTabMutiBed";


function ShowMultipleBedRoom() {
    return (
        <>
            <Header/>
            <OptionsTabMutiBed/>
            <MultipleBedRoom/>
            <Footer/>
        </>
    );
}

export default ShowMultipleBedRoom;