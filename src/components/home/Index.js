import Banner from "../Banner";
import HomestayList from "../HomestayList.js";
import Header from "../header/Header";
import React from "react";
import TopHouseForRent from "../TopHouseForRent/TopHouseForRent";
import './Index.css'
import IconSlide from "../iconSlide/IconSlide";
import OptionsTab from "../iconSlide/optionsTab";
import DemoSlide from "../DemoSlide/DemoSlide";

function Home(props) {
    return (
        <>
            <Header/>
            <OptionsTab/>
            {/* <Banner/> */}
            <TopHouseForRent/>
            <HomestayList/>

        </>
    );
}

export default Home;
