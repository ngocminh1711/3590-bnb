
import React from "react";
import '../home/Index.css'
import OptionsTab from "../iconSlide/optionsTab";
import Footer from "../footer/Footer";
import OneBathRoom from "./OneBathRoom";
function ShowOneBathRoom(props) {
    return (
        <>
            <OptionsTab/>
            {/* <Banner/> */}
            <OneBathRoom />
            <Footer />
        </>
    );
}

export default ShowOneBathRoom;