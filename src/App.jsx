import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import Education from "./components/Education";
import Cetificates from "./components/Cetificates";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <ShowcaseSection />
      <Cetificates />
      <LogoSection />

      <FeatureCards />
      <ExperienceSection />
    </>
  );
};

export default App;
