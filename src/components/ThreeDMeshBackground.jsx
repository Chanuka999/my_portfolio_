import React from "react";
import { motion } from "framer-motion";

const ThreeDMeshBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 3D Mesh Grid */}
      <div className="absolute inset-0">
        {/* Horizontal Lines */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-blue-400/40 dark:bg-blue-500/30"
            style={{ top: `${i * 7}%` }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Vertical Lines */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-[1px] bg-purple-400/40 dark:bg-purple-500/30"
            style={{ left: `${i * 7}%` }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated 3D Dots */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500/50 to-purple-600/50 dark:from-blue-400/40 dark:to-purple-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              scale: [1, 1.8, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Triangles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`tri-${i}`}
            className="absolute w-12 h-12"
            style={{
              left: `${10 + i * 15}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 180, 360],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            <div className="w-full h-full border-l-2 border-b-2 border-blue-500/50 dark:border-blue-400/40"></div>
          </motion.div>
        ))}

        {/* Squares */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`sq-${i}`}
            className="absolute w-8 h-8"
            style={{
              right: `${10 + i * 18}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <div className="w-full h-full border-2 border-purple-500/50 dark:border-purple-400/40 rounded-sm"></div>
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default ThreeDMeshBackground;
