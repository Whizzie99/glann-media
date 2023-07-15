import React from "react";
import Hero from "../../components/Hero/Hero";
import CustomMarquee from "../../components/shared/CustomMarquee/CustomMarquee";
import About from "../../components/About/About";
import OurServices from "../../components/OurServices/OurServices";
import OurApproach from "../../components/OurApproach/OurApproach";
import Team from "../../components/Team/Team";
import OurClients from "../../components/OurClients/OurClients";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CustomMarquee />
      <About />
      <OurServices />
      <OurApproach />
      <Team />
      <OurClients />
    </>
  );
};

export default Home;
