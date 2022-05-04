import React from "react";
import BrandDiscount from "../BrandDiscount/brandDiscount";
import Carousel from "../Carousel/carousel";
import Navbar from "../Navbar/navbar";
import Navigation from "../Navigations/navigation";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Navigation />
      <Carousel />
      <BrandDiscount />
    </div>
  );
};

export default Home;
