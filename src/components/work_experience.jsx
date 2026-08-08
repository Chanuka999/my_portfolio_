import { motion as Motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaMapMarkerAlt,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";
import ThreeDMeshBackground from "./ThreeDMeshBackground";

const calculateWorkDuration = (startDate) => {
  const start = new Date(`${startDate}T00:00:00`);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  let days = today.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;

    const previousMonthLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0,
    ).getDate();

    days += previousMonthLastDay;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const durationParts = [];

  if (years > 0) {
    durationParts.push(`${years} ${years === 1 ? "year" : "years"}`);
  }

  if (months > 0) {
    durationParts.push(`${months} ${months === 1 ? "month" : "months"}`);
  }

  if (days > 0 && years === 0) {
    durationParts.push(`${days} ${days === 1 ? "day" : "days"}`);
  }

  if (durationParts.length === 0) {
    return "Started today";
  }

  return durationParts.join(" ");
};

const experiences = [
  {
    company: "DI11SOFT",
    role: `Full Stack Developer Intern    (Software Engineering)`,
    employmentType: "Full-time Internship",
    startDate: "2026-05-08",
    period: "May 8, 2026 - Present",
    location: "Sri Lanka",
    isCurrent: true,
    description:
      "Contributing to production-level frontend and backend applications while collaborating with an experienced software development team.",
    responsibilities: [
      "Developing responsive and reusable user interfaces using Angular and Tailwind CSS.",
      "Integrating Angular frontend components with Laravel REST APIs.",
      "Developing and maintaining backend APIs using Laravel and MySQL.",
      "Implementing authentication, validation and role-based permission features.",
      "Testing backend endpoints and frontend API integrations using Postman.",
      "Using Git and GitHub for branching, commits, merging, rebasing and team collaboration.",
      "Debugging frontend, backend and API integration issues.",
    ],
    projects: [
      {
        name: "Distributor Management System",
        description:
          "Worked on inventory, GRN, billing, stock, product and load-unload management features.",
      },
      {
        name: "NIHS Medical Museum System",
        description:
          "Contributed to equipment, category, era, image and user-management functionality.",
      },
      {
        name: "Alaris to Zoho Automation System",
        description:
          "Worked on data automation, invoice processing, API integrations and application debugging.",
      },
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Postman",
      "Git",
      "GitHub",
    ],
  },
];

const technologyIcons = {
  Angular: <FaCode />,
  TypeScript: <FaCode />,
  "Tailwind CSS": <FaCode />,
  Laravel: <FaServer />,
  PHP: <FaServer />,
  MySQL: <FaDatabase />,
  "REST API": <FaProjectDiagram />,
  Postman: <FaServer />,
  Git: <FaGitAlt />,
  GitHub: <FaGitAlt />,
};

const WorkExperience = () => {
  return (
    <section id="experience" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 px-4 py-20 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950 md:px-8 lg:px-16">
      <ThreeDMeshBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-2xl text-white shadow-lg shadow-purple-500/20">
            <FaBriefcase />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">
            Professional Journey
          </p>

          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Work Experience
          </h2>

          <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
            Practical experience gained by developing real-world software
            applications and collaborating in a professional development
            environment.
          </p>
        </Motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:left-1/2 md:-translate-x-1/2"></div>

        {experiences.map((experience, experienceIndex) => {
  const isLeftSide = experienceIndex % 2 !== 0;

  return (
    <Motion.div key={`${experience.company}-${experience.role}`} initial={{ opacity: 0, x: isLeftSide ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: experienceIndex * 0.15 }} className="relative mb-16 pl-14 md:pl-0">
      <div className="absolute left-0 top-8 z-20 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-blue-600 to-purple-600 text-sm text-white shadow-lg dark:border-gray-950 md:left-1/2 md:-translate-x-1/2">
        <FaBriefcase />
      </div>

      <div className={`absolute top-12 hidden h-0.5 w-8 bg-gradient-to-r from-blue-500 to-purple-500 md:block ${isLeftSide ? "left-[calc(50%-2rem)]" : "left-1/2"}`}></div>

      <div className="grid md:grid-cols-2 md:gap-16">
        <div className={isLeftSide ? "md:col-start-1 md:row-start-1 md:pr-4" : "md:col-start-2 md:pl-4"}>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/90 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900/90">
            <div className="h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"></div>

            <div className="p-6 md:p-8">
              <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 text-2xl text-purple-600 dark:from-blue-950 dark:to-purple-950 dark:text-purple-400">
                    <FaBuilding />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-lg font-semibold text-purple-600 dark:text-purple-400">
                      {experience.company}
                    </p>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {experience.employmentType}
                    </p>
                  </div>
                </div>

                {experience.isCurrent && (
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 dark:border-green-800 dark:bg-green-950/50 dark:text-green-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                    Currently Working
                  </span>
                )}
              </div>

              <div className="mb-6 flex flex-wrap gap-3">
                <div className="flex flex-col gap-1 rounded-xl bg-gray-100 px-4 py-3 text-sm dark:bg-gray-800">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <FaCalendarAlt className="text-purple-600 dark:text-purple-400" />

                        <span className="font-medium">
                        {experience.period}
                        </span>
                    </div>

                    <span className="pl-6 text-xs font-semibold text-purple-600 dark:text-purple-400">
                        {calculateWorkDuration(experience.startDate)}
                    </span>
                    </div>

                <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                  <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400" />
                  <span>{experience.location}</span>
                </div>
              </div>

              <p className="mb-7 leading-relaxed text-gray-600 dark:text-gray-300">
                {experience.description}
              </p>

              <div className="mb-8">
                <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                  <FaBriefcase className="text-purple-600 dark:text-purple-400" />
                  Key Responsibilities
                </h4>

                <ul className="space-y-3">
                  {experience.responsibilities.map(
                    (responsibility, responsibilityIndex) => (
                      <Motion.li key={responsibility} initial={{ opacity: 0, x: isLeftSide ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: responsibilityIndex * 0.06 }} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></span>
                        <span>{responsibility}</span>
                      </Motion.li>
                    ),
                  )}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                  <FaProjectDiagram className="text-purple-600 dark:text-purple-400" />
                  Projects I Contributed To
                </h4>

                <div className="space-y-3">
                  {experience.projects.map((project, projectIndex) => (
                    <Motion.div key={project.name} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: projectIndex * 0.08 }} className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition-colors duration-300 hover:border-purple-300 hover:bg-purple-50/50 dark:border-gray-700 dark:bg-gray-800/70 dark:hover:border-purple-700 dark:hover:bg-purple-950/20">
                      <h5 className="mb-1 font-bold text-gray-800 dark:text-white">
                        {project.name}
                      </h5>

                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                    </Motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                  <FaCode className="text-purple-600 dark:text-purple-400" />
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map(
                    (technology, technologyIndex) => (
                      <Motion.span key={technology} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05, y: -2 }} viewport={{ once: true }} transition={{ delay: technologyIndex * 0.04 }} className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-2 text-xs font-semibold text-purple-700 dark:border-purple-800 dark:bg-purple-950/40 dark:text-purple-300">
                        {technologyIcons[technology] ?? <FaCode />}
                        {technology}
                      </Motion.span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
})}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;