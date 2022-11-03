import Banner from "../Banner";
import HomestayList from "../HomestayList.js";
import Header from "../header/Header";
import React from "react";
import TopHouseForRent from "../TopHouseForRent/TopHouseForRent";

function Home(props) {
  return (
    <>
        <Header/>
      <Banner />
      <HomestayList />
      <TopHouseForRent/>
    </>
  );
}
export default Home;
