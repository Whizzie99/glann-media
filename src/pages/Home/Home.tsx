import React from "react";
import Hero from "../../components/Hero/Hero";
import CustomMarquee from "../../components/shared/CustomMarquee/CustomMarquee";

const Home: React.FC = () => {
  return (
    <>
      <Hero/>
      <CustomMarquee/>
    </>
  );
}

export default Home;