import HomestayList from "../HomestayList.js";
import Header from "../header/Header";
import React from "react";
import TopHouseForRent from "../TopHouseForRent/TopHouseForRent";
import './Index.css'
import OptionsTab from "../iconSlide/optionsTab";
import Footer from "../footer/Footer";


function Home(props) {
    return (
        <>
            <Header/>
            <OptionsTab/>
            <TopHouseForRent/>
            <HomestayList/>
            <Footer/>
        </>
    );
}

export default Home;
