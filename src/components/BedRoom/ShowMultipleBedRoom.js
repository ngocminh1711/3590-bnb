import Header from "../header/Header";
import React from "react";

import '../home/Index.css'


import Footer from "../footer/Footer";
import MultipleBedRoom from "./MultipleBedRoom";
import OptionsTab from "../iconSlide/optionsTab";




function ShowMultipleBedRoom(props) {
    return (
        <>

            <OptionsTab/>
            {/* <Banner/> */}
            <MultipleBedRoom />
            <Footer />
        </>
    );
}

export default ShowMultipleBedRoom;