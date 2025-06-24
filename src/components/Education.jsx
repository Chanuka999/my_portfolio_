import { useState } from "react";

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "B.Sc in Computer Science",
      institution: "Eastern univercity Trincomalee Campus of Sri Lanka",
      duration: "2023 – Present",
      level: "undergraduate",
      status: "ongoing",
    },
    {
      degree: "G.C.E. Advanced Level and G.C.E. Ordinary Level",
      institution: "Laxapana Central College",
      duration: "2007 – 2020",
      level: "secondary",
      status: "completed",
    },
  ];

  const getIcon = (level) => {
    if (level === "undergraduate") {
      return (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      );
    }
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br  from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Education
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Education Items */}
        <div className="space-y-6 sm:space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-400/10 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                <div className="relative p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          item.level === "undergraduate"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                            : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                        } ${hoveredIndex === index ? "scale-110" : ""}`}
                      >
                        {getIcon(item.level)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-2">
                          {item.status === "ongoing" && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                              Ongoing
                            </span>
                          )}
                          <span className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">
                            {item.duration}
                          </span>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`h-1 w-full transition-all duration-300 ${
                    item.level === "undergraduate"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                      : "bg-gradient-to-r from-emerald-500 to-teal-500"
                  } ${hoveredIndex === index ? "opacity-100" : "opacity-50"}`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
            <span className="font-medium">Academic Journey</span>
            <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
