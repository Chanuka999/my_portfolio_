import React from "react";
import { motion } from "framer-motion";
import ThreeDMeshBackground from "./ThreeDMeshBackground";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 90, image: "/images/tech/react.png" },
        { name: "JavaScript", level: 85, image: "/images/tech/javascript.png" },
        { name: "HTML", level: 95, image: "/images/tech/html.png" },
        { name: "CSS", level: 90, image: "/images/tech/css.png" },
        { name: "Tailwind CSS", level: 88, image: "/images/tech/tailwind.png" },
        { name: "NEXTJS", level: 80, image: "/images/tech/next.jfif" },
      ],
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, image: "/images/tech/nodejs.png" },
        { name: "Express.js", level: 82, image: "/images/tech/express.png" },

        { name: "MongoDB", level: 80, image: "/images/tech/mongodb.png" },
        { name: "REST API", level: 85, image: "/images/tech/api.png" },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 90, image: "/images/tech/git.png" },
        { name: "Docker", level: 75, image: "/images/tech/docker.png" },
        { name: "AWS", level: 70, image: "/images/tech/aws.png" },
        { name: "Firebase", level: 80, image: "/images/tech/firebase.png" },
        { name: "Figma", level: 85, image: "/images/tech/figma.png" },
      ],
    },
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-3">
          {/* <span className="text-xl">{skill.icon}</span> */}
          <img
            src={skill.image}
            alt={skill.name}
            className="w-6 h-6 object-contain"
          />
          <span className="font-semibold text-gray-800 dark:text-white">
            {skill.name}
          </span>
        </div>
        <span className="text-gray-600 dark:text-gray-300 font-medium">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
        />
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* 3D Mesh Background */}
      <ThreeDMeshBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-2xl">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", image: "/images/tech/react.png" },
              { name: "Node.js", image: "/images/tech/nodejs.png" },
              { name: "MongoDB", image: "/images/tech/mongodb.png" },
              { name: "TypeScript", image: "/images/tech/typescript.png" },
              { name: "AWS", image: "/images/tech/aws.png" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-16 h-16 object-contain mb-3 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                />
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
