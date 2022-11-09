
import React from "react";
import '../home/Index.css'
import Footer from "../footer/Footer";
import OptionsTab from "../iconSlide/optionsTab";
import MultipleBathRoom from "./MultipleBathRoom";

function ShowMultipleBathRoom(props) {
    return (
        <>

            <OptionsTab/>
            {/* <Banner/> */}
            <MultipleBathRoom />
            <Footer />
        </>
    );
}

export default ShowMultipleBathRoom;