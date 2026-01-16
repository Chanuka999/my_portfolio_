import { useState } from "react";
import ThreeDMeshBackground from "../components/ThreeDMeshBackground";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaSearch,
  FaCertificate,
  FaGithub,
  FaCalendarAlt,
  FaAward,
  FaExternalLinkAlt,
  FaStar,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiPostman,
  SiCoursera,
  SiSololearn,
  SiGooglechrome,
} from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";

const cetificate1 = import.meta.env.BASE_URL + "images/python.jpg";
const cetificate2 = import.meta.env.BASE_URL + "images/webDesign.jpg";
const cetificate3 = import.meta.env.BASE_URL + "images/frontend.jpg";
const cetificate4 = import.meta.env.BASE_URL + "images/server.jpg";
const cetificate5 = import.meta.env.BASE_URL + "images/react.jpg";
const cetificate6 = import.meta.env.BASE_URL + "images/php.jpg";
const cetificate7 = import.meta.env.BASE_URL + "images/html.jpg";
const cetificate8 = import.meta.env.BASE_URL + "images/docker.jpg";

const certifications = [
  {
    title: "",
    issuer: "Python",
    issueDate: "Feb 2025",
    skills: ["Python"],
    icon: <FaPython className="text-orange-500" />,
    image: cetificate1,
    category: "python Development",
    gradient: "from-orange-400 to-red-500",
    recent: true,
  },
  {
    title: "Web Design for Begginers",
    issuer: "University of Moratuwa",
    issueDate: "Jul 2024",
    skills: [["HTML"], ["CSS"], ["JAVASCRIPT"]],
    icon: <FaPython className="text-yellow-400" />,
    image: cetificate2,
    category: "Programming",
    gradient: "from-yellow-400 to-blue-500",
    recent: true,
  },
  {
    title: "",
    issuer: "Coursera",
    issueDate: "May 2024",
    skills: ["Version Control"],
    icon: <SiCoursera className="text-blue-600" />,
    image: cetificate3,
    category: "Development Tools",
    gradient: "from-blue-500 to-purple-600",
    recent: true,
  },
  {
    title: "",
    issuer: "Coursera",
    issueDate: "Apr 2024",
    skills: ["JavaScript"],
    icon: <FaJsSquare className="text-yellow-500" />,
    image: cetificate4,
    category: "Programming",
    gradient: "from-yellow-500 to-orange-500",
    recent: true,
  },
  {
    title: "",
    issuer: "Coursera",
    issueDate: "Oct 2023",
    skills: ["Figma", "User Interface Design"],
    icon: <FaFigma className="text-pink-500" />,
    image: cetificate5,
    category: "Design",
    gradient: "from-pink-500 to-purple-600",
    recent: false,
  },
  {
    title: "",
    issuer: "Coursera",
    issueDate: "Oct 2023",
    skills: ["CSS", "HTML", "Responsive Web Design"],
    icon: <FaHtml5 className="text-orange-600" />,
    image: cetificate6,
    category: "Web Development",
    gradient: "from-orange-600 to-red-600",
    recent: false,
  },
  {
    title: "",
    issuer: "Sololearn",
    issueDate: "Oct 2023",
    skills: ["Java"],
    icon: <FaJava className="text-red-600" />,
    image: cetificate7,
    category: "Programming",
    gradient: "from-red-600 to-orange-600",
    recent: false,
  },
  {
    title: "",
    issuer: "docker",
    issueDate: "Dec 2025",
    skills: ["docker"],
    icon: <GiGraduateCap className="text-green-700" />,
    image: cetificate8,
    category: "programming",
    gradient: "from-green-600 to-teal-600",
    recent: false,
  },
  {
    title: "",
    issuer: "Google Digital Garage",
    issueDate: "Sep 2021",
    skills: ["Digital Marketing", "SEO", "SEM"],
    icon: <SiGooglechrome className="text-blue-500" />,

    category: "Marketing",
    gradient: "from-blue-500 to-cyan-500",
    recent: false,
  },
];

export default function LicensesCertifications() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(certifications.map((cert) => cert.category)),
  ];
  const filteredCertifications =
    filter === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === filter);

  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden"
      id="cetificates"
    >
      <ThreeDMeshBackground />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-green-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-2xl mb-6">
            <FaCertificate className="text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-6">
            Licenses & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development across various
            domains of technology, design, and digital innovation.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Certifications Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {filteredCertifications.map((cert, index) => (
            <div key={index} className="group relative">
              {/* Card Container with Enhanced Hover */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-2xl`}
                >
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl"></div>
                </div>

                {/* Recent Badge */}
                {cert.recent && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                      <FaStar className="text-xs" />
                      Recent
                    </div>
                  </div>
                )}

                {/* Content Container */}
                <div className="relative z-10 p-6">
                  {/* Header Section */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Icon or Thumbnail */}
                    <div
                      className={`flex-shrink-0 p-2 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-0 ${
                        cert.image
                          ? "bg-transparent"
                          : `bg-gradient-to-br ${cert.gradient}`
                      }`}
                    >
                      {cert.image ? (
                        <a
                          href={cert.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-16 h-16 overflow-hidden rounded-md"
                        >
                          <img
                            src={cert.image}
                            alt={`${cert.issuer} certificate`}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                        </a>
                      ) : (
                        <div className="text-3xl text-white">{cert.icon}</div>
                      )}
                    </div>

                    {/* Title and Issuer */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                    <FaAward className="text-xs text-indigo-500" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {cert.category}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400">
                    <FaCalendarAlt className="text-sm" />
                    <span className="text-sm">Issued {cert.issueDate}</span>
                  </div>

                  {/* Skills Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Skills Gained
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${cert.gradient} text-white text-xs font-semibold rounded-full shadow-sm transform transition-transform duration-200 hover:scale-105`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animated Bottom Border */}
                <div
                  className={`h-1 bg-gradient-to-r ${cert.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-200 dark:border-gray-600 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full mb-6">
                <FaSearch className="text-2xl text-indigo-600" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Explore My Complete Profile
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover all my certifications, professional achievements, and
                continuous learning journey across various platforms and
                institutions.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                {/* LinkedIn Button */}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Button Background Animation */}
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>

                  <div className="relative flex items-center gap-3">
                    <FaLinkedin className="text-2xl" />
                    <span className="text-lg">View All Certifications</span>
                    <FaExternalLinkAlt className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </a>

                {/* Secondary Action Button */}
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Button Background Animation */}
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>

                  <div className="relative flex items-center gap-3">
                    <FaCertificate className="text-xl" />
                    <span className="text-lg">Get In Touch</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
