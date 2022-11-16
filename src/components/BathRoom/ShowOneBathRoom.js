import React from "react";
import '../home/Index.css'
import Footer from "../footer/Footer";
import OneBathRoom from "./OneBathRoom";
import OptionsTabOneBath from "../../OptionTab/OptionTabOneBath";
import Header from "../header/Header";
function ShowOneBathRoom() {
    return (
        <>
            <Header />
            <OptionsTabOneBath/>
            <OneBathRoom />
            <Footer />
        </>
    );
}

export default ShowOneBathRoom;