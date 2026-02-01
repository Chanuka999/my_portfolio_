import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import { Helmet } from "react-helmet-async";
import Cetificates from "./components/Cetificates";
import Skills from "./components/Skills";
import Information from "./components/Information";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Chanuka Randitha | Full Stack Developer</title>
        <meta
          name="description"
          content="Chanuka Randitha is a Full Stack Developer and Software Engineer skilled in MERN stack, React, Node.js, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Chanuka Randitha, Full Stack Developer, Software Engineer, MERN Developer, React Developer, Sri Lanka"
        />
        <meta name="author" content="Chanuka Randitha" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navbar />
      <Hero />
      <Information />
      <Skills />
      <ShowcaseSection />

      <Cetificates />
      <LogoSection />

      <FeatureCards />
      <Contact />
    </>
  );
};

export default App;
