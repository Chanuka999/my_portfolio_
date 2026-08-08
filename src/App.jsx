import { useState } from "react";
import { Helmet } from "react-helmet-async";

import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Information from "./components/Information";
import Cetificates from "./components/Cetificates";
import WorkExperience from "./components/work_experience";

import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import Contact from "./sections/Contact";

const App = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnterPortfolio = () => {
    setHasEntered(true);
  };

  return (
    <>
      <Helmet>
        <title>Chanuka Randitha | Full Stack Developer</title>

        <meta
          name="description"
          content="Chanuka Randitha is a Full Stack Developer and Software Engineer skilled in Angular, React, Laravel, Node.js and modern web technologies."
        />

        <meta
          name="keywords"
          content="Chanuka Randitha, Full Stack Developer, Software Engineer, Angular Developer, React Developer, Laravel Developer, Sri Lanka"
        />

        <meta name="author" content="Chanuka Randitha" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Chanuka Randitha | Full Stack Developer"
        />

        <meta
          property="og:description"
          content="Portfolio of Chanuka Randitha, showcasing full-stack projects, professional experience and technical skills."
        />

        <meta
          property="og:image"
          content="https://my-portfolio-jc4a.vercel.app/og-image.jpg"
        />

        <meta
          property="og:url"
          content="https://my-portfolio-jc4a.vercel.app/"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      {!hasEntered ? (
        <IntroScreen onEnter={handleEnterPortfolio} />
      ) : (
        <>
          <Navbar />

          <main>
            <Hero />
            <Information />
            <Skills />
            <WorkExperience />
            <ShowcaseSection />
            <Cetificates />
            <LogoSection />
            <FeatureCards />
            <Contact />
          </main>
        </>
      )}
    </>
  );
};

export default App;