import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
const HomePage = () => {
  return (
    <div className="home">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </div>
  );
};

export default HomePage;
