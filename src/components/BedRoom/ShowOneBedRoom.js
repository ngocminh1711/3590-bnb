import Header from "../header/Header";
import React from "react";
import '../home/Index.css'
import Footer from "../footer/Footer";
import OneBedRoom from "./OneBedRoom";
import OptionsTabOneBed from "../../OptionTab/OptionTabOneBed";


function ShowOneBedRoom() {
    return (
        <>
            <Header/>
            <OptionsTabOneBed/>
            <OneBedRoom/>
            <Footer/>
        </>
    );
}

export default ShowOneBedRoom;