import React from "react";
import Hero from "../components/Hero";
import TopNiches from "../components/TopNiches";
import HowItWorks from "../components/HowItWorks";
import JobCategories from "../components/JobCategories";

const Home = () => {
  return (
    <>
      <Hero />
      <TopNiches />
      <JobCategories />
      <HowItWorks />
    </>
  );
};

export default Home;
