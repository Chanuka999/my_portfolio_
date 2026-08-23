import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaJava,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiMysql,
} from "react-icons/si";

import {
  FiArrowRight,
  FiHome,
  FiUser,
  FiGrid,
  FiLayers,
  FiMessageCircle,
  FiMail,
  FiCode,
} from "react-icons/fi";

// ======================================================
// TECHNOLOGIES
// ======================================================

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "#61dafb",
    className: "left-[6%] top-[12%]",
    delay: 0.3,
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#f89820",
    className: "left-[27%] top-[1%]",
    delay: 0.5,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#f7df1e",
    className: "right-[31%] top-[3%]",
    delay: 0.7,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68a063",
    className: "right-[6%] top-[22%]",
    delay: 0.9,
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "#dd0031",
    className: "left-[7%] bottom-[20%]",
    delay: 1.1,
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "#ff2d20",
    className: "left-[30%] bottom-[4%]",
    delay: 1.3,
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#ff9900",
    className: "right-[7%] bottom-[19%]",
    delay: 1.5,
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "#777bb4",
    className: "right-[27%] bottom-[4%]",
    delay: 1.7,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479a1",
    className: "left-[3%] top-[47%]",
    delay: 1.9,
  },
];

// ======================================================
// SOCIAL LINKS
// ======================================================

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/",
    label: "Instagram",
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com/",
    label: "Facebook",
  },
];

// ======================================================
// NAVIGATION
// ======================================================

const navigation = [
  {
    icon: FiHome,
    label: "Home",
  },
  {
    icon: FiUser,
    label: "About",
  },
  {
    icon: FiGrid,
    label: "Projects",
  },
  {
    icon: FiLayers,
    label: "Skills",
  },
  {
    icon: FiMessageCircle,
    label: "Experience",
  },
  {
    icon: FiMail,
    label: "Contact",
  },
];

// ======================================================
// TECH CARD
// ======================================================

const TechCard = ({ technology }) => {
  const Icon = technology.icon;

  return (
    <motion.div
      className={`absolute z-20 ${technology.className}`}
      initial={{
        opacity: 0,
        scale: 0.5,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: technology.delay,
        type: "spring",
        stiffness: 120,
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.12,
          rotateY: 10,
        }}
        className="
          group
          relative
          flex
          min-w-[90px]
          flex-col
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-[#11111c]/75
          px-4
          py-3
          shadow-[0_15px_40px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
        "
      >
        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
          style={{
            background: `radial-gradient(
              circle,
              ${technology.color}30,
              transparent 70%
            )`,
          }}
        />

        <Icon
          className="relative z-10 mb-2 text-3xl"
          style={{
            color: technology.color,
            filter: `drop-shadow(0 0 10px ${technology.color})`,
          }}
        />

        <span className="relative z-10 text-[10px] font-semibold text-white/75">
          {technology.name}
        </span>
      </motion.div>
    </motion.div>
  );
};

// ======================================================
// ANIMATED BACKGROUND
// ======================================================

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Blue Glow */}

      <motion.div
        animate={{
          x: ["-20%", "15%", "-20%"],
          y: ["-10%", "10%", "-10%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[5%]
          top-[25%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* Purple Glow */}

      <motion.div
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["0%", "15%", "0%"],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[10%]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-fuchsia-600/10
          blur-[130px]
        "
      />
    </div>
  );
};

// ======================================================
// NETWORK LINES
// ======================================================

const NetworkLines = () => {
  return (
    <svg
      className="
        pointer-events-none
        absolute
        inset-0
        z-[2]
        h-full
        w-full
        opacity-30
      "
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >
      <motion.path
        d="
          M0 130
          L240 70
          L400 160
          L610 80
          L820 180
          L1030 90
          L1240 150
          L1440 80
        "
        fill="none"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="1"
        strokeDasharray="5 8"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 3,
        }}
      />

      <motion.path
        d="
          M0 700
          L190 620
          L360 720
          L540 610
          L760 730
          L940 620
          L1180 700
          L1440 580
        "
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
        strokeDasharray="4 10"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 4,
          delay: 0.5,
        }}
      />

      <circle
        cx="240"
        cy="70"
        r="3"
        fill="#ffffff"
        opacity="0.5"
      />

      <circle
        cx="610"
        cy="80"
        r="3"
        fill="#22d3ee"
        opacity="0.7"
      />

      <circle
        cx="1030"
        cy="90"
        r="3"
        fill="#d946ef"
        opacity="0.7"
      />
    </svg>
  );
};

// ======================================================
// SOCIAL LINKS
// ======================================================

const SocialLinks = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.3,
      }}
      className="
        absolute
        right-6
        top-6
        z-50
        flex
        items-center
        gap-4
        md:right-16
      "
    >
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -4,
              scale: 1.15,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              text-sm
              text-white/70
              transition
              hover:text-white
            "
          >
            <Icon />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

// ======================================================
// MAIN COMPONENT
// ======================================================

const IntroScreen = ({ onEnter }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);

    window.setTimeout(() => {
      onEnter?.();
    }, 900);
  };

  return (
    <AnimatePresence mode="wait">

      {!isEntering && (
        <motion.main
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            relative
            h-[100dvh]
            min-h-0
            w-full
            overflow-hidden
            bg-[#0c055a]
            font-sans
            text-white
          "
        >

          {/* ================================================= */}
          {/* FULL PAGE EXPLOSION BACKGROUND                     */}
          {/* ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              overflow-hidden
            "
          >
            <img
              src="/images/bg-explosion.png"
              alt=""
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                opacity-70
              "
            />

            {/* Dark overlay */}

            <div
              className="
                absolute
                inset-0
                bg-[#080800]/40
              "
            />

            {/* Extra gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#07101d]/65
                via-transparent
                to-[#190718]/40
              "
            />
          </div>

          {/* ================================================= */}
          {/* ANIMATED BACKGROUND                                */}
          {/* ================================================= */}

          <AnimatedBackground />

          <NetworkLines />

          {/* ================================================= */}
          {/* LOGO                                                */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              absolute
              left-6
              top-6
              z-50
              md:left-16
              md:top-7
            "
          >
            <div className="flex items-center">

              <span
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  md:text-4xl
                "
              >
                Chanuka
              </span>

              <span
                className="
                  ml-1
                  text-3xl
                  font-light
                  tracking-tight
                  text-white/70
                  md:text-4xl
                "
              >
                randitha
              </span>

              <span
                className="
                  ml-1
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-red-500
                  shadow-[0_0_15px_rgba(239,68,68,0.9)]
                "
              />

            </div>
          </motion.div>

          {/* ================================================= */}
          {/* SOCIAL ICONS                                        */}
          {/* ================================================= */}

          <SocialLinks />

          {/* ================================================= */}
          {/* TECHNOLOGY CARDS                                    */}
          {/* ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              hidden
              lg:block
            "
          >
            {technologies.map((technology) => (
              <TechCard
                key={technology.name}
                technology={technology}
              />
            ))}
          </div>

          {/* ================================================= */}
          {/* MAIN CONTENT                                       */}
          {/* ================================================= */}

          <section
            className="
              relative
              z-30
              mx-auto
              flex
              h-full
              min-h-0
              items-center
              overflow-hidden
              px-6
              pt-28
              md:px-16
              lg:pt-10
            "
          >

            <div
              className="
                grid
                h-full
                min-h-0
                w-full
                grid-cols-1
                items-center
                gap-8
                lg:grid-cols-[0.95fr_1.05fr]
              "
            >

              {/* ================================================= */}
              {/* LEFT CONTENT                                       */}
              {/* ================================================= */}

              <div
                className="
                  relative
                  z-40
                  max-w-2xl
                "
              >

                {/* Small title */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  className="
                    mb-5
                    text-sm
                    font-medium
                    text-white/65
                    md:text-base
                  "
                >
                  Full Stack Developer

                  <span className="mx-2 text-white/30">
                    |
                  </span>

                  Building Digital Experiences
                </motion.div>

                {/* Main Heading */}

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 50,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    delay: 0.45,
                    duration: 1,
                  }}
                  className="
                    text-5xl
                    font-black
                    leading-[0.9]
                    tracking-[-0.05em]
                    sm:text-6xl
                    md:text-7xl
                    lg:text-[78px]
                    xl:text-[88px]
                  "
                >
                </motion.h1>

                {/* Gradient Line */}

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: 120,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.8,
                  }}
                  className="
                    mt-7
                    h-[3px]
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-fuchsia-500
                  "
                />

                {/* Description */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.8,
                  }}
                  className="
                    mt-7
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/70
                    sm:text-base
                    md:text-lg
                  "
                >
                  developed Crafting seamless web and mobile applications
                </motion.p>

                {/* CTA */}

                <motion.button
                  type="button"
                  onClick={handleEnter}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.25,
                    duration: 0.8,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    group
                    relative
                    mt-9
                    overflow-hidden
                    rounded-full
                    p-[1px]
                  "
                >

                  {/* Border */}

                  <span
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      via-blue-500
                      to-fuchsia-500
                    "
                  />

                  {/* Moving shine */}

                  <motion.span
                    animate={{
                      x: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      inset-y-0
                      w-12
                      rotate-12
                      bg-white/50
                      blur-lg
                    "
                  />

                  <span
                    className="
                      relative
                      flex
                      items-center
                      gap-4
                      rounded-full
                      bg-[#10101b]
                      px-8
                      py-4
                      text-sm
                      font-bold
                      md:px-10
                      md:text-base
                    "
                  >
                    Enter Portfolio

                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                      }}
                    >
                      <FiArrowRight className="text-lg" />
                    </motion.span>
                  </span>

                </motion.button>

                {/* Interactive text */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 2,
                  }}
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white/35
                  "
                >
                  <span className="h-px w-8 bg-white/20" />

                  Interactive Experience

                  <span className="h-px w-8 bg-white/20" />
                </motion.div>

              </div>

              {/* ================================================= */}
              {/* RIGHT PORTRAIT                                     */}
              {/* ================================================= */}

              <div
                className="
                  relative
                  flex
                  h-full
                  min-h-0
                  items-end
                  justify-center
                  overflow-visible
                  lg:min-h-0
                "
              >

                {/* Red glow */}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    right-[10%]
                    top-[20%]
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-red-600/25
                    blur-[100px]
                  "
                />

                {/* Orbit */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    right-[2%]
                    top-[12%]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    border
                    border-white/10
                    border-dashed
                    lg:h-[650px]
                    lg:w-[650px]
                  "
                >
                  <span
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-2
                      w-2
                      -translate-x-1/2
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_20px_#22d3ee]
                    "
                  />
                </motion.div>

                {/* ================================================= */}
                {/* PORTRAIT                                           */}
                {/* ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    x: 80,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 1.2,
                  }}
                  className="
                    relative
                    z-20
                    flex
                    h-[calc(100dvh-120px)]
                    max-h-[720px]
                    w-full
                    max-w-[560px]
                    items-end
                    justify-center
                    lg:h-[calc(100dvh-20px)]
                    lg:max-h-[720px]
                  "
                >

                  {/* Portrait glow */}

                  <div
                    className="
                      absolute
                      inset-x-[10%]
                      bottom-0
                      top-[12%]
                      rounded-[50%]
                      bg-gradient-to-t
                      from-red-600/30
                      via-red-500/10
                      to-transparent
                      blur-2xl
                    "
                  />

                  {/* YOUR PORTRAIT */}

                  <motion.img
                    src="/images/chanuka.png"
                    alt="Chanuka Randitha"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-full
                      w-full
                      -translate-x-1/2
                      object-contain
                      object-bottom
                      drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                    "
                  />

                  {/* Code Badge */}

                 <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      x: 80,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.5,
                      duration: 1.2,
                    }}
                    className="
                      relative
                      z-20
                      flex
                      h-[100dvh]
                      max-h-[100dvh]
                      w-full
                      max-w-[560px]
                      items-end
                      justify-center
                    "
                  >
                    <div className="flex items-center gap-2">
                      <FiCode />

                      <span>
                        build.digital()
                      </span>
                    </div>
                  </motion.div>

                </motion.div>

              </div>

            </div>

          </section>


          {/* ================================================= */}
          {/* BOTTOM LINE                                        */}
          {/* ================================================= */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              delay: 1.2,
              duration: 1,
            }}
            className="
              absolute
              bottom-0
              left-1/2
              z-40
              h-px
              w-3/4
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-cyan-400/60
              to-transparent
            "
          />

        </motion.main>
      )}

    </AnimatePresence>
  );
};

export default IntroScreen;