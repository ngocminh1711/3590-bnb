import HomestayList from "../HomestayList.js";
import Header from "../header/Header";
import React from "react";
import TopHouseForRent from "../TopHouseForRent/TopHouseForRent";
import './Index.css'
import OptionsTab from "../iconSlide/optionsTab";
import DemoSlide from "../DemoSlide/DemoSlide";
import Footer from "../footer/Footer";

function Home(props) {
    return (
        <>
        
            <OptionsTab/>
            {/* <Banner/> */}
            <TopHouseForRent/>
            <HomestayList/>
            <Footer />
        </>
    );
}

export default Home;
