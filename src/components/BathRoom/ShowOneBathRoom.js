
import React from "react";
import '../home/Index.css'
import OptionsTab from "../iconSlide/optionsTab";
import Footer from "../footer/Footer";
import OneBathRoom from "./OneBathRoom";
import OptionsTabOneBath from "../../OptionTab/OptionTabOneBath";
import Header from "../header/Header";
function ShowOneBathRoom(props) {
    return (
        <>
            <Header />
            <OptionsTabOneBath/>
            {/* <Banner/> */}
            <OneBathRoom />
            <Footer />
        </>
    );
}

export default ShowOneBathRoom;