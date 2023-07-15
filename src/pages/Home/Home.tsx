import React from "react";
import Hero from "../../components/Hero/Hero";
import CustomMarquee from "../../components/shared/CustomMarquee/CustomMarquee";
import About from "../../components/About/About";
import OurServices from "../../components/OurServices/OurServices";
import OurApproach from "../../components/OurApproach/OurApproach";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CustomMarquee />
      <About />
      <OurServices />
      <OurApproach />
    </>
  );
};

export default Home;
