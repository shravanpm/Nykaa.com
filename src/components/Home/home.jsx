import React from "react";
import BrandDiscount from "../BrandDiscount/brandDiscount";
import Carousel from "../Carousel/carousel";
import { Footer } from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Navigation from "../Navigations/navigation";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Navigation />
      <Carousel />
      <BrandDiscount />
      <Footer/>
    </div>
  );
};

export default Home;
