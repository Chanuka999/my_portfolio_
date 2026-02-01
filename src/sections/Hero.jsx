import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden pt-16" // Added pt-16 for navbar spacing
    >
      {/* 3D Dot Animation Background */}
      <div className="absolute inset-0">
        {/* Animated dots */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 dark:bg-blue-600/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Background gradient elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200 dark:bg-pink-800 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center py-8">
        {" "}
        {/* Added py-8 for padding */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">
          {/* Profile Image - Now at top for mobile, right for desktop */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0" // order-1 for mobile, order-2 for desktop
          >
            <div className="relative">
              {/* Rotated background elements */}
              <motion.div
                animate={{ rotate: 12 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl"
              ></motion.div>

              <motion.div
                animate={{ rotate: -8 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl"
              ></motion.div>

              {/* Profile Picture Container */}
              <div className="absolute inset-3 md:inset-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-4 w-full h-full flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="w-32 h-36 md:w-44 md:h-48 lg:w-55 lg:h-66 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2 shadow-2xl"
                  >
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src="./images/my.jpg"
                        alt="chanuka Randitha"
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback if image doesn't load */}
                      <div className="hidden w-full h-full items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                          CR
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Now below image for mobile, left for desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1" // order-2 for mobile, order-1 for desktop
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-gray-800 dark:text-white"
            >
              <span className="block text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 text-gray-600 dark:text-gray-300">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                  Chanuka Randitha
                </span>
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "Software Engineer",
                    2000,
                    "Problem Solver",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg lg:text-xl mb-6 text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              Passionate developer creating digital experiences with modern
              technologies. Currently pursuing Computer Science in Eastern
              University Trincomalee Campus.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.a
                href="/files/Chanuka.pdf"
                download="Chanuka_randitha_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                📄 Download CV
              </motion.a>
              <motion.a
                href="https://github.com/Chanuka999"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold text-base hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                🚀 View Projects
              </motion.a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                { number: "10+", label: "Projects" },
                { number: "10+", label: "Tech Stack" },
                { number: "2+", label: "Years" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400"
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
