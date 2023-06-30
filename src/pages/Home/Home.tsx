import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import OurServices from "../../components/OurServices/OurServices";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <OurServices />
    </>
  );
};

export default Home;
