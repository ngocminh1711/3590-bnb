import Banner from "../Banner";
import HomestayList from "../HomestayList.js";
import Header from "../header/Header";
import React from "react";
import TopHouseForRent from "../TopHouseForRent/TopHouseForRent";
import './Index.css'

function Home(props) {
    return (
        <>
            <Header/>
            <Banner/>
            <TopHouseForRent/>
            <HomestayList/>

        </>
    );
}

export default Home;
