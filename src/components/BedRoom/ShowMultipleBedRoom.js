import Header from "../header/Header";
import React from "react";

import '../home/Index.css'


import Footer from "../footer/Footer";
import MultipleBedRoom from "./MultipleBedRoom";
import OptionsTabMutiBed from "../../OptionTab/OptionTabMutiBed";




function ShowMultipleBedRoom(props) {
    return (
        <>
            
            <OptionsTabMutiBed/>
            {/* <Banner/> */}
            <MultipleBedRoom />
            <Footer />
        </>
    );
}

export default ShowMultipleBedRoom;