import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const techSkills = [
    {
      name: "JavaScript",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      category: "language",
    },
    {
      name: "Python",
      color: "text-blue-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      category: "language",
    },
    {
      name: "Java",
      color: "text-red-500",
      bgColor: "bg-gray-50 dark:bg-gray-700",
      category: "language",
    },
    {
      name: "C++",
      color: "text-gray-600 dark:text-gray-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      category: "language",
    },
    {
      name: "React.js",
      color: "text-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      category: "frontend",
    },
    {
      name: "Next.js",
      color: "text-gray-800 dark:text-white",
      bgColor: "bg-gray-100 dark:bg-gray-700",
      category: "frontend",
    },
    {
      name: "HTML5",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      category: "frontend",
    },
    {
      name: "CSS3",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      category: "frontend",
    },
    {
      name: "THREE.JS",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      category: "frontend",
    },
    {
      name: "Bootstrap",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      category: "frontend",
    },
    {
      name: "Node.js",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      category: "backend",
    },

    {
      name: "PHP",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      category: "backend",
    },
    {
      name: "MongoDB",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      category: "database",
    },
    {
      name: "Firebase Firestore",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      category: "database",
    },
    {
      name: "APPWRITE",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      category: "database",
    },
    {
      name: "Postman",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      category: "tools",
    },
    {
      name: "Git & GitHub",
      color: "text-gray-800 dark:text-gray-300",
      bgColor: "bg-gray-50 dark:bg-gray-700",
      category: "tools",
    },
    {
      name: "VS Code",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      category: "tools",
    },
  ];

  const getSkillIcon = () => {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    );
  };

  const getCategoryTitle = (category) => {
    const categoryMap = {
      language: "Programming Languages",
      frontend: "Frontend Technologies",
      backend: "Backend Technologies",
      database: "Database",
      tools: "Development Tools",
    };
    return categoryMap[category] || "Other";
  };

  const groupedSkills = techSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryOrder = [
    "language",
    "frontend",
    "backend",
    "database",
    "tools",
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Technical Skills
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-8 sm:space-y-10">
          {categoryOrder.map((category) => {
            const categorySkills = groupedSkills[category];
            if (!categorySkills) return null;

            return (
              <div
                key={category}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">
                    {getCategoryTitle(category)}
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={`${category}-${index}`}
                      className="group relative"
                      onMouseEnter={() =>
                        setHoveredSkill(`${category}-${index}`)
                      }
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div
                        className={`
                        relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-600 
                        bg-white dark:bg-gray-800 px-4 py-3 sm:px-6 sm:py-4 cursor-pointer
                        transition-all duration-300 ease-out min-w-[120px] sm:min-w-[140px]
                        hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1
                        ${
                          hoveredSkill === `${category}-${index}`
                            ? "scale-105 shadow-lg"
                            : "shadow-md"
                        }
                      `}
                      >
                        {/* Background gradient on hover */}
                        <div
                          className={`
                          absolute inset-0 ${
                            skill.bgColor
                          } opacity-0 transition-opacity duration-300
                          ${
                            hoveredSkill === `${category}-${index}`
                              ? "opacity-100"
                              : ""
                          }
                        `}
                        ></div>

                        <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                          {/* Icon */}
                          <div
                            className={`
                            ${
                              skill.color
                            } transition-all duration-300 flex-shrink-0
                            ${
                              hoveredSkill === `${category}-${index}`
                                ? "scale-110"
                                : ""
                            }
                          `}
                          >
                            {getSkillIcon(skill.name)}
                          </div>

                          {/* Skill name */}
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white text-center leading-tight">
                            {skill.name}
                          </h4>
                        </div>

                        {/* Hover accent line */}
                        <div
                          className={`
                          absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500
                          transform transition-all duration-300 origin-center
                          ${
                            hoveredSkill === `${category}-${index}`
                              ? "scale-x-100"
                              : "scale-x-0"
                          }
                        `}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium">
                {techSkills.length} Technologies
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="font-medium">
                {Object.keys(groupedSkills).length} Categories
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
