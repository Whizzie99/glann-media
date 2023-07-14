import React from "react";
import Hero from "../../components/Hero/Hero";
import CustomMarquee from "../../components/shared/CustomMarquee/CustomMarquee";
import About from "../../components/About/About";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CustomMarquee />
      <About />
    </>
  );
};

export default Home;
