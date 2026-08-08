import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import ThreeDMeshBackground from "./ThreeDMeshBackground";
import { getGitHubLanguageStats } from "../services/githubLanguageService";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: "🎨",
    useGitHubStats: true,
    skills: [
      { name: "JavaScript", githubLanguage: "JavaScript", image: "/images/tech/javascript.png" },
      { name: "TypeScript", githubLanguage: "TypeScript", image: "/images/tech/typescript.webp" },
      { name: "HTML", githubLanguage: "HTML", image: "/images/tech/html.webp" },
      { name: "CSS", githubLanguage: "CSS", image: "/images/tech/css.png" },
    ],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    useGitHubStats: true,
    skills: [
      { name: "JavaScript / Node.js", githubLanguage: "JavaScript", image: "/images/tech/nodejs.png" },
      { name: "PHP / Laravel", githubLanguage: "PHP", image: "/images/php.jpg" },
      { name: "Python", githubLanguage: "Python", image: "/images/tech/python.png" },
      { name: "Java", githubLanguage: "Java", image: "/images/tech/java.png" },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: "🛠️",
    useGitHubStats: false,
    skills: [
      { name: "Git/GitHub", level: 90, image: "/images/tech/git.webp" },
      { name: "Docker", level: 75, image: "/images/docker.jpg" },
      { name: "AWS", level: 70, image: "/images/tech/aws.png" },
      { name: "Firebase", level: 80, image: "/images/tech/firebase.png" },
      { name: "Figma", level: 85, image: "/images/tech/figma.png" },
      { name: "Postman", level: 85, image: "/images/tech/api.webp" },
    ],
  },
];

const techStack = [
  { name: "React", image: "/images/tech/react.webp" },
  { name: "Angular", image: "/images/logos/company-logo-2.png" },
  { name: "Next.js", image: "/images/tech/next.jfif" },
  { name: "Node.js", image: "/images/tech/nodejs.png" },
  { name: "Express.js", image: "/images/tech/express.webp" },
  { name: "Laravel", image: "/images/php.jpg" },
  { name: "MongoDB", image: "/images/tech/mongodb.webp" },
  { name: "MySQL", image: "/images/tech/mysql.png" },
  { name: "Firebase", image: "/images/tech/firebase.png" },
  { name: "AWS", image: "/images/tech/aws.png" },
  { name: "GitHub", image: "/images/tech/github.png" },
  { name: "Figma", image: "/images/tech/figma.png" },
];

const frameworks = [
  { name: "React", image: "/images/tech/react.webp" },
  { name: "Angular", image: "/images/logos/company-logo-2.png" },
  { name: "Node.js", image: "/images/tech/nodejs.png" },
  { name: "Express", image: "/images/tech/express.webp" },
  { name: "MongoDB", image: "/images/tech/mongodb.webp" },
  { name: "MySQL", image: "/images/tech/mysql.png" },
  { name: "Firebase", image: "/images/tech/firebase.png" },
  { name: "AWS", image: "/images/tech/aws.png" },
  { name: "Figma", image: "/images/tech/figma.png" },
];

const SkillBar = ({ skill, percentage, index, isLoading }) => {
  const displayPercentage = percentage ?? 0;

  return (
    <Motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="mb-5">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={skill.image} alt={skill.name} className="h-8 w-8 rounded-md bg-white object-contain p-1" />
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {skill.name}
          </span>
        </div>

        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
          {isLoading ? "Loading..." : `${displayPercentage}%`}
        </span>
      </div>

      <div className="h-2.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <Motion.div initial={{ width: 0 }} whileInView={{ width: `${displayPercentage}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.08 }} className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
      </div>
    </Motion.div>
  );
};

const Skills = () => {
  const [languageStats, setLanguageStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [githubError, setGithubError] = useState("");

  useEffect(() => {
    const loadLanguageStats = async () => {
      try {
        const stats = await getGitHubLanguageStats();
        setLanguageStats(stats);
      } catch (error) {
        console.error(error);
        setGithubError("GitHub language data is temporarily unavailable.");
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguageStats();
  }, []);

  return (
    <section id="skills" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 px-4 py-20 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
      <ThreeDMeshBackground />

      <div className="container relative z-10 mx-auto">
        <Motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">
            GitHub Insights
          </p>

          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
            Skills & Technologies
          </h2>

          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            Language percentages are calculated from the code in my public
            GitHub repositories.
          </p>

          <a href="https://github.com/Chanuka999" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-purple-600 hover:underline">
            View GitHub profile
          </a>
        </Motion.div>

        {githubError && (
          <div className="mx-auto mb-8 max-w-xl rounded-xl border border-orange-200 bg-orange-50 p-4 text-center text-sm text-orange-700 dark:border-orange-900 dark:bg-orange-950/30 dark:text-orange-300">
            {githubError}
          </div>
        )}

       <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {skillCategories.map((category, categoryIndex) => (
    <Motion.div key={category.category} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: categoryIndex * 0.15 }} className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
      <div className="mb-7 flex items-center gap-3">
        <span className="text-2xl">{category.icon}</span>

        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {category.category}
        </h3>
      </div>

      <div>
        {category.skills.map((skill, index) => {
          const percentage = category.useGitHubStats
            ? languageStats[skill.githubLanguage] ?? 0
            : skill.level;

          return (
            <SkillBar
              key={skill.name}
              skill={skill}
              percentage={percentage}
              index={index}
              isLoading={category.useGitHubStats && isLoading}
            />
          );
        })}
      </div>
    </Motion.div>
  ))}
</div>

<Motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">
    Technologies I Work With
  </p>

  <h3 className="mb-3 text-3xl font-bold text-gray-800 dark:text-white">
    Tech Stack
  </h3>

  <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-gray-500 dark:text-gray-400">
    Frameworks, databases, cloud services and development tools I use to build
    full-stack applications.
  </p>

  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
    {techStack.map((tech, index) => (
      <Motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} whileHover={{ scale: 1.08, y: -6 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="group flex min-h-40 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-shadow duration-300 hover:border-purple-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 dark:hover:border-purple-600">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 p-3 transition-transform duration-300 group-hover:rotate-3 dark:bg-gray-800">
          <img src={tech.image} alt={`${tech.name} logo`} className="h-full w-full object-contain" />
        </div>

        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {tech.name}
        </span>
      </Motion.div>
    ))}
  </div>
</Motion.div>
</div>
    </section>
  );
};

export default Skills;