import React, { useEffect, useState } from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Information = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText =
    "I’m a passionate Computer Science student with a strong interest in building real-world software solutions. I specialize in full-stack web development, writing clean, efficient, and scalable code. I enjoy turning ideas into interactive, user-friendly applications with a focus on modern design and seamless user experience. I’ve  contributed to projects across both frontend and backend   continuously improving my technical and problem-solving skills. I’ a fast learner, team player, and always eager to explore new technologies and grow as a developer.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <svg
              className="w-50 h-50 sm:w-50 sm:h-50 text-blue-600 dark:text-blue-400"
              viewBox="0 0 40 40"
            >
              <defs>
                <clipPath id="circleClip">
                  <circle cx="20" cy="20" r="20" />
                </clipPath>
              </defs>

              <image
                href="/images/my.jpg"
                x="0"
                y="0"
                width="40"
                height="40"
                clipPath="url(#circleClip)"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500  mb-3">
            SUMMARY OF I'M
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <div className="backdrop-blur-xl bg-black/30 rounded-3xl border border-gray-700/30 shadow-2xl p-8 md:p-12 mx-auto max-w-3xl">
            <div className="relative">
              <p className="text-yellow-600 text-xl md:text-2xl leading-relaxed font-medium text-left">
                {displayedText}
                <span
                  className={`inline-block w-0.5 h-6 bg-blue-400 ml-1 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-100`}
                ></span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2 z-10">
            <a
              href="https://github.com/Chanuka999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 text-white px-5 py-2.5 rounded hover:bg-gray-600 transition text-base"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/chanuka-randitha/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded hover:bg-blue-700 transition text-base"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>

            {/* <a
            href={cv}
            download
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-5 py-2.5 rounded hover:bg-gray-300 dark:hover:bg-gray-500 transition text-base"
          >
            <FaDownload className="text-lg" />
            Download CV
          </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
