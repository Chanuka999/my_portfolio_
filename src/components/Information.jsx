import React from "react";
import { motion } from "framer-motion";
import ThreeDMeshBackground from "./ThreeDMeshBackground";

const About = () => {
  const education = [
    {
      degree: "G.C.E Advanced Level - Physical Science Stream",
      institution: "",
      period: "2018 - 2020",
      description: "Achieved 3C",
    },
    {
      degree: "G.C.E Ordinary Level",
      institution: "",
      period: "2017",
      description: "Achieved 7A's and 2C",
    },
    {
      degree: "BSc Computer Science",
      institution: "Trincomalee Campus Eastern University of Sri Lanka",
      period: "2022 - Present",
      description:
        "Specializing in  Computer Science, Software Engineering and Web Technologies",
    },
  ];

  const interests = [
    "Full Stack Development",
    "UI/UX Design",
    "Open Source Contribution",
  ];

  return (
    <section
      id="about"
      className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* 3D Mesh Background */}
      <ThreeDMeshBackground />

      {/* Content Container with proper z-index */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate Computer Science undergraduate with strong foundation
              in full-stack development and emerging technologies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                My Journey
              </h3>

              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  I'm currently pursuing my undergraduate degree in Computer
                  Science Trincomalee campus Eastern University of Sri Lanka.
                </p>
                <p className="leading-relaxed">
                  With a strong foundation in physical sciences and computing,
                  I've developed expertise in web development.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    🎓
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm">
                    Education
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    BSc Computer Science
                  </p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                    💼
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm">
                    Focus
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Full Stack Dev
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                  Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-6 pb-4 last:pb-0"
                  >
                    {/* Timeline line */}
                    {index !== education.length - 1 && (
                      <div className="absolute left-3 top-6 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    )}

                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      {edu.institution && (
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                          {edu.institution}
                        </p>
                      )}
                      <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium mb-2">
                        {edu.period}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
