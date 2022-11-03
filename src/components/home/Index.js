import Banner from "../Banner";
import HomestayList from "../HomestayList.js";
import Header from "../header/Header";
import React from "react";

function Home(props) {
  return (
    <>
        <Header/>
      <Banner />
      <HomestayList />
    </>
  );
}
export default Home;
