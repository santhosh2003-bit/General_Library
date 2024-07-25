import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import homeImage from "../src/assets/homeimage.avif";
import Middle from "./Components/HomeComponent/Middle";
import Bottom from "./Components/Bottom/Bottom";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src={homeImage} alt="homeImage" className="w-full h-[400px] " />
      </div>
      <Middle />
      <Bottom />
    </div>
  );
};

export default Home;
