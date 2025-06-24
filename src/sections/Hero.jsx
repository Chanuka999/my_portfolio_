import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden ">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* hero left side */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h2>
                HI I'M{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h2>
              <h2>CHANUKA</h2>
              <h2> RANDITHA</h2>
              <h3>full stack developer </h3>
            </div>

            <h2 className="text-green-500 text-2xl md:text-5xl font-bold relative z-10 pointer-events-none p-2">
              WHO AM I
            </h2>
            <p className="text-yellow-600  font-serif">
              I’m a passionate Computer Science student with a strong interest
              <br />
              in building real-world software solutions. I specialize in
              full-stack web development, <br />
              writing clean, efficient, and scalable code. I enjoy turning ideas
              into interactive, user-friendly applications
              <br /> with a focus on modern design and seamless user experience.
              I’ve contributed to projects across both frontend and backend,
              continuously improving my technical and problem-solving skills.
              I’m a fast learner, team player, and always eager to explore new
              technologies and grow as a developer.
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="see my Work"
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
