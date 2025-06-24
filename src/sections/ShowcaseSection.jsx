import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import {
  FaGithub,
  FaFlask,
  FaStethoscope,
  FaComments,
  FaPaw,
  FaCodeBranch,
  FaLinkedin,
  FaExternalLinkAlt,
  FaArrowRight,
  FaCode,
  FaEye,
} from "react-icons/fa";

// Import Framer Motion

// Import actual project images
import project1 from "../../public/images/carApplication.png";
import project2 from "../../public/images/carApplication.png";
import project3 from "../../public/images/carApplication.png";
import project4 from "../../public/images/carApplication.png";
import project5 from "../../public/images/carApplication.png";

// Export the imported project images
export { project1, project2, project3, project4, project5 };

const projects = [
  {
    title: "Meditech-Laboratory System",
    icon: <FaFlask className="inline mr-2 text-blue-500" />,
    desc: "Scalable lab management platform with admin panel.",
    longDesc:
      "Meditech streamlines lab operations with multi-branch coordination, patient test tracking, online report downloads, and real-time lab updates. Designed to enhance efficiency and accuracy in diagnostic workflows.",
    tech: "Next.js, Tailwind CSS, MongoDB",
    image: project1,
    link: "",
    category: "Healthcare",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "MediQ",
    icon: <FaStethoscope className="inline mr-2 text-green-600" />,
    desc: "Full-stack doctor appointment booking with Stripe integration.",
    longDesc:
      "MediQ enables users to schedule medical appointments, securely pay online with Stripe, and receive timely notifications. The admin interface manages doctor schedules, patient records, and appointments effectively.",
    tech: "MERN Stack (MongoDB, Express.js, React, Node.js), Stripe, Tailwind CSS",
    image: project2,
    link: "",
    category: "Healthcare",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "WaveTalk",
    icon: <FaComments className="inline mr-2 text-purple-500" />,
    desc: "Real-time chat platform for inclusive communication.",
    longDesc:
      "WaveTalk supports barrier-free communication using real-time chat, Firebase backend, and hand sign recognition via a Python ML model. Ideal for inclusive, accessible communication across communities.",
    tech: "React, Firebase, Python",
    image: project3,
    link: "",
    category: "Communication",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Beast Buddy",
    icon: <FaPaw className="inline mr-2 text-red-500" />,
    desc: "Animal rescue and veterinary communication platform.",
    longDesc:
      "Beast Buddy connects rescuers, veterinarians, and volunteers to report animal distress, coordinate rescue efforts, and share health-related updates. Supports animal welfare NGOs with effective digital tools.",
    tech: "PHP, MySQL, HTML, CSS, JavaScript",
    image: project4,
    link: "",
    category: "Social Impact",
    gradient: "from-red-500 to-orange-600",
  },
  {
    title: "Studiora",
    icon: <FaStethoscope className="inline mr-2 text-green-600" />,
    desc: "Student Management System",
    longDesc:
      "A responsive system to manage student records with full CRUD operations and a clean Bootstrap-based UI.",
    tech: "PHP, Laravel, MySQL, Bootstrap",
    image: project5,
    link: "",
    category: "Education",
    gradient: "from-indigo-500 to-blue-600",
  },
];

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  return (
    // <section id="work" ref={sectionRef} className="app-showcase">
    //   <div className="w-full">
    //     <div className="showcaselayout">
    //       <div className="first-project-wrapper" ref={project1Ref}>
    //         <div className="image-wrapper">
    //           <img src="/images/carApplication.png" alt="Car" />
    //         </div>
    //         <div className="text-content">
    //           <h2>
    //             A web app to buy and sell cars with secure login, car listings,
    //             search filters, and AI chat support
    //           </h2>
    //           <p className="text-white-50 md:text-xl">
    //             Am app built with nextjs, ThailwindCss and Shadcn UI,Appwrite
    //             fro a fast,user-friendly experience.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="project-list-wrapper overflow-hidden">
    //         <div className="project" ref={project2Ref}>
    //           <div className="image-wrapper bg-[#ffefdb]">
    //             <img src="/images/whatsapp.png" alt="whatsapp" />
    //           </div>
    //           <h2>Whatsapp Chatbot AI Assistence</h2>
    //         </div>
    //         <div className="project" ref={project3Ref}>
    //           <div className="image-wrapper bg-[#ffe7eb]">
    //             <img src="/images/student.png" alt="whatsapp" />
    //           </div>
    //           <h2>Student Management System</h2>
    //         </div>
    //         <div className="project" ref={project4Ref}>
    //           <div className="image-wrapper bg-[#ffe7eb]">
    //             <img src="/images/tour.png" alt="tour" />
    //           </div>
    //           <h2>
    //             <a href="https://github.com/Chanuka999/Tours_and_Travels_Booking_Webiste.git">
    //               Tour and Travel Management System
    //             </a>
    //           </h2>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full mb-6">
            <FaCodeBranch className="text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of innovative solutions spanning healthcare,
            communication, and social impact technologies.
          </p>
        </div>

        {/* Enhanced Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              ref={project2Ref}
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container with Enhanced Hover */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-2xl`}
                >
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-6">
                  {/* Project Image with Overlay */}
                  <div className="relative overflow-hidden rounded-xl mb-6 group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div
                      className={`absolute top-3 left-3 px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold rounded-full shadow-lg`}
                    >
                      {project.category}
                    </div>

                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-3">
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <FaEye className="text-lg" />
                        </button>
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <FaCode className="text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    {/* Title with Icon */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.icon}
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Long Description - Expandable on Hover */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        hoveredIndex === index
                          ? "max-h-32 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed pt-2 border-t border-gray-200 dark:border-gray-700">
                        {project.longDesc}
                      </p>
                    </div>

                    {/* Tech Stack with Pills */}
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.split(", ").map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Button */}
                <div className="relative z-10 p-6 pt-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Button Background Animation */}
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>

                    <div className="relative flex items-center gap-2">
                      <FaGithub className="text-lg" />
                      <span>View Project</span>
                      <FaArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Explore More of My Work
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Discover additional projects, contributions, and professional
              experiences across various platforms.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* GitHub Button */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FaGithub className="text-xl mr-3" />
                <span>GitHub Profile</span>
                <FaExternalLinkAlt className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              {/* LinkedIn Button */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FaLinkedin className="text-xl mr-3" />
                <span>LinkedIn Projects</span>
                <FaExternalLinkAlt className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
