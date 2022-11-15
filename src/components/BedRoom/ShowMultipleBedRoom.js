import Header from "../header/Header";
import React from "react";

import '../home/Index.css'


import Footer from "../footer/Footer";
import MultipleBedRoom from "./MultipleBedRoom";
import OptionsTab from "../iconSlide/optionsTab";
import OptionsTabMutiBed from "../../OptionTab/OptionTabMutiBed";




function ShowMultipleBedRoom(props) {
    return (
        <>
<Header />
            <OptionsTabMutiBed/>
            {/* <Banner/> */}
            <MultipleBedRoom />
            <Footer />
        </>
    );
}

export default ShowMultipleBedRoom;