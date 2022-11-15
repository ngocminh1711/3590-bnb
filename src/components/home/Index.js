import HomestayList from "../HomestayList.js";
import Header from "../header/Header";
import React from "react";
import "./Index.css";

import Footer from "../footer/Footer";
import OptionsTabAll from "../../OptionTab/OptionTabAll";

function Home(props) {
    return (
        <>
            <Header/>
            <OptionsTabAll/>
            <HomestayList/>
            <Footer/>
        </>
    );
}

export default Home;
