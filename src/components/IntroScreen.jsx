import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import "./IntroScreen.css";

// SVG Tech Icons
const AngularIcon = () => (
  <svg viewBox="0 0 256 272" width="28" height="28">
    <path fill="#DD0031" d="M128 0L0 45.6l19.5 169.5L128 272l108.5-56.9L256 45.6z" />
    <path fill="#C3002F" d="M128 0v272l108.5-56.9L256 45.6z" />
    <path fill="#FFFFFF" d="M128 35.5L59.8 188.7h29.9l13.7-34.3h49.2l13.7 34.3h29.9zM128 78l17.7 44.3h-35.4z" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="28" height="28">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const LaravelIcon = () => (
  <svg viewBox="0 0 50 50" width="28" height="28">
    <path fill="#FF2D20" d="M38.8 14.8L26.5 7.7c-.9-.5-2.1-.5-3 0L11.2 14.8c-.9.5-1.5 1.5-1.5 2.6v14.3c0 1 .6 2 1.5 2.6l12.3 7.1c.5.3 1 .4 1.5.4s1-.1 1.5-.4l12.3-7.1c.9-.5 1.5-1.5 1.5-2.6V17.4c0-1.1-.6-2.1-1.5-2.6zM25 11.2l9.8 5.6-4.1 2.4-9.8-5.6 4.1-2.4zm-11.8 6.8l9.8-5.6v4.7l-9.8 5.6v-4.7zm0 9.4l9.8 5.6v4.7l-9.8-5.6v-4.7zm23.6 0l-9.8 5.6v-4.7l9.8-5.6v4.7zm0-9.4l-4.1 2.4-5.7-3.3 4.1-2.4 5.7 3.3z" />
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 128 128" width="28" height="28">
    <path fill="#00758F" d="M63.5 12C35.1 12 12 35.1 12 63.5S35.1 115 63.5 115 115 91.9 115 63.5 91.9 12 63.5 12zm23.4 75.6c-4.4 2.8-10.8 4.2-18.7 4.2-10.9 0-19.1-3.2-24.6-9.6-5.5-6.4-8.3-15.5-8.3-27.3 0-11.8 2.9-20.9 8.6-27.2 5.7-6.3 14-9.4 24.8-9.4 7.6 0 13.7 1.3 18.2 4l-4.2 10.6c-3.6-2.1-8.5-3.1-14.6-3.1-7.2 0-12.7 2.1-16.3 6.3-3.6 4.2-5.4 10.5-5.4 18.8 0 8.3 1.8 14.6 5.4 18.8 3.6 4.2 9.1 6.3 16.5 6.3 6.2 0 11.4-1.2 15.6-3.6l3 11.2z" />
    <path fill="#F29111" d="M84.2 56.7c0 3.2-2.6 5.8-5.8 5.8s-5.8-2.6-5.8-5.8 2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8z" />
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 128 128" width="28" height="28">
    <rect width="128" height="128" rx="20" fill="#F7DF1E" />
    <path fill="#000000" d="M67.312 103.939c4.271 2.396 9.427 4.115 15.052 4.115 8.75 0 13.906-4.271 13.906-11.25 0-6.875-4.271-9.948-11.771-13.229l-4.115-1.823c-11.042-4.792-16.354-10.469-16.354-20.938 0-12.552 9.948-21.719 26.615-21.719 7.083 0 12.396 1.458 16.354 3.542l-4.271 10.833c-3.125-1.615-7.552-2.76-12.083-2.76-7.865 0-12.188 3.854-12.188 9.323 0 6.042 3.854 8.75 11.25 11.979l4.115 1.823c12.24 5.312 17.031 11.25 17.031 21.875 0 13.75-10.781 22.812-28.594 22.812-7.552 0-14.479-1.927-18.958-4.583l4.017-10.988zm-39.687-.417c3.125 1.771 7.292 3.125 11.615 3.125 6.354 0 9.74-2.865 9.74-8.854V40.292h14.427V98.26c0 13.906-8.229 20.312-23.75 20.312-7.188 0-13.073-1.615-16.146-3.125l4.114-11.925z" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 128 128" width="28" height="28">
    <path fill="#539E43" d="M64 12L16 39.7v55.4L64 122.8l48-27.7V39.7L64 12zm29.8 70.8c0 4.1-2.2 7.9-5.7 9.9L68.7 104c-2.9 1.7-6.5 1.7-9.4 0L39.9 92.7c-3.6-2.1-5.7-5.8-5.7-9.9V60.2c0-4.1 2.2-7.9 5.7-9.9L59.3 39c2.9-1.7 6.5-1.7 9.4 0l19.4 11.3c3.6 2.1 5.7 5.8 5.7 9.9v22.6z" />
    <path fill="#FFFFFF" d="M64 50.8L46.8 60.7v19.8L64 90.4l17.2-9.9V60.7L64 50.8z" />
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 128 128" width="28" height="28">
    <path fill="#FF9900" d="M39.6 74.4c-4.4 0-7.8-1.2-10.2-3.6-2.4-2.4-3.6-5.8-3.6-10.2 0-4.6 1.2-8.1 3.7-10.5 2.5-2.4 5.9-3.6 10.3-3.6 2.4 0 4.6.4 6.7 1.2v-2.8c0-2.4-.6-4.2-1.7-5.3-1.1-1.1-2.8-1.7-5-1.7-2.1 0-4.4.5-6.9 1.5l-1.8-5.4c3.1-1.3 6.3-2 9.6-2 4.4 0 7.7 1.1 9.9 3.3 2.2 2.2 3.3 5.5 3.3 9.9v28.8h-6.2v-4.5c-2.1 3.3-5.2 4.9-8.1 4.9zm1.2-5.4c2.1 0 4.1-.7 6-2.1v-9.3c-1.6-.7-3.2-1-4.8-1-2.5 0-4.4.6-5.7 1.8-1.3 1.2-2 2.9-2 5.1 0 2.2.6 3.8 1.8 4.8 1.2.5 2.8.7 4.7.7zm28.3 4.8l-10.5-30.6h7.2l7.1 23 6.9-23h6.6l6.8 23 7.2-23h7.1L94.5 73.8h-6.8l-6.8-22.5-6.7 22.5h-5.1z" />
    <path fill="#FF9900" d="M22.8 88.5c23.6 11.4 53.6 11.4 77.2 0 2.1-1 3.3 1.3 1.2 2.6-25.5 15.6-58.5 15.6-84 0-2.1-1.3-.9-3.6 1.2-2.6z" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 128 128" width="26" height="26">
    <path fill="#F05032" d="M122.7 57.3L70.7 5.3c-3-3-7.9-3-10.9 0L47.5 17.6l13.8 13.8c3.2-1.1 6.9-.3 9.3 2.1 2.5 2.5 3.1 6.2 2 9.4l13.3 13.3c3.2-1.1 6.9-.3 9.4 2.1 3.3 3.3 3.3 8.6 0 11.9-3.3 3.3-8.6 3.3-11.9 0-2.6-2.6-3.3-6.4-2.1-9.7L68.8 47.7v30.4c.8.4 1.5 1 2.1 1.6 3.3 3.3 3.3 8.6 0 11.9-3.3 3.3-8.6 3.3-11.9 0-3.3-3.3-3.3-8.6 0-11.9.8-.8 1.8-1.5 2.9-1.9V47.1c-1.1-.4-2.1-1-2.9-1.9-2.6-2.6-3.3-6.4-2.1-9.7L42.9 22.2 5.3 59.8c-3 3-3 7.9 0 10.9l52 52c3 3 7.9 3 10.9 0l54.5-54.5c3-3 3-7.9 0-10.9z" />
  </svg>
);

const technologiesLeft = [
  {
    name: "Angular",
    role: "Frontend Development",
    Icon: AngularIcon,
    borderColor: "rgba(225, 29, 72, 0.7)",
    glowColor: "rgba(225, 29, 72, 0.5)",
    badgeBg: "rgba(225, 29, 72, 0.18)",
    delay: 0.2,
  },
  {
    name: "React",
    role: "Modern UI",
    Icon: ReactIcon,
    borderColor: "rgba(97, 218, 251, 0.7)",
    glowColor: "rgba(97, 218, 251, 0.5)",
    badgeBg: "rgba(97, 218, 251, 0.18)",
    delay: 1.0,
  },
  {
    name: "Laravel",
    role: "Backend Development",
    Icon: LaravelIcon,
    borderColor: "rgba(255, 45, 32, 0.7)",
    glowColor: "rgba(255, 45, 32, 0.5)",
    badgeBg: "rgba(255, 45, 32, 0.18)",
    delay: 1.8,
  },
  {
    name: "MySQL",
    role: "Database",
    Icon: MySQLIcon,
    borderColor: "rgba(0, 168, 204, 0.7)",
    glowColor: "rgba(0, 168, 204, 0.5)",
    badgeBg: "rgba(0, 168, 204, 0.18)",
    delay: 2.6,
  },
];

const technologiesRight = [
  {
    name: "JavaScript",
    role: "Dynamic Web Apps",
    Icon: JSIcon,
    borderColor: "rgba(247, 223, 30, 0.7)",
    glowColor: "rgba(247, 223, 30, 0.5)",
    badgeBg: "rgba(247, 223, 30, 0.18)",
    delay: 0.6,
  },
  {
    name: "Node.js",
    role: "Backend Services",
    Icon: NodeIcon,
    borderColor: "rgba(104, 160, 99, 0.7)",
    glowColor: "rgba(104, 160, 99, 0.5)",
    badgeBg: "rgba(104, 160, 99, 0.18)",
    delay: 1.4,
  },
  {
    name: "AWS",
    role: "Cloud Services",
    Icon: AWSIcon,
    borderColor: "rgba(255, 153, 0, 0.7)",
    glowColor: "rgba(255, 153, 0, 0.5)",
    badgeBg: "rgba(255, 153, 0, 0.18)",
    delay: 2.2,
  },
  {
    name: "Git",
    role: "Version Control",
    Icon: GitIcon,
    borderColor: "rgba(240, 80, 50, 0.7)",
    glowColor: "rgba(240, 80, 50, 0.5)",
    badgeBg: "rgba(240, 80, 50, 0.18)",
    delay: 3.0,
  },
];

// Glowing Energy Particle Stream past camera
function EnergyParticles({ count = 120 }) {
  const meshRef = useRef();

  const [dummy] = useState(() => new THREE.Object3D());
  const [particles] = useState(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 24,
        y: (Math.random() - 0.5) * 15,
        z: Math.random() * 34 - 17,
        speed: 0.1 + Math.random() * 0.16,
      });
    }
    return temp;
  });

  useFrame(() => {
    if (!meshRef.current) return;
    particles.forEach((p, i) => {
      p.z += p.speed;
      if (p.z > 18) p.z = -17;

      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.setScalar(0.045 + Math.sin(p.z * 0.4) * 0.025);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[0.14, 8, 8]} />
      <meshBasicMaterial color="#00f0ff" transparent opacity={0.7} />
    </instancedMesh>
  );
}

function Scene({ opening, cardsDone, mousePos }) {
  useFrame(({ camera, clock }, delta) => {
    const targetZ = opening ? 5.5 : cardsDone ? 17 : 25;

    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      targetZ,
      opening ? 0.8 : cardsDone ? 0.15 : 0.08,
      delta
    );

    const targetX = (mousePos.x * 0.7) + Math.sin(clock.elapsedTime * 0.3) * 0.1;
    const targetY = (-mousePos.y * 0.5) + Math.cos(clock.elapsedTime * 0.2) * 0.08;

    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 0.1, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 0.1, delta);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.9} />
      <pointLight position={[0, 2, 4]} intensity={28} color="#ffaa33" distance={22} />
      <pointLight position={[-6, 0, -2]} intensity={22} color="#00f0ff" distance={20} />
      <pointLight position={[6, 0, -2]} intensity={22} color="#f59e0b" distance={20} />

      <EnergyParticles count={120} />

      <Stars
        radius={50}
        depth={45}
        count={950}
        factor={3.5}
        fade
        speed={1.5}
      />
    </>
  );
}

export default function IntroScreen({ onEnter }) {
  const [cardsDone, setCardsDone] = useState(false);
  const [opening, setOpening] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Reveal golden portal hero after all cards finish flying past user (~4.8s)
    const timer = setTimeout(() => {
      setCardsDone(true);
    }, 4800);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setCardsDone(true);
  };

  const enter = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(() => onEnter?.(), 1000);
  };

  return (
    <main
      className={`
        journey
        ${cardsDone ? "journey-ready" : "journey-flying"}
        ${opening ? "journey-opening" : ""}
      `}
      style={{
        "--mouse-x": mousePos.x,
        "--mouse-y": mousePos.y,
      }}
    >
      {/* Realistic Sci-Fi Server Room Corridor Background */}
      <div className="journey-bg" aria-hidden="true" />

      {/* Dynamic Neon Blue & Gold Energy Laser Paths Overlay */}
      <svg className="energy-paths-svg" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="neonBlueGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
          </linearGradient>
          <filter id="neonGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path className="energy-path energy-path-1" d="M 0,200 Q 350,380 500,450 T 720,450" stroke="url(#neonBlueGoldGrad)" strokeWidth="2.5" fill="none" filter="url(#neonGlowFilter)" />
        <path className="energy-path energy-path-2" d="M 0,720 Q 300,580 500,450" stroke="#00f0ff" strokeWidth="2" strokeDasharray="12 16" fill="none" filter="url(#neonGlowFilter)" />
        <path className="energy-path energy-path-3" d="M 1440,200 Q 1090,380 940,450 T 720,450" stroke="url(#neonBlueGoldGrad)" strokeWidth="2.5" fill="none" filter="url(#neonGlowFilter)" />
        <path className="energy-path energy-path-4" d="M 1440,720 Q 1140,580 940,450" stroke="#f59e0b" strokeWidth="2" strokeDasharray="12 16" fill="none" filter="url(#neonGlowFilter)" />
      </svg>

      {/* Three.js Particle Stars & Energy Beam Canvas */}
      <div className="journey-canvas" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 17], fov: 63 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        >
          <Scene opening={opening} cardsDone={cardsDone} mousePos={mousePos} />
        </Canvas>
      </div>

      {/* Dark Cinematic Vignette */}
      <div className="journey-vignette" aria-hidden="true" />

      {/* Header Bar */}
      <header className="journey-header">
        <span>
          CR<span className="journey-dot">.</span>
        </span>
        <span>CHANUKA RANDITHA / FULL STACK DEVELOPER</span>
      </header>

      {/* Left Column Floating Tech Cards (Fly past viewer's shoulder into background behind) */}
      <div className="journey-cards-col journey-cards-left" aria-hidden="true">
        {technologiesLeft.map((tech) => (
          <div
            key={tech.name}
            className="tech-card tech-card-left"
            style={{
              "--border-color": tech.borderColor,
              "--glow-color": tech.glowColor,
              "--badge-bg": tech.badgeBg,
              "--card-delay": `${tech.delay}s`,
            }}
          >
            <div className="tech-icon-wrapper">
              <tech.Icon />
            </div>
            <div className="tech-text-wrapper">
              <span className="tech-name">{tech.name}</span>
              <span className="tech-role">{tech.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column Floating Tech Cards (Fly past viewer's shoulder into background behind) */}
      <div className="journey-cards-col journey-cards-right" aria-hidden="true">
        {technologiesRight.map((tech) => (
          <div
            key={tech.name}
            className="tech-card tech-card-right"
            style={{
              "--border-color": tech.borderColor,
              "--glow-color": tech.glowColor,
              "--badge-bg": tech.badgeBg,
              "--card-delay": `${tech.delay}s`,
            }}
          >
            <div className="tech-icon-wrapper">
              <tech.Icon />
            </div>
            <div className="tech-text-wrapper">
              <span className="tech-name">{tech.name}</span>
              <span className="tech-role">{tech.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Center Server Room Portal Hero Section */}
      <div className={`journey-center-hero ${cardsDone ? "hero-visible" : "hero-hidden"}`}>
        <h1 className="hero-name">
          <span className="name-line">CHANUKA</span>
          <span className="name-line">RANDITHA</span>
        </h1>
        <p className="hero-role">FULL STACK DEVELOPER</p>
        <div className="hero-accent-bar" />

        <button
          type="button"
          className="hero-enter-btn"
          onClick={enter}
        >
          <span>Enter Portfolio</span>
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>

      {/* Skip Intro Button */}
      {!cardsDone && (
        <button
          type="button"
          className="journey-skip-btn"
          onClick={handleSkip}
        >
          Skip intro →
        </button>
      )}
    </main>
  );
}