import { Suspense,useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  FaAngular,
  FaAws,
  FaJava,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { FiArrowRight, FiCode, FiTerminal } from "react-icons/fi";
import ParticleNetwork from "./ParticleNetwork";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "#61dafb",
    position: "left-[5%] top-[20%]",
    mobilePosition: "left-[3%] top-[22%]",
    delay: 0,
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#f89820",
    position: "left-[22%] top-[8%]",
    mobilePosition: "left-[26%] top-[15%]",
    delay: 0.2,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#f7df1e",
    position: "left-[39%] top-[4%]",
    mobilePosition: "right-[4%] top-[17%]",
    delay: 0.4,
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#c084fc",
    position: "right-[30%] top-[8%]",
    mobilePosition: "hidden",
    delay: 0.6,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68a063",
    position: "right-[10%] top-[18%]",
    mobilePosition: "right-[4%] top-[32%]",
    delay: 0.8,
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "#dd0031",
    position: "left-[8%] bottom-[17%]",
    mobilePosition: "left-[4%] bottom-[25%]",
    delay: 1,
  },
  {
    name: "PHP",
    icon: FaPhp,
    color: "#777bb4",
    position: "left-[27%] bottom-[8%]",
    mobilePosition: "hidden",
    delay: 1.2,
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "#ff2d20",
    position: "right-[29%] bottom-[8%]",
    mobilePosition: "hidden",
    delay: 1.4,
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#ff9900",
    position: "right-[7%] bottom-[18%]",
    mobilePosition: "right-[4%] bottom-[25%]",
    delay: 1.6,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
    position: "left-[3%] top-[49%]",
    mobilePosition: "hidden",
    delay: 1.8,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479a1",
    position: "right-[2%] top-[48%]",
    mobilePosition: "hidden",
    delay: 2,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169e1",
    position: "right-[15%] bottom-[5%]",
    mobilePosition: "hidden",
    delay: 2.2,
  },
];

const codeSnippets = [
  {
    code: "const developer = true;",
    position: "left-[5%] top-[10%]",
  },
  {
    code: "<Build ideas />",
    position: "right-[6%] top-[9%]",
  },
  {
    code: "npm run create",
    position: "left-[8%] bottom-[8%]",
  },
  {
    code: "return <Experience />;",
    position: "right-[7%] bottom-[9%]",
  },
];

const NeonCore = () => {
  const sphereRef = useRef();
  const outerRingRef = useRef();
  const secondRingRef = useRef();

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.12;
      sphereRef.current.rotation.y += delta * 0.2;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.18;
      outerRingRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
    }

    if (secondRingRef.current) {
      secondRingRef.current.rotation.z -= delta * 0.13;
      secondRingRef.current.rotation.y =
        Math.cos(state.clock.elapsedTime * 0.35) * 0.35;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.7}>
      <mesh ref={sphereRef}>
        <icosahedronGeometry args={[1.35, 16]} />

        <MeshDistortMaterial
          color="#0b1e4d"
          emissive="#144ec4"
          emissiveIntensity={0.75}
          roughness={0.12}
          metalness={0.8}
          distort={0.32}
          speed={2.4}
          transparent
          opacity={0.72}
          wireframe
        />
      </mesh>

      <mesh ref={outerRingRef} rotation={[1.1, 0.2, 0.5]}>
        <torusGeometry args={[1.85, 0.025, 16, 180]} />

        <meshStandardMaterial
          color="#33ddff"
          emissive="#19bdf5"
          emissiveIntensity={4}
        />
      </mesh>

      <mesh ref={secondRingRef} rotation={[0.3, 1.2, -0.4]}>
        <torusGeometry args={[2.15, 0.018, 16, 180]} />

        <meshStandardMaterial
          color="#e94fff"
          emissive="#d93fff"
          emissiveIntensity={4}
        />
      </mesh>

      <mesh rotation={[1.3, 0.4, 0]}>
        <torusGeometry args={[2.5, 0.012, 16, 200]} />

        <meshStandardMaterial
          color="#7c5cff"
          emissive="#7c5cff"
          emissiveIntensity={3}
          transparent
          opacity={0.8}
        />
      </mesh>

      <Sparkles
        count={120}
        scale={5}
        size={2.5}
        speed={0.4}
        color="#5de7ff"
      />
    </Float>
  );
};

const CentralThreeScene = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0, 7],
        fov: 44,
      }}
    >
      <ambientLight intensity={1.2} />

      <pointLight
        position={[4, 4, 5]}
        intensity={35}
        color="#31dfff"
      />

      <pointLight
        position={[-4, -3, 4]}
        intensity={30}
        color="#e54cff"
      />

      <Suspense fallback={null}>
        <NeonCore />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
      />
    </Canvas>
  );
};

const TechCard = ({ technology }) => {
  const Icon = technology.icon;

  return (
    <Motion.div initial={{ opacity: 0, scale: 0.3, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: technology.delay, type: "spring", stiffness: 100 }} whileHover={{ scale: 1.15, rotateY: 12, rotateX: -8, zIndex: 50 }} className={`absolute ${technology.mobilePosition} md:${technology.position}`}>
      <Motion.div animate={{ y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }} transition={{ duration: 4 + technology.delay, repeat: Infinity, ease: "easeInOut" }} className="group relative flex min-w-24 cursor-pointer flex-col items-center justify-center rounded-2xl border border-cyan-300/20 bg-[#07152d]/75 px-4 py-3 shadow-[0_0_30px_rgba(38,196,255,0.12)] backdrop-blur-xl md:min-w-28">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-fuchsia-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

        <Icon
          className="relative z-10 mb-2 text-3xl drop-shadow-[0_0_12px_currentColor] md:text-4xl"
          style={{
            color: technology.color,
          }}
        />

        <span className="relative z-10 text-[10px] font-semibold tracking-wide text-cyan-50 md:text-xs">
          {technology.name}
        </span>

        <div
          className="absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2"
          style={{
            background: `linear-gradient(90deg, transparent, ${technology.color}, transparent)`,
          }}
        ></div>
      </Motion.div>
    </Motion.div>
  );
};



const IntroScreen = ({ onEnter }) => {
 const [isEntering, setIsEntering] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);

    window.setTimeout(() => {
      onEnter();
    }, 1100);
  };

  useEffect(() => {
  let animationFrameId;
  const loadingDuration = 4000;
  const startTime = performance.now();

  const updateLoadingProgress = (currentTime) => {
    const elapsedTime = currentTime - startTime;

    const progress = Math.min(
      Math.floor((elapsedTime / loadingDuration) * 100),
      100,
    );

    setLoadingProgress(progress);

    if (progress < 100) {
      animationFrameId = requestAnimationFrame(updateLoadingProgress);
    } else {
      window.setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }
  };

  animationFrameId = requestAnimationFrame(updateLoadingProgress);

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
}, []);

  return (
    <AnimatePresence>
      {!isEntering && (
        <Motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.08, filter: "blur(16px)" }} transition={{ duration: 1 }} className="fixed inset-0 z-[9999] overflow-hidden bg-[#020817] text-white">
          <ParticleNetwork />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(19,87,156,0.38),transparent_42%)]"></div>

          <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(63,204,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(63,204,255,0.35)_1px,transparent_1px)] [background-size:60px_60px]"></div>

          <Motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="pointer-events-none absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-cyan-300/5 to-transparent blur-2xl"></Motion.div>

          {codeSnippets.map((snippet, index) => (
            <Motion.div key={snippet.code} initial={{ opacity: 0 }} animate={{ opacity: [0.08, 0.3, 0.08] }} transition={{ duration: 4, delay: index * 0.7, repeat: Infinity }} className={`absolute hidden font-mono text-xs text-cyan-300/50 lg:block ${snippet.position}`}>
              <FiTerminal className="mb-2" />
              {snippet.code}
            </Motion.div>
          ))}

          <div className="absolute inset-0 hidden md:block">
            {technologies.map((technology) => (
              <TechCard key={technology.name} technology={technology} />
            ))}
          </div>

          <div className="absolute inset-0 md:hidden">
            {technologies.slice(0, 6).map((technology) => (
              <TechCard key={technology.name} technology={technology} />
            ))}
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-[55%] md:h-[620px] md:w-[620px]">
            <CentralThreeScene />
          </div>

          <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
            <Motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.9 }} className="mb-4 flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-md md:text-xs">
              <FiCode />
              Creative Developer
            </Motion.div>

            <Motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9 }} className="max-w-5xl bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 bg-clip-text text-5xl font-extrabold leading-none tracking-[-0.06em] text-transparent drop-shadow-[0_0_30px_rgba(74,213,255,0.4)] sm:text-6xl md:text-8xl">
              Chanuka Randitha
            </Motion.h1>

            <Motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="mt-5 max-w-xl text-sm font-medium tracking-wide text-slate-300 sm:text-base md:text-lg">
              Full Stack Developer
              <span className="mx-3 text-cyan-400">|</span>
              Building Digital Experiences
            </Motion.p>

          <AnimatePresence mode="wait">
  {!isLoaded ? (
    <Motion.div key="portfolio-loader" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }} transition={{ duration: 0.5 }} className="mt-12 w-full max-w-xs sm:max-w-sm">
      <div className="mb-3 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em]">
        <span className="flex items-center gap-2 text-cyan-300">
          <Motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"></Motion.span>
          Initializing
        </span>

        <span className="font-bold text-fuchsia-300">
          {loadingProgress}%
        </span>
      </div>

      <div className="relative h-3 overflow-hidden rounded-full border border-cyan-300/30 bg-[#061225]/80 p-0.5 shadow-[0_0_25px_rgba(34,211,238,0.16)] backdrop-blur-md">
        <Motion.div initial={{ width: 0 }} animate={{ width: `${loadingProgress}%` }} transition={{ duration: 0.15, ease: "linear" }} className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_18px_rgba(34,211,238,0.65)]">
          <Motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm"></Motion.div>
        </Motion.div>
      </div>

      <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
        <span>Loading assets</span>

        <span>
          {loadingProgress < 35
            ? "Loading scene"
            : loadingProgress < 70
              ? "Loading technologies"
              : loadingProgress < 100
                ? "Finalizing experience"
                : "Ready"}
        </span>
      </div>
    </Motion.div>
  ) : (
    <Motion.button key="enter-portfolio-button" type="button" onClick={handleEnter} initial={{ opacity: 0, y: 25, scale: 0.85 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 1.2 }} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.6, type: "spring", stiffness: 140 }} className="group relative mt-12 overflow-hidden rounded-full border border-cyan-300/40 bg-gradient-to-r from-cyan-500/90 via-blue-600/90 to-fuchsia-600/90 p-px shadow-[0_0_35px_rgba(35,211,255,0.38)]">
      <Motion.span animate={{ opacity: [0.25, 0.7, 0.25] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30 blur-xl"></Motion.span>

      <span className="relative flex items-center gap-3 rounded-full bg-[#071327]/90 px-8 py-4 text-sm font-bold tracking-wide backdrop-blur-lg sm:px-10 sm:text-base">
        Enter Portfolio

        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
      </span>

      <Motion.span animate={{ x: ["-150%", "250%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} className="absolute inset-y-0 w-16 rotate-12 bg-white/30 blur-lg"></Motion.span>
    </Motion.button>
  )}
</AnimatePresence>

           <AnimatePresence>
  {isLoaded && (
    <Motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-slate-500">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-500"></span>
      Interactive Experience
      <span className="h-px w-10 bg-gradient-to-r from-cyan-500 to-transparent"></span>
    </Motion.div>
  )}
</AnimatePresence>
          </div>

          <Motion.div animate={{ opacity: [0.25, 0.7, 0.25] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></Motion.div>
        </Motion.section>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;