import React from "react";
import Hero from "../components/Hero";
import TopNiches from "../components/TopNiches";
import HowItWorks from "../components/HowItWorks";
import FeaturedJobs from "../components/FeaturedJobs";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <TopNiches />
      <HowItWorks />
    </>
  );
};

export default Home;
